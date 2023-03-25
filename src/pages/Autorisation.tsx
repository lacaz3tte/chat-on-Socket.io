import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import DarkModeButton from "../components/buttons/darkModeButton";
import AuthService from "../services/Auth.service";
import StartComponent from "./StartComponent";
import styles from './Animation.module.scss'

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
    if(!login || !password){
      setHeader('Your login or password is empty')
    } else {
      AuthService.login({ login, password }).then((res) => {
        if (res.data.access_token == null) {
          setHeader("Invalid name or password");
        } else {
          localStorage.setItem("user", login);
          localStorage.setItem("access_token", res.data.access_token)
          navigate("chat/" + login);
        }
      });
    }
  };

  return (
    <StartComponent>
      <div className="h-2/3 w-1/2 min-h-[400px] min-w-[325px] flex justify-center items-center flex-col rounded-2xl bg-h1 relative dark:bg-hd1 transition-all">
        <div className="absolute top-0 right-0">
          <DarkModeButton />
        </div>
        <p className="text-3xl m-10 text-h2 dark:text-hd2 transition-all font-rubic_light">{header}</p>
        <input
          onKeyDown={keyDownHandler}
          type="text"
          className={styles.input + ' dark:text-hd2 dark:placeholder:text-hd2'}
          placeholder="Login..."
          value={login}
          onChange={(e) => {
            setLogin(e.target.value);
          }}
        ></input>
        <div className={styles.div + ' dark:bg-hd2'}></div>
        <input
          onKeyDown={keyDownHandler}
          type="password"
          className={styles.input + ' dark:text-hd2 dark:placeholder:text-hd2'}
          placeholder="Password..."
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
        <div className={styles.div + ' dark:bg-hd2'}></div>
        <button
          className={styles.create_button + ' dark:text-hd2 dark:after:hover:bg-hd2 '}
          onClick={() => navigate("/create")}
        >
          Or create an account
        </button>
        <button
          ref={buttonRef}
          className={styles.enter_button + ' m-5 dark:text-hd1 dark:active:text-hd3 dark:after:bg-hd3 dark:before:bg-hd4 dark:after:active:bg-transparent dark:before:active:bg-transparent'}
          onClick={() => clickHandle()}
        >
          Enter
        </button>
      </div>
    </StartComponent>
  );
};

export default Autorisation;
