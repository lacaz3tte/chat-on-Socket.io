import React from 'react'
import { useMemo, useState, useRef, useEffect  } from 'react'
import { useParams } from 'react-router-dom'
import io from 'socket.io-client'
import Massage from '../massage/Massage'
import { IData } from './interfaces'


const Chat = () => {
    const socket = useMemo(()=>io('http://127.0.0.1:3001'),[]) 

    let { chatName } = useParams<"chatName">();
    const buttonRef = useRef<HTMLButtonElement>(null)

    socket.on('connection', message => {
      console.log(message) 
    })
  
    useMemo(()=>{
      socket.on('massage',(massage:IData)=>{
        setMassages(prev=>[...prev,massage])
        console.log(massage)
      })}
    ,[])
  
    const [msg,setMsg]=useState('')
  
    const [massages,setMassages] = useState<IData[]>([])

    const keyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.code === "Enter") {
          buttonRef.current?.click()
      }
    };

    useEffect(()=>{
      console.log(massages);
      
    },[massages])
  
    return (
      <div className='absolute top-0 left-0 right-0 bottom-0  flex items-center justify-center bg-hMint'>
        <div className='h-2/3 w-1/2  rounded-3xl relative bg-hWhite'>
            <div className='m-2 p-5 absolute left-0 right-0 bottom-14 top-0 overflow-auto  '>
            {massages &&
              massages.map((e,i)=>{ return(
                <Massage 
                  key={i}
                  name={e.name==massages[i-1]?.name ? '' : e.name}
                  msg={e.msg}
                  date={e.date}
                  foreign={chatName==e.name?true:false}
                ></Massage>
                )
              })
            }
            </div>
            <div className='flex flex-row justify-between  absolute bottom-0 right-0  h-14 left-0 rounded-3xl'>
              <input 
                autoFocus
                onKeyDown={keyDownHandler}
                type='text' 
                className='w-full m-2 px-2 bg-transparent shadow-md placeholder:text-hDarkGreen focus:border-hDarkGreen border rounded-full focus:outline-none h-10'
                placeholder='Введите сообщение...'
                onChange={(e)=>{setMsg(e.target.value)}}
                value={msg}
              ></input>
              <button 
                ref = {buttonRef}
                className='m-2 px-10 border rounded-full bg-hGreen text-hMint active:bg-hWhite hover:border-hDarkGreen' 
                onClick={()=>{
                  socket.emit('massage',{name:chatName,msg:msg,date:Date.now()})
                  setMassages(prev=>[...prev,{name:chatName,msg:msg,date:Date.now()}])
                  setMsg('')
                }}
              >Send</button>
            </div>
          
        </div>
      
      </div>
    )}

export default Chat