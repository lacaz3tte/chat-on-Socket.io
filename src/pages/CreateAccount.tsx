import React, { useState, useRef } from "react";
import BackButton from "../components/buttons/backButton";
import DarkModeButton from "../components/buttons/darkModeButton";
import AuthService from "../services/Auth.service";
import styles from './Animation.module.scss'

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
          setTimeout(() => { history.back() }, 1000)
        }
      });
    }
  };

  return (
    <div className="md:h-2/3 md:w-1/2 w-full h-full min-h-[400px] min-w-[325px] bg-h1 relative rounded-2xl dark:bg-hd1 transition-all flex flex-col justify-center items-center">
      <div className="absolute top-0 right-0 left-0 flex justify-between z-10">
        <BackButton />
        <DarkModeButton />
      </div>
      <p className="text-3xl m-10 text-h2 dark:text-hd2 transition-all font-rubic_light">{header}</p>
      <input
        autoFocus
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
        ref={buttonRef}
        className={styles.enter_button + ' dark:text-hd1 dark:active:text-hd3 dark:after:bg-hd4 dark:before:bg-hd3 dark:after:active:bg-transparent dark:before:active:bg-transparent mt-[68px] m-5'}
        onClick={() => clickHandle()}
      >
        Create
      </button>
    </div>
  );
};

export default CreateAccount;
