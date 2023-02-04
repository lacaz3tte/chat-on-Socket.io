import React from "react";

const BackButton = () => {
  const backHandle = () => {
    history.back();
  };

  return (
    <button
      className="border m-2 hover:text-hDarkBlue hover:bg-hLight active:bg-transparent"
      onClick={() => backHandle()}
    >
      <svg
        className="h-10 w-10 text-hLight hover:text-hDarkBlue active:text-hLight"
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
