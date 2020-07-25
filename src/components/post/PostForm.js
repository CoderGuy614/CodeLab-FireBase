import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { setAlert } from "../../redux/actions/alert";
import Message from "../message/Message";
// import { postMessage, getMessages } from "../../firebase/firebaseUtils";
import { firestore } from "../../firebase/firebaseUtils";
import "./post-form.css";

const PostForm = ({ setAlert }) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const postMessage = () => {
    firestore
      .collection("messages")
      .add({
        message,
      })
      .then(function (docRef) {
        console.log(docRef.id);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <div className="post-form">
        <input
          type="text"
          placeholder="Enter a message"
          onChange={handleChange}
          value={message}
        />
        <button onClick={postMessage}>Post Message</button>
      </div>
      <div className="message-display">
        {messages.map((msg, i) => (
          <Message key={i} message={msg.message} />
        ))}
      </div>
    </>
  );
};

export default connect(null, { setAlert })(PostForm);
