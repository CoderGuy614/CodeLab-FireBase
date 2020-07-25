import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { setAlert } from "../../redux/actions/alert";
import Message from "../message/Message";
import { postMessage, getMessages } from "../../firebase/firebaseUtils";

import "./post-form.css";

const PostForm = ({ setAlert }) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleMessages = () => {
    let messageArray = [];
    getMessages()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => messageArray.push(doc.data()));
        setMessages(messageArray);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    handleMessages();
  }, []);

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message) {
      postMessage(message)
        .then((docRef) => {
          setAlert(`Message Posted with ID ${docRef.id}`, "success");
          console.log("YES ITS WORKING");
          setMessage("");
        })
        .catch((error) => setAlert(`Something went wrong ${error}`));
    }
  };

  return (
    <>
      <div className="post-form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter a message"
            onChange={handleChange}
            value={message}
          />
          <button>Post Message</button>
          <button onClick={() => handleMessages()}>Get Messages</button>
        </form>
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
