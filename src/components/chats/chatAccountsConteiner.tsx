import { useEffect, useContext, useMemo } from 'react'
import ChatAccount from './chatAccount';
import { useState } from 'react';
import { IData } from '../../pages/interfaces'
import { useParams } from 'react-router-dom';
import SearchAccounts from './searchAccounts';
import { sortChats } from './sortChats';
import { IChats } from '../../interfaces';
import { ChatContext } from '../chatContext';
import { io } from 'socket.io-client';
import ChatsService from '../../services/Chats.service';



const ChatAccountsConteiner = () => {

    let { chatName } = useParams<"chatName">();
    //const chatName = localStorage.getItem('user')

    const socket = useMemo(() => io("http://127.0.0.1:3001"), []);

    useEffect(() => {
        socket.emit('wgoAmI', chatName)
    }, [])

    socket.emit("arr", { chatName })

    socket.on("a", (message) => {
        setChats(message.sort(sortChats));
    })

    /* useMemo(() => {
        socket.on("updateDialogs", (message) => {
            console.log('+');
            setChats(message.sort(sortChats));
        })
    }, []); */

    const [chats, setChats] = useState<IChats[]>([])

    useEffect(() => {
        ChatsService.chats(chatName).then(res => {
            setChats(res.data.sort(sortChats))
        })
    }, []);
    return (
        <div className='w-1/3 h-full border-r-h5 dark:border-r-hd5 transition-all border-r relative overflow-y-auto scrollbar-thin overflow-scroll 
            scrollbar-track-transparent scrollbar-thumb-transparent'>
            <SearchAccounts />
            <div className='absolute left-0 right-0 top-14 bottom-0 '>
                {
                    chats.map((e) => {
                        return (
                            <ChatAccount key={Math.random()} message={e.message} login={e.users[0] === chatName ? e.users[1] : e.users[0]} ></ChatAccount>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ChatAccountsConteiner