import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBGRPb2U0PvZoq8-NIzzYivFWvi64AGHd0",

  authDomain: "my-pet-33770.firebaseapp.com",

  projectId: "my-pet-33770",

  storageBucket: "my-pet-33770.appspot.com",

  messagingSenderId: "966252157404",

  appId: "1:966252157404:web:f97a963e1b5211dbf7d719",
};

const app = initializeApp(firebaseConfig);

export default {
  firebase,
};
