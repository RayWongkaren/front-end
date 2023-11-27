// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxCQfZ-eMGmcTXjnowIc3Nb6bRAPRc-wc",
  authDomain: "front-end-577e2.firebaseapp.com",
  projectId: "front-end-577e2",
  storageBucket: "front-end-577e2.appspot.com",
  messagingSenderId: "258793373969",
  appId: "1:258793373969:web:20cb3627ebabded8b20cb0",
  measurementId: "G-BEC23PMEN4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app);

export { database };