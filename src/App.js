import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.scss";
import "./custom_theme.css";
import 'semantic-ui-css/semantic.min.css'
import NavBar from "./components/nav/NavBar";

import Algo from "./pages/algo/Algo";
import PostForm from "./components/post/PostForm";
import Alert from "./components/alert/Alert";
import SignInAndSignUp from "./pages/signin-signup/signin-signup";
import Homepage from "./pages/homepage/Homepage";
import TwoByTwo from "./pages/layouts/TwoByTwo";
import Bootstrap from "./pages/bootstrapSandbox/Bootstrap";
import ReactBootstrap from "./pages/reactBootstrap/ReactBootstrap";
import Semantic from './pages/semantic/Semantic'
import OneLineLayouts from "./pages/oneLineLayouts/oneLineLayouts";
import CssGrid from "./pages/cssgrid/CssGrid";
import Flexbox from "./pages/flexbox/Flexbox";
import MaterialUi from "./pages/materialui/MaterialUi";

import BinarySearch from "./pages/binarysearch/BinarySearch";
import Codewars1 from "./pages/codewars1/Codewars1";
import TwoNumberSum from "./pages/twonumbersum/TwoNumberSum";
import NthFib from "./pages/nthFib/NthFib";
import MernStack from "./pages/mernStack/MernStack";
import Firebase from "./pages/firebase/Firebase";
import Strapi from "./pages/strapi/Strapi";

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
          <Route exact path="/" component={Homepage} />
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
          <Route exact path="/materialui" component={MaterialUi} />
          <Route exact path="/semantic" component={Semantic} />
          <Route exact path="/snippets/algo" component={Algo} />
          <Route exact path="/snippets/mern" component={MernStack} />
          <Route exact path="/backend/Firebase" component={Firebase} />
          <Route exact path="/backend/Strapi" component={Strapi} />
          <Route
            exact
            path="/snippets/algo/binarysearch"
            component={BinarySearch}
          />
          <Route exact path="/snippets/algo/codewars/1" component={Codewars1} />
          <Route
            exact
            path="/snippets/algo/twonumbersum"
            component={TwoNumberSum}
          />
          <Route exact path="/snippets/algo/fib" component={NthFib} />

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
