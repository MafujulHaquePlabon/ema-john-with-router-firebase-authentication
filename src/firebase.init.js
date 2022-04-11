// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChmkDzK-CAOD0RKuwpyNN6ZWmMlX04Y5c",
  authDomain: "ema-john-simple-firebase-39abb.firebaseapp.com",
  projectId: "ema-john-simple-firebase-39abb",
  storageBucket: "ema-john-simple-firebase-39abb.appspot.com",
  messagingSenderId: "549631682909",
  appId: "1:549631682909:web:49743d0fe3c5314d06a0b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app);

export default auth;