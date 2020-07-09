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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export const fetchSignInMethodsForEmail = () =>
  auth.fetchSignInMethodsForEmail();
export default firebase;
