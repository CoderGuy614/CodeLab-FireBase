import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyC8sD7UaS-8FPrEwBcHKoxgqZEBRW6pueg",
  authDomain: "codelab-277db.firebaseapp.com",
  databaseURL: "https://codelab-277db.firebaseio.com",
  projectId: "codelab-277db",
  storageBucket: "codelab-277db.appspot.com",
  messagingSenderId: "229166422894",
  appId: "1:229166422894:web:9aa97d679de7267468ff7f",
  measurementId: "G-P2TQ6W29L4",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`/users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        // displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

export const checkIfCurrentUser = async (email) => {
  const snapshot = await firebase.firestore().collection("users").get();
  return snapshot.docs.map((doc) => doc.data());
};

export const postMessage = async (message) => {
  try {
    const success = await firebase.firestore().collection("messages").add({
      message,
    });
    return success;
  } catch (error) {
    return error;
  }
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const facebookProvider = new firebase.auth.FacebookAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
facebookProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);
export const signInWithFacebook = () => auth.signInWithPopup(facebookProvider);
export default firebase;
