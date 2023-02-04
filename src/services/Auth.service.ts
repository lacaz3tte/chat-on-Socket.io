const API_URL = "http://localhost:3001/api/auth/";
import { IUser } from './../interfaces';

class AuthService {
   login = async(user:IUser) => {
    return await fetch('http://localhost:3001/login',{
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({login: user.login, password: user.password})
    }).then(res=>res.json())
  }

    register = async(user:IUser) => {
        return await fetch('http://localhost:3001/login',{
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({login: user.login, password: user.password})
        }).then(res=>res.json())
    }

    /* getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));;
      }


  logout() {
    localStorage.removeItem("user");
  } */
}

export default new AuthService();


