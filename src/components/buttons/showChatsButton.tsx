import { ChatContext } from "../chatContext";
import {useContext} from 'react'

const ShowChatsButton = () => {

  const chatContext = useContext(ChatContext)

  return (
    <button
      className="m-2 hover:bg-h4 dark:hover:bg-hd4 active:bg-transparent dark:active:bg-transparent rounded-full p-2 transition-all text-h2 dark:text-hd2 hover:text-h1 dark:hover:text-hd1 active:text-h2 dark:active:text-hd2 md:hidden"
      onClick={()=>{
        chatContext.changeSearchPannel(true)
      }}
    >
      <svg className="h-8 w-8"  
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        strokeWidth="1" 
        stroke="currentColor" 
        fill="none" 
        strokeLinecap="round" 
        strokeLinejoin="round">  
          <path stroke="none" d="M0 0h24v24H0z"/>  
          <line x1="4" y1="6" x2="20" y2="6" />  
          <line x1="4" y1="12" x2="20" y2="12" />  
          <line x1="4" y1="18" x2="16" y2="18" />
      </svg>
    </button>
  );
};

export default ShowChatsButton;