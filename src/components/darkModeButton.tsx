import { useState } from "react";

const DarkModeButton = () => {
  const [theme, setTheme] = useState(true);

  const themeHandle = () => {
    if (theme === true) {
      document.documentElement.classList.add("dark");
      setTheme(!theme);
    } else {
      document.documentElement.classList.remove("dark");
      setTheme(!theme);
    }
  };

  return (
    <button
      className="border m-2 hover:text-hDarkBlue hover:bg-hLight active:bg-transparent"
      onClick={() => themeHandle()}
    >
      {theme ? (
        <svg
          className="h-10 w-10 text-hLight"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
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
          className="h-10 w-10 text-hLight"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
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
