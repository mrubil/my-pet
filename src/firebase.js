import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBGRPb2U0PvZoq8-NIzzYivFWvi64AGHd0",

  authDomain: "my-pet-33770.firebaseapp.com",

  projectId: "my-pet-33770",

  storageBucket: "my-pet-33770.appspot.com",

  messagingSenderId: "966252157404",

  appId: "1:966252157404:web:f97a963e1b5211dbf7d719",
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();
let storage = firebase.storage();

export { firebase, db, storage };
