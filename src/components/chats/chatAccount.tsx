import { useContext } from 'react';
import { ChatContext } from '../chatContext';
import { getTime } from '../messeges/massage/getTime';
import { useLongPress } from 'react-use'
import { DeleteChatContext } from './deleteChatsContext';
import { IData } from '../../interfaces';


interface IDataTransfer {
  login: string
  message: IData
}

const ChatAccount = ({ login, message }: IDataTransfer) => {

  const chatContext = useContext(ChatContext)

  const deleteChatContext = useContext(DeleteChatContext)

  const onLongPress = () => {
    deleteChatContext.setDeleteMode(true)
  };

  const defaultOptions = {
    isPreventDefault: true,
    delay: 500,
  };
  const longPressEvent = useLongPress(onLongPress, defaultOptions);

  return (
    <div className='relative'>
      <div
        className={'m-2 p-2 text-h2 hover:text-h1 rounded-xl hover:bg-h4 dark:text-hd2 dark:hover:text-hd1 dark:hover:bg-hd4 hover:cursor-pointer transition-all '
          + (deleteChatContext.deleteMode ? ' mr-12 ' : '')}
        {...longPressEvent}
        onClick={() => {
          chatContext.moveToChat(login)
        }}
      >
        <div className='flex justify-between'>
          <p className='underline font-bold font-rubic_light'>{login}</p>
          <p className='text-xs font-rubic_light'> {getTime(message.date)} </p>
        </div>
        <p className='w-full overflow-hidden whitespace-nowrap text-ellipsis inline-block font-rubic_light'>{message.msg}</p>
      </div>
      <div className={' absolute top-1/2 right-0 h-6 -translate-y-1/2 rounded-full  mr-3 ' + (deleteChatContext.deleteMode ? ' w-6 border-h3 border' : ' w-0 border-none')}>
      </div>

    </div>
  )
}

export default ChatAccount