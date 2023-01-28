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
    <div className='absolute top-0 left-0 right-0 bottom-0  flex items-center justify-center bg-gradient-to-r from-hDarkBlue to-hBlue'>
        <div className='h-2/3 w-1/2 flex justify-center items-center flex-col bg-hDarkBlue '>
                <p className='text-3xl  m-10 text-hLight'>{header}</p>
                <input 
                    autoFocus
                    onKeyDown={keyDownHandler}
                    type='text' 
                    className='h-10 block w-1/2 m-2 px-5 bg-transparent border border-hLight text-hLight placeholder:text-hLight focus:outline-none'
                    placeholder='Login...'
                    value={name}
                    onChange={(e)=>{setName(e.target.value)}}
                ></input>
                <input 
                    onKeyDown={keyDownHandler}
                    type='password' 
                    className='h-10 block w-1/2 m-2 px-5 bg-transparent border border-hLight text-hLight placeholder:text-hLight focus:outline-none'
                    placeholder='Password...'
                    value={password}
                    onChange={(e)=>{setPassword(e.target.value)}}
                ></input>
                <button 
                    className='text-hLight p-3 underline'
                    onClick={()=>navigate('/create')}
                >Or create an account</button>
                <button 
                    ref={buttonRef}
                    className='m-5 px-10 p-2 border border-hLight text-hLight hover:text-hDarkBlue hover:bg-hLight active:text-hLight active:bg-transparent'
                    onClick={()=>clickHandle()}
                >Enter
                </button>
        </div>
      
      </div>
  )
}

export default Autorisation