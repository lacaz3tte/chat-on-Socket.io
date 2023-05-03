import { ChatProvider } from "../components/chatContext";
import MessagesConteiner from '../components/messeges/messagesConteiner';
import ChatAccountsConteiner from "../components/chats/chatAccounts/chatAccountsConteiner";


const Chat = () => {

  return (
    <ChatProvider>
      <div className="md:h-2/3 md:w-1/2 w-full h-full min-h-[400px] min-w-[325px] relative rounded-2xl bg-h1 dark:bg-hd1 transition-all flex justify-between">
        <ChatAccountsConteiner />
        <MessagesConteiner />
      </div>
    </ChatProvider>
  );
};

export default Chat;