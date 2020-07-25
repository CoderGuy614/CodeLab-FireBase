import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { setAlert } from "../../redux/actions/alert";
import Message from "../message/Message";
import Spinner from "../loading/Spinner";
import { firestore } from "../../firebase/firebaseUtils";
import "./post-form.css";

const PostForm = ({ setAlert }) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const postMessage = (e) => {
    e.preventDefault();
    setLoading(true);
    firestore
      .collection("messages")
      .add({
        message,
      })
      .then(function (docRef) {
        setAlert(`Message Posted with ID of ${docRef.id}`, "success");
        setLoading(false);
        setMessage("");
      })
      .catch(function (error) {
        setLoading(false);
        setAlert(`Something went wrong: ${error}`, "danger");
      });
  };

  const getMessagesRealtime = () => {
    firestore.collection("messages").onSnapshot((querySnapshot) => {
      let currentMessages = [];
      querySnapshot.forEach((doc) => currentMessages.push(doc.data()));
      setMessages(currentMessages);
    });
  };

  getMessagesRealtime();

  return (
    <>
      <div className="post-form">
        {loading ? (
          <Spinner />
        ) : (
          <form onSubmit={postMessage}>
            <input
              type="text"
              placeholder="Enter a message"
              onChange={handleChange}
              value={message}
            />
            <button type="submit">Post Message</button>
          </form>
        )}
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
