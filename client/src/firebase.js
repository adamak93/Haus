// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "haus-5ab9f.firebaseapp.com",
  projectId: "haus-5ab9f",
  storageBucket: "haus-5ab9f.appspot.com",
  messagingSenderId: "1079172676787",
  appId: "1:1079172676787:web:82137ba243a8aa5b1284c6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);