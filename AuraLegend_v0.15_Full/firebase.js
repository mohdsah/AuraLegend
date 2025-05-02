import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore, collection, getDocs, doc, updateDoc, deleteDoc } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";
const firebaseConfig = {
  apiKey: "AIzaSyC2xpexw0T7ilnTLRb6MWEwr9Cu0w557-Y",
  authDomain: "auralegend-68c0e.firebaseapp.com",
  databaseURL: "https://auralegend-68c0e-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "auralegend-68c0e",
  storageBucket: "auralegend-68c0e.appspot.com",
  messagingSenderId: "1046458615666",
  appId: "1:1046458615666:web:f3e05695ad31fb84273feb"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db, collection, getDocs, doc, updateDoc, deleteDoc };