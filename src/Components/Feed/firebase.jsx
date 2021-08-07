import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDG8MkbWp6s3gMfuRNGiRAtmfAKkzgMuKU",
  authDomain: "twitter-clone-bykundan.firebaseapp.com",
  projectId: "twitter-clone-bykundan",
  storageBucket: "twitter-clone-bykundan.appspot.com",
  messagingSenderId: "535013405797",
  appId: "1:535013405797:web:41c3477fa7fa711848428c",
};

/**create your own firebase */

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
