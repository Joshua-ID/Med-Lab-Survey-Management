// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB3xM01XUO1SnFb9rIjvJWHvnz0RuB1TmQ",
  authDomain: "red-josh-storage.firebaseapp.com",
  projectId: "red-josh-storage",
  storageBucket: "red-josh-storage.firebasestorage.app",
  messagingSenderId: "472700885619",
  appId: "1:472700885619:web:de3bc307f03429b5c42806",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// initialize services
const db = getFirestore(app);
const auth = getAuth(app);
export { db, auth };
