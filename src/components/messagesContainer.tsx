import React from 'react'
import Message from '../massage/Message';
import { IData } from './../pages/interfaces';

interface IDataTransfer {
  messages:IData[],
  chatName:string|undefined
}


const MessagesContainer = ({chatName,messages}:IDataTransfer) => {
  return (
    <div className="absolute bottom-14 top-14 left-0 right-0 scrollbar-thin overflow-scroll scrollbar-track-hBlue scrollbar-thumb-hLight">
      {messages &&
        messages.map((e, i) => {
          return (
            <Message
              key={i}
              name={e.name == messages[i - 1]?.name ? "" : e.name}
              msg={e.msg}
              date={e.date}
              foreign={chatName == e.name ? true : false}
            ></Message>
          );
        })}
    </div>
  )
}

export default MessagesContainer