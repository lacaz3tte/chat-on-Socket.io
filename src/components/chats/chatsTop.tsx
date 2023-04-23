import { useContext } from 'react'
import DeleteChat from './deleteChat';
import { DeleteChatContext } from './deleteChatsContext';
import SearchAccounts from './searchAccounts';

const ChatsTop = () => {

  const deleteChatContext = useContext(DeleteChatContext)

  return (
    <>
      {
        deleteChatContext.deleteMode
        ?
        <DeleteChat /> 
        :
        <SearchAccounts />
      }
    </>
  )
}

export default ChatsTop;