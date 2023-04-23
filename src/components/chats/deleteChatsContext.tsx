import { createContext, useMemo, useState } from 'react'
import { useEffect } from 'react';


interface DeleteChatContext {
  deleteMode: boolean
  setDeleteMode: (value:boolean) => void

  chats: string[][]

  addChat: (value:string[]) => void
  deleteChat: (value:string[]) => void

  resetChats: () => void
}

export const DeleteChatContext = createContext<DeleteChatContext>({
  deleteMode: false,
  setDeleteMode: () => {},
  chats: [],
  addChat: () => { },
  deleteChat: () => { },
  resetChats: () => { }
})

export const DeleteChatProvider = ({ children }: any) => {

  const [deleteMode,changeDeleteMode] = useState(false)

  const setDeleteMode = (value:boolean) => {
    changeDeleteMode(value)
  }

  useEffect(()=>{console.log('DeleteMode: ' + deleteMode);
  },[deleteMode])

  const [chats,setChats] = useState<Array<Array<string>>>([])

  const addChat = (value:string[]) => {
    setChats((prev)=>[...prev,value])
  }

  const deleteChat = (value:string[]) => {
    setChats(chats.filter((e)=>{return e[0] !== value[0] || e[1] !== value[1]}))
  }

  const resetChats = () => {
    setChats([])
  }

  return (
    <DeleteChatContext.Provider value={{
      deleteMode: deleteMode,
      setDeleteMode: setDeleteMode,
      chats: chats,
      addChat : addChat,
      deleteChat:deleteChat,
      resetChats:resetChats
    }}>
      {children}
    </DeleteChatContext.Provider>
  )
}