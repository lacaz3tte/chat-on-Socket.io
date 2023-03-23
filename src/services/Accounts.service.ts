import axios from "axios";

class AccountsService {

  getAccounts = async (value:string) => {
    return await axios.post("http://localhost:3001/searchLogins", { value })
  }

  getAllAccounts =async () => {
    return await axios.get("http://localhost:3001/login")
  }
}

export default new AccountsService();
