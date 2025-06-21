// Firebase configuration and initialization
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB4LeOrUHlsbL1sXDob5feJ82sUx4hB0bQ",
  authDomain: "stadium876-c42bf.firebaseapp.com",
  projectId: "stadium876-c42bf",
  storageBucket: "stadium876-c42bf.firebasestorage.app",
  messagingSenderId: "555557983522",
  appId: "1:555557983522:web:87bf09f2085c81f7b8c17b"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage, GoogleAuthProvider };
