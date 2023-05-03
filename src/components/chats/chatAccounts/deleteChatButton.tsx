import { useContext, useEffect, useState } from "react"
import { DeleteChatContext } from "./deleteChatsContext"

interface Data {
  logins:string[]
}


const DeleteChatButton = ({logins}:Data) => {

  const deleteChatContext = useContext(DeleteChatContext)

  const [click, setClick] = useState(false)

  const changeChats = () => {
    if(click===false){
      deleteChatContext.addChat(logins)
    } else {
      deleteChatContext.deleteChat(logins)
    }
  }

  useEffect(()=>{
    if(deleteChatContext.deleteMode===false){
      setClick(false)
    }
  },[deleteChatContext.deleteMode])

  return (
    <div className={' absolute top-1/2 right-0 h-6 -translate-y-1/2 rounded-full  mr-3 ' + (deleteChatContext.deleteMode ? ' w-6 border-h3 border' : ' w-0 border-none')}
      onClick={() => { 
        changeChats()
        setClick(!click) 
      }}
    >
      { click &&
        <svg className="h-6 w-6 text-h3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M5 13l4 4L19 7" />
      </svg>}
    </div>
  )
}

export default DeleteChatButton