import { useContext } from 'react';
import { ChatContext } from '../../chatContext';

interface IDataTransfer {
  login: string
}

const SearchAccount = ({ login }: IDataTransfer) => {

  const chatContext = useContext(ChatContext)

  return (
    <div
      className='m-2 mr-4 p-2 rounded-xl hover:cursor-pointer text-h2 hover:text-h1 hover:bg-h3 dark:text-hd2 dark:hover:text-hd1 dark:hover:bg-hd3 transition-all'
      onClick={() => {
        chatContext.moveToChat(login)
      }}
    >
      <p className='underline font-rubic_light'>{login}</p>
    </div>
  )
}

export default SearchAccount