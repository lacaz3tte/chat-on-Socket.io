import { createContext, useEffect, useMemo, useState } from 'react'


interface ChatContext {
  chatName: string
  moveToChat: (value: string) => void

  chatRoom: string
  changeChatRoom: (value: string) => void

  //for mobile version
  showSearchPannel:boolean
  changeSearchPannel: (value: boolean) => void
}

export const ChatContext = createContext<ChatContext>({
  chatName: '',
  moveToChat: () => { },
  chatRoom: '',
  changeChatRoom: () => { },

  //for mobile version
  showSearchPannel:false,
  changeSearchPannel: () => { }
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

  //for mobile version
  const [showSearchPannel,setShowSearchPannel] = useState(false)

  const changeSearchPannel = (value:boolean) => {
    setShowSearchPannel(value)
  }

  useEffect(()=>{
    console.log(showSearchPannel)
  },[
    showSearchPannel
  ])

  return (
    <ChatContext.Provider value={{
      chatName: chatName,
      moveToChat: moveToChat,
      chatRoom:chatRoom,
      changeChatRoom:changeChatRoom,

      //for mobile version
      showSearchPannel:showSearchPannel,
      changeSearchPannel:changeSearchPannel
    }}>
      {children}
    </ChatContext.Provider>
  )
}