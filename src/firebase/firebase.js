import firebase from 'firebase/app';
import 'firebase/auth';

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_BASEURL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
});

// Initialize Firebase
export const auth = app.auth();

export const db = firebase.database();
// const provider = new firebase.auth.GoogleAuthProvider();
// export const signInWithGoogle = () => {
//     auth.signInWithPopup(provider);
//   };

export const postRef = (uid) => db.ref(`savedArticles/${uid}`);
export default app;