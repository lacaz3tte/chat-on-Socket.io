import axios from "axios";
import { IUser } from "./../interfaces";

class AuthService {
  login = async (user: IUser) => {
    return await axios.post("http://localhost:3001/login", { login: user.login, password: user.password })
  };

  register = async (user: IUser) => {
    return await axios.put("http://localhost:3001/login",{ login: user.login, password: user.password })
  };
}

export default new AuthService();
