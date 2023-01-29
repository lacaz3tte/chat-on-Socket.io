import React, {useState, useRef} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import BackButton from '../components/backButton'
import DarkModeButton from '../components/darkModeButton'

const CreateAccount = () => {

    const [name,setName] = useState('')
    const [password,setPassword] = useState('')
    const [header,setHeader] = useState('Create account')
    const buttonRef = useRef<HTMLButtonElement>(null)

    const keyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.code === "Enter") {
            buttonRef.current?.click()
        }
    }; 

    const clickHandle = async()=>{
        if(name==''||password==''){
            setHeader('Login or password is empty')
        } else {
            await fetch('http://localhost:3001/create',{
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({name: name, pass: password})
            }).then(res=>res.json()).then(res=>{
                if(res===false){
                    setHeader('There is already an account with this name')
                } else {
                    setName('')
                    setPassword('')
                    setHeader('Account created')
                }
            })
        }
    }

  return (
    <div className='absolute top-0 left-0 right-0 bottom-0  flex items-center justify-center bg-gradient-to-r from-hDarkBlue to-hBlue'>
        <div className='h-2/3 min-h-[400px] min-w-[325px] w-1/2 bg-hDarkBlue relative'>
                <BackButton/>
                <div className='absolute top-14 bottom-0 left-0 right-0 flex flex-col justify-center items-center'>
                    <p className='font-bold text-3xl m-10 text-hLight'>{header}</p>
                    <input 
                        autoFocus
                        onKeyDown={keyDownHandler}
                        type='text' 
                        className='h-10 block min-h-[40px] w-1/2 m-2 px-5 bg-transparent border border-hLight text-hLight placeholder:text-hLight focus:outline-none'
                        placeholder='Login...'
                        value={name}
                        onChange={(e)=>{setName(e.target.value)}}
                    ></input>
                    <input 
                        onKeyDown={keyDownHandler}
                        type='password' 
                        className='h-10 min-h-[40px] block w-1/2 m-2 px-5 bg-transparent border border-hLight text-hLight placeholder:text-hLight focus:outline-none'
                        placeholder='Password...'
                        value={password}
                        onChange={(e)=>{setPassword(e.target.value)}}
                    ></input>
                    <button 
                        ref={buttonRef}
                        className='m-10 px-10 p-2 border border-hLight text-hLight hover:text-hDarkBlue hover:bg-hLight active:text-hLight active:bg-transparent'
                        onClick={()=>clickHandle()}
                    >Create
                    </button>
                </div>
        </div>
      
      </div>
  )
}

export default CreateAccount