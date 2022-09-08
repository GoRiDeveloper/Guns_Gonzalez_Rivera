// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNXzYHOq1rNdywInCllRTxmkb1N77KbGY",
  authDomain: "e-commerce-guns-gr.firebaseapp.com",
  projectId: "e-commerce-guns-gr",
  storageBucket: "e-commerce-guns-gr.appspot.com",
  messagingSenderId: "528107225440",
  appId: "1:528107225440:web:d2c7b2d36e2a75a9295e05"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);