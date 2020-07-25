import React from "react";

import "./message.css";

const Message = ({ message, user }) => {
  return (
    <div className="message-item">
      {message} by: {user}
    </div>
  );
};

export default Message;
