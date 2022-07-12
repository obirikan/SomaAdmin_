import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBBDfqIatVgWgCFoYtEx7zDhKKaUcIBgDU",
  authDomain: "somaeats-23a33.firebaseapp.com",
  projectId: "somaeats-23a33",
  storageBucket: "somaeats-23a33.appspot.com",
  messagingSenderId: "570819984716",
  appId: "1:570819984716:web:28ede26e23e4b9280ae3e9",
  measurementId: "G-XR3VSYWD2Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db=getFirestore(app)
export const auth=getAuth(app)