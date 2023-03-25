import BackButton from "../components/buttons/backButton";
import ChatAccountsConteiner from '../components/chats/chatAccountsConteiner';
import { ChatProvider } from "../components/chatContext";
import MessagesConteiner from '../components/messeges/messagesConteiner';
import DarkModeButton from "../components/buttons/darkModeButton";
import StartComponent from "./StartComponent";


const Chat = () => {

  return (
    <ChatProvider>
      <StartComponent>
        <div className="h-2/3 w-1/2 min-h-[400px] min-w-[325px] relative rounded-2xl bg-h1 dark:bg-hd1 transition-all flex justify-between">
          <ChatAccountsConteiner />
          <div className="relative w-2/3">
            <div className="absolute top-0 left-0 right-0 flex justify-between">
              <BackButton />
              <DarkModeButton />
            </div>
            <MessagesConteiner />
          </div>
        </div>
      </StartComponent>
    </ChatProvider>
  );
};

export default Chat;