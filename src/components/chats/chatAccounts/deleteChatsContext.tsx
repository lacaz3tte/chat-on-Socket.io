import { createContext, useMemo, useState } from 'react'
import { useEffect } from 'react';


interface DeleteChatContext {
  deleteMode: boolean
  setDeleteMode: (value:boolean) => void

  bannerVisiable:boolean
  setBannerVisiable:(value:boolean)=> void

  chats: string[][]

  addChat: (value:string[]) => void
  deleteChat: (value:string[]) => void

  resetChats: () => void
}

export const DeleteChatContext = createContext<DeleteChatContext>({
  deleteMode: false,
  setDeleteMode: () => {},
  bannerVisiable:false,
  setBannerVisiable:()=>{},
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

  const [bannerVisiable,changeBannerVisiable] = useState(false)

  const setBannerVisiable = (value:boolean) => {
    changeBannerVisiable(value)
  }
  
  const [chats,setChats] = useState<Array<Array<string>>>([])
  
  useEffect(()=>{console.log('DeleteChats: ' + chats);
  },[chats])

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
      bannerVisiable:bannerVisiable,
      setBannerVisiable:setBannerVisiable,
      chats: chats,
      addChat : addChat,
      deleteChat:deleteChat,
      resetChats:resetChats
    }}>
      {children}
    </DeleteChatContext.Provider>
  )
}