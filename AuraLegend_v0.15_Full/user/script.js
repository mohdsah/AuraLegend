// Server status check
fetch("https://auralegend.netlify.app/")
  .then(() => document.getElementById("web-status").textContent = "Game Page: ONLINE ✅")
  .catch(() => document.getElementById("web-status").textContent = "Game Page: OFFLINE ❌");

fetch("https://auralegend-68c0e-default-rtdb.asia-southeast1.firebasedatabase.app/.json")
  .then(res => res.ok ? document.getElementById("server-status").textContent = "Server: ONLINE ✅" : null)
  .catch(() => document.getElementById("server-status").textContent = "Server: OFFLINE ❌");
