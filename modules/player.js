import { db } from "../firebase.js";
import { doc, getDoc, setDoc } from "firebase/firestore";

export async function savePlayerData(playerId, data) {
  await setDoc(doc(db, "players", playerId), data);
}

export async function loadPlayerData(playerId) {
  const docRef = doc(db, "players", playerId);
  const snapshot = await getDoc(docRef);
  return snapshot.exists() ? snapshot.data() : null;
}
