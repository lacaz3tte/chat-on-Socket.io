import { useContext } from 'react'
import { DeleteChatContext } from './deleteChatsContext';
import DeleteChatsBanner from './deleteChatsBanner';

const DeleteChat = () => {

  const deleteChatContext = useContext(DeleteChatContext)

  return (
    <div className='absolute top-0 left-0 md:right-2/3 right-0 h-16 items-center justify-between flex'>
      <button
        onClick={() => {
          deleteChatContext.setDeleteMode(false)
          deleteChatContext.resetChats()
        }}
        className="hover:bg-h4 dark:hover:bg-hd4 active:bg-transparent dark:active:bg-transparent rounded-full p-2 transition-all text-h2 dark:text-hd2 hover:text-h1 dark:hover:text-hd1 active:text-h2 dark:active:text-hd2 m-2"
      >
          <svg 
            className="h-8 w-8 inline-block" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1" 
            strokeLinecap="round" 
            strokeLinejoin="round">  
            <line x1="18" y1="6" x2="6" y2="18" />  
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
      </button>
      <button
        className="hover:bg-h4 dark:hover:bg-hd4 active:bg-transparent dark:active:bg-transparent rounded-full p-2 transition-all text-h2 dark:text-hd2 hover:text-h1 dark:hover:text-hd1 active:text-h2 dark:active:text-hd2 m-2"
        onClick={()=>{
          deleteChatContext.setBannerVisiable(true)
        }}
      >
        <svg 
          className="h-8 w-8 inline-block" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1" 
          strokeLinecap="round" 
          strokeLinejoin="round">  
          <polyline points="3 6 5 6 21 6" />  
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />  
          <line x1="10" y1="11" x2="10" y2="17" />  
          <line x1="14" y1="11" x2="14" y2="17" />
        </svg>
      </button>
    </div>
  )
}

export default DeleteChat