import React from "react";

interface MessageProps {
  text: string;
  agent: string;
}

const Message: React.FC<MessageProps> = ({ text, agent }) => {
  const commonClasses =
    "text-semiwhite max-w-[600px] w-9/12 break-words p-3 rounded-bl-lg rounded-br-lg";

  return (
    <div
      className={`
      ${commonClasses} 
      ${agent === "admin" ? "bg-gray-400 rounded-tl-lg" : ""}
      ${agent === "user" ? "bg-lightpurple justify-end rounded-tr-lg" : ""}
    `}
    >
      <p>{text}</p>
    </div>
  );
};

export default Message;
