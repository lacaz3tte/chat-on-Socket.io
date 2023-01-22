import React, {useState, useRef} from 'react'
import {Link} from 'react-router-dom'

const Autorisation = () => {

    const [name,setName] = useState('')
    const linkRef = useRef<HTMLAnchorElement>(null)

    const keyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.code === "Enter") {
            linkRef.current?.click()
        }
      };
    

  return (
    <div className='absolute top-0 left-0 right-0 bottom-0  flex items-center justify-center'>
        <div className='h-2/3 w-1/2 border border-gray-400 rounded-3xl flex justify-center items-center flex-col'>
                <p className='font-medium text-lg m-5'>Enter your name</p>
                <input 
                    autoFocus
                    onKeyDown={keyDownHandler}
                    type='text' 
                    className=' m-2 px-5 bg-white placeholder-stone-900 border rounded-full focus:outline-none focus:border-teal-500 h-10 block w-1/2 shadow-md'
                    placeholder='Введите имя...'
                    value={name}
                    onChange={(e)=>{setName(e.target.value)}}
                ></input>
                <button 
                    className='m-5 px-10 border rounded-full p-2 hover:border-teal-500 active:bg-white shadow-md'
                >
                    <Link ref={linkRef} to={"chat/"+name}>Enter</Link>
                </button>
        </div>
      
      </div>
  )
}

export default Autorisation