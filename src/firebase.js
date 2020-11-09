import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAD3EJO2KjLsshl5sFXTXVNIbq-49uHv5s",
  authDomain: "my-tinder-59fcf.firebaseapp.com",
  databaseURL: "https://my-tinder-59fcf.firebaseio.com",
  projectId: "my-tinder-59fcf",
  storageBucket: "my-tinder-59fcf.appspot.com",
  messagingSenderId: "808928863976",
  appId: "1:808928863976:web:01d1b683d2dbcee3eb0b5d",
  measurementId: "G-R3SDBLMTE9",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
// real time firebase
const db = firebaseApp.firestore();
export default db;
