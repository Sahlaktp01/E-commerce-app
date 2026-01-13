// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDueLk1LoTY7ixwpI7VARSgoYyEXxKKrGw",
  authDomain: "myfirstapp-f4539.firebaseapp.com",
  projectId: "myfirstapp-f4539",
  storageBucket: "myfirstapp-f4539.firebasestorage.app",
  messagingSenderId: "180022992966",
  appId: "1:180022992966:web:e03364decb653f85acaa47"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB,auth } ;