import React, { useEffect } from "react";
import { IMassage } from "../pages/interfaces";
import { getTime } from "./getTime";

const Message = ({ name, msg, date, foreign }: IMassage) => {
  return (
    <div className={"flex" + (foreign ? "" : " justify-end ")}>
      <div
        className={
          "p-3 m-2 max-w-[80%] overflow-auto  text-h1 dark:text-hd1 rounded-3xl" + (foreign ? " dark:bg-hd2 bg-h2" : " dark:bg-hd3 bg-h3 mr-4")
        }
      >
        {name !== "" && <p className="font-semibold underline font-rubic_light">{name}</p>}
        <p className="inline font-rubic_light break-all overflow-hidden ">{msg} </p>
        <p className="inline text-xs text-h5 dark:text-hd5 font-rubic_light">{date && getTime(date)}</p>
      </div>
    </div>
  );
};

export default Message;
