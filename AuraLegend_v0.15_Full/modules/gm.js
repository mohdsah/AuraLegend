import { db, collection, getDocs, doc, updateDoc, deleteDoc } from '../firebase.js';
const playerList = document.getElementById('playerList');
const goldInput = document.getElementById('gold');
const levelInput = document.getElementById('level');
let players = [];
async function fetchPlayers() {
  const querySnapshot = await getDocs(collection(db, 'players'));
  querySnapshot.forEach((docSnap) => {
    players.push({ id: docSnap.id, ...docSnap.data() });
    const opt = document.createElement('option');
    opt.value = docSnap.id;
    opt.textContent = `${docSnap.id} (Lv.${docSnap.data().level || 1})`;
    playerList.appendChild(opt);
  });
}
fetchPlayers();
window.updatePlayer = async function () {
  const id = playerList.value;
  const ref = doc(db, 'players', id);
  await updateDoc(ref, {
    gold: parseInt(goldInput.value),
    level: parseInt(levelInput.value)
  });
  alert('Updated!');
};
window.resetPlayer = async function () {
  const id = playerList.value;
  await deleteDoc(doc(db, 'players', id));
  alert('Player data deleted.');
};