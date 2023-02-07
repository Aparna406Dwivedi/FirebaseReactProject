// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from  'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASHcETCmboE9A9_-cOf0wbGitxhikI_C8",
  authDomain: "fir-5f398.firebaseapp.com",
  projectId: "fir-5f398",
  storageBucket: "fir-5f398.appspot.com",
  messagingSenderId: "82988372917",
  appId: "1:82988372917:web:6492d296fe30c4acd67ffc",
  measurementId: "G-XG4P8EFPZ5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
 export {app,auth}
