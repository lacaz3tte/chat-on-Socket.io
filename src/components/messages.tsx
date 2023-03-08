import React, { useContext, useMemo, useRef, useState } from 'react'
import { io } from 'socket.io-client';
import Message from '../massage/Message';
import { IData } from '../pages/interfaces';
import { useEffect } from 'react';
import { ChatContext } from './chatContext';
import { useParams } from 'react-router-dom';

const Messages = () => {

  const messageRef = useRef<HTMLDivElement>(null);

  const chatContext = useContext(ChatContext)

  let { chatName } = useParams<"chatName">() ;

  const [messages, setMessages] = useState<IData[]>([]);
  const [msg, setMsg] = useState('')

  const socket = useMemo(() => io("http://127.0.0.1:3001"), []);

  useMemo(() => {
    
    socket.on("updateDialogs", (message) => {
      console.log(message);
    })

    //get message from another user
    socket.on("messageToClient", (message: IData) => {
      setMessages((prev) => [...prev, message]);
    });

    //get history of messages
    socket.on("getMessages", (messages: any) => {
      setMessages(() => messages);
    });
  }, []);

  //reconnecting to room
  useEffect(() => {
    socket.emit('roomMembers', [chatName, chatContext.chatName])
  }, [chatContext.chatName])

  return (
    <div>
      <div
        className="absolute bottom-14 top-14 left-0 right-0 scrollbar-thin overflow-scroll scrollbar-track-hBlue scrollbar-thumb-hLight "
        ref={messageRef}
      >
        {messages &&
          messages.map((e, i) => {
            return (
              <Message
                key={i}
                name={e.name == messages[i - 1]?.name ? "" : e.name}
                msg={e.msg}
                date={e.date}
                foreign={chatContext.chatName == e.name ? true : false}
              ></Message>
            );
          })}
      </div>
      <div className="flex flex-row justify-between absolute bottom-0 right-0 h-14 left-0 rounded-3xl">
        <input
          autoFocus
          //onKeyDown={keyDownHandler}
          type="text"
          className="w-full m-2 px-2 h-10 bg-transparent border border-hLight text-hLight placeholder:text-hLight focus:outline-none"
          placeholder="Write message..."
          onChange={(e) => {
            setMsg(e.target.value);
          }}
          value={msg}
        ></input>
        <button
          //ref={buttonRef}
          className="m-2 lg:px-10 px-2 border border-hLight text-hLight hover:text-hDarkBlue hover:bg-hLight active:text-hLight active:bg-transparent"
          onClick={() => {
            if (msg != "") {
              socket.emit("messageToServer", {
                name: [chatContext.chatName, chatName],
                msg: msg,
                date: Date.now()
              })

              setMessages((prev) => [
                ...prev,
                { name: chatName, msg: msg, date: Date.now() },
              ])
              setMsg("")
            }
          }}
        >
          Send
        </button>
      </div>
    </div>
  )
}

export default Messages