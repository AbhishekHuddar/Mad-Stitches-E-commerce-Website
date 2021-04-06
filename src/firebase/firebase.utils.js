import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDyHizxV1xzwVM1LQmRQEUFwOtwXxKzqCM",
    authDomain: "clothing-db-41f79.firebaseapp.com",
    databaseURL: "https://clothing-db-41f79.firebaseio.com",
    projectId: "clothing-db-41f79",
    storageBucket: "clothing-db-41f79.appspot.com",
    messagingSenderId: "1465418445",
    appId: "1:1465418445:web:ffaa1bd3b8eb403bf8df84",
    measurementId: "G-YGX9Y65MWR"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;