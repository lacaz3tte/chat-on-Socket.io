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
        className="absolute bottom-14 top-16 left-0 right-0 scrollbar-thin overflow-scroll scrollbar-track-h1 scrollbar-thumb-h4 dark:scrollbar-track-hd1 dark:scrollbar-thumb-hd4 transition-all"
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
          className="w-full m-2 px-2 h-10 bg-transparent border-b outline-none border-h2 dark:border-hd2 text-h2 dark:text-hd2  placeholder:text-h2 dark:placeholder:text-hd2 transition-all"
          placeholder="Write message..."
          onChange={(e) => {
            setMsg(e.target.value);
          }}
          value={msg}
        ></input>
        <button
          //ref={buttonRef}
          className="m-2 lg:px-10 px-2 active:bg-transparent rounded-full bg-h4 dark:bg-hd4 text-h1 dark:text-hd1 hover:bg-h3 dark:hover:bg-hd3 active:text-h3 dark:active:text-hd3 dark:active:bg-transparent transition-all"
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