import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { setAlert } from "../../redux/actions/alert";
import Message from "../message/Message";
import Spinner from "../loading/Spinner";
import { firestore } from "../../firebase/firebaseUtils";
import "./post-form.css";

const PostForm = ({ currentUser, setAlert }) => {
  const [post, setPost] = useState({ message: "" });
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setPost({ ...post, message: e.target.value });
  };

  const createPost = (e) => {
    e.preventDefault();
    setLoading(true);
    let user;
    currentUser ? (user = currentUser) : (user = { email: "anonymous" });

    firestore
      .collection("posts")
      .add({ message: post.message, user })
      .then(function (docRef) {
        setAlert(`Post created Successfully`, "success");
        setLoading(false);
        setPost({ message: "", user: {} });
      })
      .catch(function (error) {
        setLoading(false);
        setAlert(`Something went wrong: ${error}`, "danger");
      });
  };

  const getMessagesRealtime = () => {
    firestore.collection("posts").onSnapshot((querySnapshot) => {
      let currentPosts = [];
      querySnapshot.forEach((doc) => currentPosts.push(doc.data()));
      setPosts(currentPosts);
    });
  };

  getMessagesRealtime();
  const { message } = post;
  return (
    <div className="container">
      <div className="sidebar">I am the Sidebar</div>
      <div className="post-form">
        {loading ? (
          <Spinner />
        ) : (
          <form onSubmit={createPost}>
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
        {posts.map((p, i) => (
          <Message key={i} message={p.message} user={p.user.email} />
        ))}
      </div>
    </div>
  );
};

export default connect(null, { setAlert })(PostForm);
