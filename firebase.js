import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC2xpexw0T7ilnTLRb6MWEwr9Cu0w557-Y",
  authDomain: "auralegend-68c0e.firebaseapp.com",
  databaseURL: "https://auralegend-68c0e-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "auralegend-68c0e",
  storageBucket: "auralegend-68c0e.firebasestorage.app",
  messagingSenderId: "1046458615666",
  appId: "1:1046458615666:web:f3e05695ad31fb84273feb",
  measurementId: "G-9NPB3Z038T"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const rtdb = getDatabase(app);
const analytics = getAnalytics(app);

export { db, rtdb };
