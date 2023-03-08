import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { IAccountsTransfer } from '../../interfaces';
import SearchAccount from './searchAccount';
import { useDebounce } from './useDebounce';

const SearchAccounts = () => {

  const [search, setSearch] = useState(false)

  const [inputValue, setInputValue] = useState('')

  const debounceSearch = useDebounce(inputValue, 500)

  useEffect(() => {
    if (debounceSearch) {
      axios.post("http://localhost:3001/searchLogins", { inputValue }).then(res => { setAccounts(res.data) })
    } else {
      axios.get("http://localhost:3001/login").then(res => { setAccounts(res.data) })
    }
  }, [debounceSearch])

  const [accounts, setAccounts] = useState<IAccountsTransfer[]>([])

  document.onclick = (() => { setSearch(false) })

  return (
    <div
      onClick={(e) => { e.stopPropagation() }}
    >
      <input
        type="text"
        className="absolute top-0 left-0 right-0 m-2 px-2 h-10 bg-transparent border border-hLight text-hLight placeholder:text-hLight focus:outline-none"
        placeholder="Saerch..."
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value)
        }}
        onFocus={() => {
          setSearch(true)
        }}
      ></input>
      {
        search &&
        <div className='absolute top-14 mx-2 left-0 right-0 max-h-56 z-10 scrollbar-thin overflow-scroll scrollbar-track-hBlue scrollbar-thumb-hLight bg-hDarkBlue border'>
          {accounts &&
            accounts.map((e, i) => {
              return (
                <div
                  key={i}
                  onClick={() => { setSearch(false) }}
                >
                  <SearchAccount
                    key={Date.now()}
                    login={e.login}
                  ></SearchAccount>
                </div>
              );
            })}

        </div>
      }
    </div>
  )
}

export default SearchAccounts