import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "@firebase/firestore"


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDe5FN0pplqvtp3fWtmgAhJqnEPOFbJkvs",
  authDomain: "olx-clone-8823a.firebaseapp.com",
  projectId: "olx-clone-8823a",
  storageBucket: "olx-clone-8823a.appspot.com",
  messagingSenderId: "26225318389",
  appId: "1:26225318389:web:d5f2328ab7ae1fd23068bc",
  measurementId: "G-B0BV8SPHRP"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)


