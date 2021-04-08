import firebase from 'firebase';
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


// export const savedItem = (uid) => db.ref('savedArticle');
export const savedItem = (uid) => db.ref(`savedArticle/${uid}/`);

// export const newPostRef = (uid) => savedItem(uid).push();
// export var postId = newPostRef.key;


export default app;