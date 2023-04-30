// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyA-UBGzNYyL56t5JwerjxGf9SDE113S-dg",
  authDomain: "react-netflix-clone-3077b.firebaseapp.com",
  projectId: "react-netflix-clone-3077b",
  storageBucket: "react-netflix-clone-3077b.appspot.com",
  messagingSenderId: "433314577321",
  appId: "1:433314577321:web:efadf09cd7e0cf667362b8",
  measurementId: "G-FVGQPKG3S6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);