import { useContext, useMemo, useRef, useState, useEffect } from 'react'
import { io } from 'socket.io-client';
import { useParams } from 'react-router-dom';
import { ChatContext } from '../chatContext';
import GetDate from './massage/getDate';
import { IData } from '../../interfaces';
import Message from './massage/Message';

const Messages = () => {

  const messageRef = useRef<HTMLDivElement>(null);

  const chatContext = useContext(ChatContext)

  let { chatName } = useParams<"chatName">();
  //const chatName = localStorage.getItem('user')

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
        className="absolute bottom-14 top-16 left-0 right-0 scrollbar-thin overflow-scroll scrollbar-thumb-h4 dark:scrollbar-thumb-hd4 transition-all"
        ref={messageRef}
      >
        {messages &&
          messages.map((e, i) => {
            return (
              <div key={i}>
                {messages[i - 1] ?
                  <GetDate date={e.date} prevDate={messages[i - 1].date} /> :
                  <GetDate date={e.date} />
                }
                <Message
                  key={i}
                  name={e.name == messages[i - 1]?.name ? "" : e.name}
                  msg={e.msg}
                  date={e.date}
                  foreign={chatContext.chatName == e.name ? true : false}
                ></Message>
              </div>
            );
          })}
      </div>
      <div className="flex flex-row justify-between absolute bottom-0 right-0 h-14 left-0 rounded-b-3xl  border-t border-h5 dark:border-t-hd5">
        <input
          autoFocus
          //onKeyDown={keyDownHandler}
          type="text"
          className="w-full m-2 px-2 h-10 bg-transparent border-b outline-none border-h2 dark:border-hd2 text-h2 dark:text-hd2  placeholder:text-h2 dark:placeholder:text-hd2 transition-all font-rubic_light"
          placeholder="Write message..."
          onChange={(e) => {
            setMsg(e.target.value);
          }}
          value={msg}
        ></input>
        <button
          //ref={buttonRef}
          className='m-2 mr-4'
          onClick={() => {
            if (msg != "" && chatName) {
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
          <svg 
            className="h-8 w-8 fill-h4 dark:fill-hd4 hover:fill-h3 hover:dark:fill-hd3 active:fill-transparent dark:active:fill-transparent"  
            width="24" height="24" 
            viewBox="0 0 24 24" 
            stroke-width="0" 
            stroke="currentColor" 
            fill="none" > 
            <path 
              fill-rule="evenodd" 
              clip-rule="evenodd"
              d="M3.3938 2.20468C3.70395 1.96828 4.12324 1.93374 4.4679 2.1162L21.4679 11.1162C21.7953 11.2895 22 11.6296 22 12C22 12.3704 21.7953 12.7105 21.4679 12.8838L4.4679 21.8838C4.12324 22.0662 3.70395 22.0317 3.3938 21.7953C3.08365 21.5589 2.93922 21.1637 3.02382 20.7831L4.97561 12L3.02382 3.21692C2.93922 2.83623 3.08365 2.44109 3.3938 2.20468ZM6.80218 13L5.44596 19.103L16.9739 13H6.80218ZM16.9739 11H6.80218L5.44596 4.89699L16.9739 11Z"  
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Messages