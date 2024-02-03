// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6nAMjYY7OX3jF531rTdh6ptCn8T3OhfM",
  authDomain: "netflixgpt-388e5.firebaseapp.com",
  projectId: "netflixgpt-388e5",
  storageBucket: "netflixgpt-388e5.appspot.com",
  messagingSenderId: "804791657388",
  appId: "1:804791657388:web:284ae50511a239d8625009",
  measurementId: "G-DD7ZT2EXDG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();