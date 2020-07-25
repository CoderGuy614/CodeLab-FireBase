import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import "./custom_theme.css";
import NavBar from "./components/nav/NavBar";
import GridPage from "./pages/homepage/gridPage";
import Articles from "./pages/articles/articles";
import PostForm from "./components/post/PostForm";
import Alert from "./components/alert/Alert";
import SignInAndSignUp from "./pages/signin-signup/signin-signup";
import { auth, createUserProfileDocument } from "./firebase/firebaseUtils";

//Redux
import { Provider } from "react-redux";
import store from "./redux/store";
import { setAlert } from "./redux/actions/alert";

class App extends Component {
  constructor() {
    super();
    this.state = { currentUser: null };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      }

      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <Provider store={store}>
        <NavBar currentUser={this.state.currentUser} />
        <Alert />
        <Switch>
          <Route
            exact
            path="/"
            render={() =>
              !this.state.currentUser ? <Redirect to="/signin" /> : <GridPage />
            }
          />
          <Route
            exact
            path="/signin"
            render={() =>
              this.state.currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
            }
          />
          <Route exact path="/articles" component={Articles} />
          <Route exact path="/post" component={PostForm} />
        </Switch>
      </Provider>
    );
  }
}

export default App;
