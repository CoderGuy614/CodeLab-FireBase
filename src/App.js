import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.scss";
import "./custom_theme.css";
import NavBar from "./components/nav/NavBar";

import PostForm from "./components/post/PostForm";
import Alert from "./components/alert/Alert";
import SignInAndSignUp from "./pages/signin-signup/signin-signup";
import Homepage from "./pages/homepage/Homepage";
import TwoByTwo from "./pages/layouts/TwoByTwo";
import Bootstrap from "./pages/bootstrapSandbox/Bootstrap";
import ReactBootstrap from "./pages/reactBootstrap/ReactBootstrap";
import OneLineLayouts from "./pages/oneLineLayouts/oneLineLayouts";
import CssGrid from "./pages/cssgrid/CssGrid";
import Flexbox from "./pages/flexbox/Flexbox";
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
              !this.state.currentUser ? <Redirect to="/signin" /> : <Homepage />
            }
          />
          <Route
            exact
            path="/signin"
            render={() =>
              this.state.currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
            }
          />

          <Route exact path="/layout2by2" component={TwoByTwo} />
          <Route exact path="/bootstrap" component={Bootstrap} />
          <Route exact path="/reactbootstrap" component={ReactBootstrap} />
          <Route exact path="/flexbox" component={Flexbox} />
          <Route exact path="/onelinelayouts" component={OneLineLayouts} />
          <Route exact path="/grid" component={CssGrid} />
          <Route
            exact
            path="/post"
            render={() => <PostForm currentUser={this.state.currentUser} />}
          />
        </Switch>
      </Provider>
    );
  }
}

export default App;
