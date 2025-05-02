let playerId = localStorage.getItem("auraPlayerId");
if (!playerId) {
  playerId = "player_" + Date.now();
  localStorage.setItem("auraPlayerId", playerId);
}
