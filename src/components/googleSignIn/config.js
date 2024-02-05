// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyD5sCGrSL57wFPht4UUT_RmTMdccWkPsYQ",
  authDomain: "bookgenie-7e6e7.firebaseapp.com",
  projectId: "bookgenie-7e6e7",
  storageBucket: "bookgenie-7e6e7.appspot.com",
  messagingSenderId: "376059395842",
  appId: "1:376059395842:web:58393e2909e5b401268c1b",
  measurementId: "G-H7DRRPWY78"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth, provider}