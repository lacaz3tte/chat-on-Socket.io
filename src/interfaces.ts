import { IData } from "./pages/interfaces";

export interface IUser {
  login: string;
  password: string;
}

export interface IAccountsTransfer {
  login:string
  _id:string
}

export interface IChats {
  users: string[]
  message: IData
}