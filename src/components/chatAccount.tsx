import React, { useMemo } from 'react'
import { useContext } from 'react';
import { ChatContext } from './chatContext';
import axios from "axios";
import { useParams } from 'react-router-dom';
import { io } from 'socket.io-client';


interface IDataTransfer {
  login:string
}

const ChatAccount = ({login}:IDataTransfer) => {

  const chatContext=useContext(ChatContext)

  return (
    <div 
      className='m-2 p-2 border border-hLight text-hLight hover:text-hDarkBlue hover:bg-hLight transition-all hover:cursor-pointer'
      onClick={()=>{
        chatContext.moveToChat(login)
      }}
    >
      <p className='underline font-bold'>{login}</p>
      <p className='overflow-hidden text-ellipsis'></p>
    </div>
  )
}

export default ChatAccount