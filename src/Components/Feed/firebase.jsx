import firebase from "firebase";

const firebaseConfig = {
/**create and add your own firebase.js file and add firebase config i.e API in it. */
};



const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
