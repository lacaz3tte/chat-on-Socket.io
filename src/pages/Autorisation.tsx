import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import DarkModeButton from "../components/darkModeButton";
import AuthService from "../services/Auth.service";
import StartComponent from "./StartComponent";

const Autorisation = () => {
  const navigate = useNavigate();

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [header, setHeader] = useState("Enter your name and password");

  const buttonRef = useRef<HTMLButtonElement>(null);

  const keyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === "Enter") {
      buttonRef.current?.click();
    }
  };

  const clickHandle = async () => {
    AuthService.login({ login, password }).then((res) => {
      if (res.data.access_token == null) {
        setHeader("Invalid name or password");
      } else {
        localStorage.setItem("user", login);
        localStorage.setItem("access_token",res.data.access_token)
        navigate("chat/" + login);
      }
    });
  };

  return (
    <StartComponent>
      <div className="h-2/3 w-1/2 min-h-[400px] min-w-[325px] flex justify-center items-center flex-col rounded-2xl bg-h1 relative dark:bg-hd1 transition-all">
        <div className="absolute top-0 right-0">
          <DarkModeButton />
        </div>
        <p className="text-3xl m-10 text-h2 dark:text-hd2 transition-all">{header}</p>
        <input
          autoFocus
          onKeyDown={keyDownHandler}
          type="text"
          className="h-10 min-h-[40px] block w-1/2 m-2 px-5 bg-transparent border-b border-h2 dark:border-hd2 text-h2 dark:text-hd2  placeholder:text-h2 dark:placeholder:text-hd2 transition-all outline-none"
          placeholder="Login..."
          value={login}
          onChange={(e) => {
            setLogin(e.target.value);
          }}
        ></input>
        <input
          onKeyDown={keyDownHandler}
          type="password"
          className="h-10 min-h-[40px] block w-1/2 m-2 px-5 bg-transparent border-b border-h2 dark:border-hd2 text-h2 dark:text-hd2  placeholder:text-h2 dark:placeholder:text-hd2 transition-all outline-none"
          placeholder="Password..."
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
        <button
          className="text-h2 dark:text-hd2 p-3 underline"
          onClick={() => navigate("/create")}
        >
          Or create an account
        </button>
        <button
          ref={buttonRef}
          className="m-5 px-10 p-2 rounded-full bg-h3 dark:bg-hd3 text-h1 dark:text-hd1 hover:bg-h4 dark:hover:bg-hd4 active:text-h3 dark:active:text-hd3 
          active:bg-transparent dark:active:bg-transparent transition-all"
          onClick={() => clickHandle()}
        >
          Enter
        </button>
      </div>
    </StartComponent>
  );
};

export default Autorisation;
