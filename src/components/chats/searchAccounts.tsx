import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { IAccountsTransfer } from '../../interfaces';
import AccountsService from '../../services/Accounts.service';
import SearchAccount from './searchAccount';
import { useDebounce } from './useDebounce';

const SearchAccounts = () => {

  const [search, setSearch] = useState(false)

  const [inputValue, setInputValue] = useState('')

  const debounceSearch = useDebounce(inputValue, 500)

  useEffect(() => {
    if (debounceSearch) {
      AccountsService.getAccounts(inputValue).then(res => { setAccounts(res.data) })
    } else {
      AccountsService.getAllAccounts().then(res => { setAccounts(res.data) })
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
        className="absolute top-0 left-0 right-0 m-2 px-2 h-10 outline-none bg-transparent border-b border-h2 text-h2 placeholder:text-h2 dark:border-hd2 dark:text-hd2 dark:placeholder:text-hd2 transition-all font-rubic_light"
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
        <div className='absolute top-14 m-2 left-0 right-0 max-h-56 z-10 scrollbar-thin overflow-scroll scrollbar-track-h1 scrollbar-thumb-h4 bg-h5 rounded-xl dark:scrollbar-track-hd1 dark:scrollbar-thumb-hd4 dark:bg-hd5 transition-all'>
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