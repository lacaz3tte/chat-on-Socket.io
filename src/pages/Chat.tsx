import BackButton from "../components/backButton";
import ChatAccountsConteiner from '../components/chatAccountsConteiner';
import { ChatProvider } from "../components/chatContext";
import MessagesConteiner from '../components/messagesConteiner';

const Chat = () => {

  return (
    <ChatProvider>
      <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gradient-to-r from-hDarkBlue to-hBlue">
        <div className="h-2/3 w-1/2 min-h-[400px] min-w-[325px] relative bg-hDarkBlue flex justify-between">
          <ChatAccountsConteiner />
          <div className="relative w-2/3">
            <BackButton />
            <MessagesConteiner />
          </div>
        </div>
      </div>
    </ChatProvider>
  );
};

export default Chat;