import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCKVgnwNfYIN2LduCV5ZPYlCIORnRLpUSM",
  authDomain: "react-chat-app-a6c23.firebaseapp.com",
  projectId: "react-chat-app-a6c23",
  storageBucket: "react-chat-app-a6c23.firebasestorage.app",
  messagingSenderId: "936824509659",
  appId: "1:936824509659:web:ae9696264a83cd15eee8fe",
  measurementId: "G-B7BXE6SZVV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);