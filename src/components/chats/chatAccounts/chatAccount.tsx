import { useContext } from 'react';
import { ChatContext } from '../../chatContext';
import { getTime } from '../../messeges/massage/getTime';
import { useLongPress } from 'react-use'
import { DeleteChatContext } from './deleteChatsContext';
import { IData } from '../../../interfaces';
import DeleteChatButton from './deleteChatButton';
import { useParams } from 'react-router-dom';


interface IDataTransfer {
  login: string
  message: IData
}

const ChatAccount = ({ login, message }: IDataTransfer) => {

  const chatContext = useContext(ChatContext)

  let { chatName } = useParams<"chatName">();

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
        onTouchStart={() => {
          chatContext.moveToChat(login)
          chatContext.changeSearchPannel(false)
        }}
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
      <DeleteChatButton logins={[login,chatName as string]}/>

    </div>
  )
}

export default ChatAccount