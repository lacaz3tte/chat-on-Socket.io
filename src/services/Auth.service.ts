import axios from "axios";
import { IUser } from "./../interfaces";

class AuthService {
  login = async (user: IUser) => {
    /* return await fetch("http://localhost:3001/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ login: user.login, password: user.password }),
    }).then((res) => res.json()); */
    return axios.post("http://localhost:3001/login", { login: user.login, password: user.password })
  };

  register = async (user: IUser) => {
    /* return await fetch("http://localhost:3001/login", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ login: user.login, password: user.password }),
    }).then((res) => res.json()); */
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
