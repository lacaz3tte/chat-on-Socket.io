
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

export interface IData {
  name: string | undefined;
  msg: string;
  date: number;
}

export interface IMassage extends IData {
  foreign: boolean;
}
