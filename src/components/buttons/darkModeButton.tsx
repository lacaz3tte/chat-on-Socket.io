import { useEffect, useState } from "react";
import styles from './DarkModeButton.module.scss'

const DarkModeButton = () => {

  const [theme, setTheme] = useState('')

  const themeHandle = () => {
    if (localStorage.theme !== "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark")
      setTheme('dark')
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light")
      setTheme('light')
    }
  };

  useEffect(() => {
    if (localStorage.theme && localStorage.theme === 'dark') {
      document.documentElement.classList.add("dark");
      setTheme('dark')
    }
  }, [])

  return (
    <button
      className={styles.button + ' dark:hover:before:content-["Dark"] dark:before:bg-hd5 dark:after:bg-hd1 dark:text-hd2 dark:hover:after:bg-hd4 dark:hover:before:bg-hd5 dark:hover:before:text-hd2 dark:hover:text-hd1 dark:active:text-hd2 dark:active:after:bg-hd5'}
      onClick={() => themeHandle()}
    >
      {theme === 'dark' ? (
        <svg
          className="h-8 w-8"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="1"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" />{" "}
          <circle cx="12" cy="12" r="4" />{" "}
          <path d="M3 12h1M12 3v1M20 12h1M12 20v1M5.6 5.6l.7 .7M18.4 5.6l-.7 .7M17.7 17.7l.7 .7M6.3 17.7l-.7 .7" />
        </svg>
      ) : (
        <svg
          className="h-8 w-8"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
    </button>
  );
};

export default DarkModeButton;
