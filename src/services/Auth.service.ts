import axios from "axios";
import { IUser } from "./../interfaces";

class AuthService {
  login = async (user: IUser) => {
    return axios.post("http://localhost:3001/login", { login: user.login, password: user.password })
  };

  register = async (user: IUser) => {
    return axios.put("http://localhost:3001/login",{ login: user.login, password: user.password })
  };

  /* getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));;
      }


  logout() {
    localStorage.removeItem("user");
  } */
}

export default new AuthService();
