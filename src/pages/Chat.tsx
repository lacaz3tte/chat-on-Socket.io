import React from 'react'
import { useMemo, useState, useRef, useEffect  } from 'react'
import { useParams } from 'react-router-dom'
import io from 'socket.io-client'
import BackButton from '../components/backButton'
import Message from '../massage/Message'
import { IData } from './interfaces'


const Chat = () => {
    const socket = useMemo(()=>io('http://127.0.0.1:3001'),[]) 

    let { chatName } = useParams<"chatName">();
    const buttonRef = useRef<HTMLButtonElement>(null)

    socket.on('connection', message => {
      console.log(message) 
    })
  
    useMemo(()=>{
      socket.on('message',(message:IData)=>{
        setMessages(prev=>[...prev,message])
      })}
    ,[])
  
    const [msg,setMsg]=useState('')
  
    const [messages,setMessages] = useState<IData[]>([])

    const keyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.code === "Enter") {
          buttonRef.current?.click()
      }
    };

    useEffect(()=>{
      fetch('http://localhost:3001/mess',{
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
      }).
      then(res=>res.json()).
      then(res=>setMessages(res))
    },[]) 
  
    return (
      <div className='absolute top-0 left-0 right-0 bottom-0  flex items-center justify-center bg-gradient-to-r from-hDarkBlue to-hBlue'>
        <div className='h-2/3 w-1/2 min-h-[400px] min-w-[325px] relative bg-hDarkBlue'>
          <div className='flex justify-between items-center'>
            <BackButton/>
            <p className='inline text-hLight text-2xl mx-5 underline'>{chatName}</p>
          </div>
          <div className='absolute bottom-14 top-14 left-0 right-0 scrollbar-thin overflow-scroll scrollbar-track-hBlue scrollbar-thumb-hLight'>
            {messages &&
              messages.map((e,i)=>{ return(
                <Message 
                  key={i}
                  name={e.name==messages[i-1]?.name ? '' : e.name}
                  msg={e.msg}
                  date={e.date}
                  foreign={chatName==e.name?true:false}
                ></Message>
                )
              })
            }
          </div>
          <div className='flex flex-row justify-between absolute bottom-0 right-0 h-14 left-0 rounded-3xl'>
            <input 
              autoFocus
              onKeyDown={keyDownHandler}
              type='text' 
              className='w-full m-2 px-2 h-10 bg-transparent border border-hLight text-hLight placeholder:text-hLight focus:outline-none'
              placeholder='Write message...'
              onChange={(e)=>{setMsg(e.target.value)}}
              value={msg}
            ></input>
            <button 
              ref = {buttonRef}
              className='m-2 lg:px-10 px-2 border border-hLight text-hLight hover:text-hDarkBlue hover:bg-hLight active:text-hLight active:bg-transparent' 
              onClick={()=>{
                if(msg!=''){
                  socket.emit('message',{name:chatName,msg:msg,date:Date.now()})
                  setMessages(prev=>[...prev,{name:chatName,msg:msg,date:Date.now()}])
                  setMsg('')
                }
              }}
            >Send</button>
          </div>
        </div>
      </div>
    )}

export default Chat