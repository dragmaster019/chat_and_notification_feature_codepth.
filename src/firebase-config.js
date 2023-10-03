// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsbHGVuaNMdCQFi6yl7_-oUeFlILqOw9o",
  authDomain: "assignment-9a228.firebaseapp.com",
  projectId: "assignment-9a228",
  storageBucket: "assignment-9a228.appspot.com",
  messagingSenderId: "737217113005",
  appId: "1:737217113005:web:59b8b54a02ae92a6c88f24"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();