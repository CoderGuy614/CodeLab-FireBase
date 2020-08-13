import React from "react";

const Message = ({ message, user }) => {
  return (
    <div>
      <p>{message}</p>
      <p>{user}</p>
    </div>
  );
};

export default Message;
