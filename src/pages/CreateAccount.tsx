import React, { useState, useRef } from "react";
import BackButton from "../components/backButton";
import DarkModeButton from "../components/darkModeButton";
import AuthService from "../services/Auth.service";
import StartComponent from "./StartComponent";

const CreateAccount = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [header, setHeader] = useState("Create account");
  const buttonRef = useRef<HTMLButtonElement>(null);

  const keyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === "Enter") {
      buttonRef.current?.click();
    }
  };

  const clickHandle = async () => {
    if (login == "" || password == "") {
      setHeader("Login or password is empty");
    } else {
      AuthService.register({ login, password }).then((res) => {
        if (res.data === false) {
          setHeader("There is already an account with this name");
        } else {
          setLogin("");
          setPassword("");
          setHeader("Account created");
          setTimeout(()=>{history.back()},1000)
        }
      });
    }
  };

  return (
    <StartComponent>
      <div className="h-2/3 min-h-[400px] min-w-[325px] w-1/2 bg-h1 relative rounded-2xl dark:bg-hd1 transition-all flex flex-col justify-center items-center">
        <div className="absolute top-0 right-0 left-0 flex justify-between z-10"> 
          <BackButton />
          <DarkModeButton />
        </div>
          <p className="text-3xl m-10 text-h2 dark:text-hd2 transition-all">{header}</p>
          <input
            autoFocus
            onKeyDown={keyDownHandler}
            type="text"
            className="h-10 min-h-[40px] block w-1/2 m-2 px-5 bg-transparent border-b border-h2 dark:border-hd2 text-h2 dark:text-hd2  placeholder:text-h2          dark:placeholder:text-hd2 transition-all outline-none"
            placeholder="Login..."
            value={login}
            onChange={(e) => {
              setLogin(e.target.value);
            }}
          ></input>
          <input
            onKeyDown={keyDownHandler}
            type="password"
            className="h-10 min-h-[40px] block w-1/2 m-2 px-5 bg-transparent border-b border-h2 dark:border-hd2 text-h2 dark:text-hd2  placeholder:text-h2          dark:placeholder:text-hd2 transition-all outline-none"
            placeholder="Password..."
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>
          <button
            ref={buttonRef}
            className="m-5 mt-[68px] px-10 p-2 rounded-full bg-h3 dark:bg-hd3 text-h1 dark:text-hd1 hover:bg-h4 dark:hover:bg-hd4 active:text-h3 dark:active:text-hd3 
            active:bg-transparent dark:active:bg-transparent transition-all"
            onClick={() => clickHandle()}
          >
            Create
          </button>
      </div>
    </StartComponent>
  );
};

export default CreateAccount;
