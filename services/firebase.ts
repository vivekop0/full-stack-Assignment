// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC57_ITGmgIY-5DckosUoxsaie8mWZ0V14",
  authDomain: "auth-b00e9.firebaseapp.com",
  projectId: "auth-b00e9",
  storageBucket: "auth-b00e9.appspot.com",
  messagingSenderId: "480289237821",
  appId: "1:480289237821:web:023a10e04715369570b354",
  measurementId: "G-206SNQHKV3"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);

 export const auth = getAuth(app);
 export const googleAuthProvider = new GoogleAuthProvider();


