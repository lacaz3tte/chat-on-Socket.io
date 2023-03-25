import React, { useContext } from 'react'
import { ChatContext } from '../chatContext';
import DefaultChat from './defaultChat';
import Messages from './messages';

const MessagesConteiner = () => {

  const chatContext = useContext(ChatContext)

  return ((chatContext.chatName) ? <Messages /> : <DefaultChat />)
}

export default MessagesConteiner