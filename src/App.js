import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./nav/NavBar";
import Homepage from "./pages/homepage/homepage";
import SignInAndSignUp from "./pages/signin-signup/signin-signup";
import { auth, createUserProfileDocument } from "./firebase/firebaseUtils";

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

          console.log(this.state);
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
      <div>
        <NavBar currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/signin" component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
