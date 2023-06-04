import { useEffect, useContext, useMemo } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { io } from 'socket.io-client';
import ChatAccount from './chatAccount';
import { sortChats } from '../sortChats';
import { IChats } from '../../../interfaces';
import ChatsService from '../../../services/Chats.service';
import { DeleteChatProvider } from './deleteChatsContext';
import ChatsTop from '../chatsTop';
import DeleteChatsBanner from './deleteChatsBanner';
import { ChatContext } from '../../chatContext';



const ChatAccountsConteiner = () => {

    let { chatName } = useParams<"chatName">();
    //const chatName = localStorage.getItem('user')

    const chatContext = useContext(ChatContext)

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
        <DeleteChatProvider>
            <DeleteChatsBanner />
            <div className={'md:w-1/3 rounded-2xl w-full h-full border-r-h5 dark:border-r-hd5 transition-all border-r absolute md:static z-50' + (
                chatContext.showSearchPannel ? ' right-0 bg-h1 dark:bg-hd1' : ' right-[100%]'
            )}>
                <ChatsTop />
                <div className='absolute left-0 md:right-2/3 right-0 top-14 bottom-0 overflow-y-auto scrollbar-thin overflow-scroll 
                scrollbar-track-transparent scrollbar-thumb-transparent'>
                    {
                        chats.map((e) => {
                            return (
                                <ChatAccount key={Math.random()} message={e.message} login={e.users[0] === chatName ? e.users[1] : e.users[0]} ></ChatAccount>
                            )
                        })
                    }
                </div>
            </div>
        </DeleteChatProvider>
    )
}

export default ChatAccountsConteiner