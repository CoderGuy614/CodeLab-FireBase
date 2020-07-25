import React from "react";

import "./message.css";

const Message = ({ message }) => {
  return <div className="message-item">{message}</div>;
};

export default Message;
