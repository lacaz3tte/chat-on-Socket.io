import React, { useContext } from 'react'
import { ChatContext } from '../chatContext';
import DefaultChat from './defaultChat';
import Messages from './messages';
import BackButton from '../buttons/backButton';
import ShowChatsButton from '../buttons/showChatsButton';
import DarkModeButton from '../buttons/darkModeButton';

const MessagesConteiner = () => {

  const chatContext = useContext(ChatContext)

  return (

    <div className="relative w-full md:w-2/3">
      <div className="absolute top-0 left-0 right-0 flex justify-between">
        <div>
          <BackButton />
          <ShowChatsButton />
        </div>
        <DarkModeButton />
      </div>
      {
        (chatContext.chatName) ? <Messages /> : <DefaultChat />
      }
    </div>
  )
}

export default MessagesConteiner