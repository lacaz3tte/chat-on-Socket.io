import { useEffect, useState } from "react";

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
      className="m-2 hover:bg-h4 dark:hover:bg-hd4 active:bg-transparent dark:active:bg-transparent rounded-full p-2 transition-all text-h2 dark:text-hd2 hover:text-h1 dark:hover:text-hd1 active:text-h2 dark:active:text-hd2"
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
          stroke-linejoin="round"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
    </button>
  );
};

export default DarkModeButton;
