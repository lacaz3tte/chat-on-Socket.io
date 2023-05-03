import { useContext } from 'react'
import DeleteChat from './chatAccounts/deleteChat';
import { DeleteChatContext } from './chatAccounts/deleteChatsContext';
import SearchAccounts from './searchAccounts/searchAccounts';

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