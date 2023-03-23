import axios from "axios";

class ChatsService {
  chats = async (name:string|undefined) => {
    return await axios.post('http://localhost:3001/lastMessages', { name: name })
  }
}

export default new ChatsService();
