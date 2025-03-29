import { initializeApp } from "firebase/app";
import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export const addPatientToFirestore = async (patient) => {
  try {
    const docRef = await addDoc(collection(db, "patients"), patient);
    console.log("Patient added with ID:", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Error adding patient:", error);
  }
};

export const fetchPatientsFromFirestore = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "patients"));
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error fetching patients from Firestore:", error);
    return [];
  }
};

export { db, auth };
