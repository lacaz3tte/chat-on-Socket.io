import React, {useEffect} from 'react'
import ChatAccount from './chatAccount';
import { useState } from 'react';
import axios from 'axios';

interface IDataTransfer {
    login:string
    _id:string
}

const ChatAccountsConteiner = () => {

    const [chats,setChats] = useState<IDataTransfer[]>([])

    useEffect(() => {
        axios.get("http://localhost:3001/login").then(res=>{setChats(res.data)})
    }, []);
    return (
        <div className='w-1/3 h-full bg-hDarkBlue border-r border-l-hLight relative overflow-y-auto scrollbar-thin overflow-scroll 
        scrollbar-track-transparent scrollbar-thumb-transparent'>
            <input
                type="text"
                className="absolute top-0 left-0 right-0 m-2 px-2 h-10 bg-transparent border border-hLight text-hLight placeholder:text-hLight focus:outline-none"
                placeholder="Saerch..."
                onChange={(e) => { }}
            ></input>
            <div className='absolute left-0 right-0 top-14 bottom-0 '>
                {
                    chats.map((e)=>{
                        return (
                            <ChatAccount key={e._id} login={e.login} ></ChatAccount>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ChatAccountsConteiner