import { createContext, useMemo, useState } from 'react'
import { io, Socket } from 'socket.io-client'

interface Context {
  chatName: string
  moveToChat: (value: string) => void
  chatRoom: string
  changeChatRoom: (value: string) => void
}

export const ChatContext = createContext<Context>({
  chatName: '',
  moveToChat: () => { },
  chatRoom: '',
  changeChatRoom: () => { }
})

export const ChatProvider = ({ children }: any) => {

  const socket = useMemo(() => io("http://127.0.0.1:3001"), []);

  const [chatName, setChatName] = useState('')

  const moveToChat = (chat: string) => {
    setChatName(chat)
  }

  const [chatRoom,setChatRoom] = useState('')

  const changeChatRoom = (room: string) => {
    setChatRoom(room)
  }

  return (
    <ChatContext.Provider value={{
      chatName: chatName,
      moveToChat: moveToChat,
      chatRoom:chatRoom,
      changeChatRoom:changeChatRoom
    }}>
      {children}
    </ChatContext.Provider>
  )
}