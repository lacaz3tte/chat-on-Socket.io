import { useContext } from 'react';
import { ChatContext } from '../chatContext';

interface IDataTransfer {
  login:string
}

const SearchAccount = ({login}:IDataTransfer) => {

  const chatContext=useContext(ChatContext)

  return (
    <div 
      className='m-2 mr-4 p-2 border border-hLight text-hLight hover:text-hDarkBlue hover:bg-hLight transition-all hover:cursor-pointer'
      onClick={()=>{
        chatContext.moveToChat(login)
      }}
    >
      <p className='underline font-bold'>{login}</p>
    </div>
  )
}

export default SearchAccount