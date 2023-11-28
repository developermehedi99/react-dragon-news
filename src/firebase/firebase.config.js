// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvfZzQIOftWbcnj5yIgtfgjghILvO9Iz4",
  authDomain: "recap-news-web.firebaseapp.com",
  projectId: "recap-news-web",
  storageBucket: "recap-news-web.appspot.com",
  messagingSenderId: "132397328571",
  appId: "1:132397328571:web:16077d8048950c0c0be19e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;