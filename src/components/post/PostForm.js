import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { setAlert } from "../../redux/actions/alert";
import { postMessage } from "../../firebase/firebaseUtils";

import "./post-form.css";

const PostForm = ({ setAlert }) => {
  const [message, setMessage] = useState("");

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
    <div className="post-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a message"
          onChange={handleChange}
          value={message}
        />
        <button>Post Message</button>
      </form>
    </div>
  );
};

export default connect(null, { setAlert })(PostForm);
