import { useContext } from 'react';
import { ChatContext } from '../chatContext';
import { getTime } from '../../massage/getTime';
import { IData } from '../../pages/interfaces';


interface IDataTransfer {
  login: string
  message: IData
}

const ChatAccount = ({ login, message }: IDataTransfer) => {

  const chatContext = useContext(ChatContext)

  return (
    <div
      className='m-2 p-2 border border-hLight text-hLight hover:text-hDarkBlue hover:bg-hLight transition-all hover:cursor-pointer'
      onClick={() => {
        chatContext.moveToChat(login)
      }}
    >
      <div className='flex justify-between'>
        <p className='underline font-bold'>{login}</p>
        <p className='text-xs text-gray-500'> {getTime(message.date)} </p>
      </div>
      <p className='text-gray-500 inline'>{login !== message.name ? 'You:' : ''}</p>
      <p className='overflow-hidden text-ellipsis whitespace-nowrap inline'>{message.msg}</p>
    </div>
  )
}

export default ChatAccount