import { createContext, useMemo, useState } from 'react'


interface ChatContext {
  chatName: string
  moveToChat: (value: string) => void

  chatRoom: string
  changeChatRoom: (value: string) => void
}

export const ChatContext = createContext<ChatContext>({
  chatName: '',
  moveToChat: () => { },
  chatRoom: '',
  changeChatRoom: () => { }
})

export const ChatProvider = ({ children }: any) => {

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