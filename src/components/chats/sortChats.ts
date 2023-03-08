import { IChats } from '../../interfaces';


export const sortChats = (chatA:IChats,chatB:IChats) => {
  if(chatA.message.date < chatB.message.date){
    return 1
  }
  if(chatA.message.date > chatB.message.date){
    return -1
  }
  if(chatA.message.date = chatB.message.date){
    return 0
  }
}