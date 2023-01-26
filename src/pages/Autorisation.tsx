import React, {useState, useRef} from 'react'
import {Link, useNavigate} from 'react-router-dom'

const Autorisation = () => {

    const navigate = useNavigate()

    const [name,setName] = useState('')
    const [password,setPassword] = useState('')
    const [header,setHeader] = useState('Enter your name and password')
    const buttonRef = useRef<HTMLButtonElement>(null)

    const keyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.code === "Enter") {
            buttonRef.current?.click()
        }
    }; 

    const clickHandle = async()=>{
        await fetch('http://localhost:3001/auth',{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name: name, pass: password})
        }).
        then(res=>res.json()).
        then(res=>{
            if(res.username==null){
                setHeader('Invalid name or password')
            } else {
                navigate("chat/"+res.username)
            }
        })}
    

  return (
    <div className='absolute top-0 left-0 right-0 bottom-0  flex items-center justify-center bg-hMint'>
        <div className='h-2/3 w-1/2  rounded-3xl flex justify-center items-center flex-col bg-hWhite shadow-2xl'>
                <p className='font-medium text-lg m-5 text-hDarkGreen'>{header}</p>
                <input 
                    autoFocus
                    onKeyDown={keyDownHandler}
                    type='text' 
                    className=' m-2 px-5 bg-transparent placeholder:text-hDarkGreen border rounded-full focus:outline-none focus:border-hDarkGreen h-10 block w-1/2 shadow-md'
                    placeholder='Login...'
                    value={name}
                    onChange={(e)=>{setName(e.target.value)}}
                ></input>
                <input 
                    onKeyDown={keyDownHandler}
                    type='text' 
                    className=' m-2 px-5 bg-transparent placeholder:text-hDarkGreen focus:border-hDarkGreen border rounded-full focus:outline-none h-10 block w-1/2 shadow-md'
                    placeholder='Password...'
                    value={password}
                    onChange={(e)=>{setPassword(e.target.value)}}
                ></input>
                <button 
                    ref={buttonRef}
                    className='m-5 px-10 border bg-hGreen text-hMint rounded-full p-2 active:bg-hWhite hover:border-hDarkGreen shadow-md'
                    onClick={()=>clickHandle()}
                >Enter
                </button>
        </div>
      
      </div>
  )
}

export default Autorisation