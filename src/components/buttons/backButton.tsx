
const BackButton = () => {
  const backHandle = () => {
    history.back();
  };

  return (
    <button
      className="m-2 hover:bg-h4 dark:hover:bg-hd4 active:bg-transparent dark:active:bg-transparent rounded-full p-2 transition-all text-h2 dark:text-hd2 hover:text-h1 dark:hover:text-hd1 active:text-h2 dark:active:text-hd2"
      onClick={() => backHandle()}
    >
      <svg
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1"
          d="M10 19l-7-7m0 0l7-7m-7 7h18"
        />
      </svg>
    </button>
  );
};

export default BackButton;
