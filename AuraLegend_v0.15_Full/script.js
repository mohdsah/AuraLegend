let canvas = document.getElementById('game'), ctx = canvas.getContext('2d');
let player = { x: 100, y: 100, hp: 100, maxHp: 100, exp: 0, gold: 0, lvl: 1, dmg: 10, potion: 3 };
let enemies = [], fireballs = [];
document.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight') player.x += 10;
  if (e.key === 'ArrowLeft') player.x -= 10;
  if (e.key === 'ArrowUp') player.y -= 10;
  if (e.key === 'ArrowDown') player.y += 10;
  if (e.key === ' ') attackEnemy();
  if (e.key === 'f' || e.key === 'F') castFireball();
  if (e.key === 'h' || e.key === 'H') usePotion();
});
function spawnEnemy() {
  enemies.push({ x: Math.random()*700+50, y: Math.random()*400+50, hp: 30 });
}
function attackEnemy() {
  enemies.forEach((e, i) => {
    if (Math.abs(e.x - player.x) < 32 && Math.abs(e.y - player.y) < 32) {
      e.hp -= player.dmg;
      if (e.hp <= 0) {
        enemies.splice(i, 1);
        player.exp += 20;
        player.gold += 10;
        if (player.exp >= 100) { player.lvl++; player.exp = 0; player.hp = player.maxHp; }
      }
    }
  });
}
function usePotion() {
  if (player.potion > 0 && player.hp < player.maxHp) {
    player.hp = Math.min(player.maxHp, player.hp + 30);
    player.potion--;
  }
}
function castFireball() {
  fireballs.push({ x: player.x, y: player.y, vx: 6 });
}
function update() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle = 'blue'; ctx.fillRect(player.x, player.y, 32, 32);
  enemies.forEach((e, i) => {
    ctx.fillStyle = 'red'; ctx.fillRect(e.x, e.y, 32, 32);
    fireballs.forEach((fb, fi) => {
      if (Math.abs(e.x - fb.x) < 32 && Math.abs(e.y - fb.y) < 32) {
        e.hp -= 20; fireballs.splice(fi, 1);
        if (e.hp <= 0) {
          enemies.splice(i, 1);
          player.exp += 20; player.gold += 10;
          if (player.exp >= 100) { player.lvl++; player.exp = 0; player.hp = player.maxHp; }
        }
      }
    });
  });
  fireballs.forEach(fb => {
    fb.x += fb.vx;
    ctx.fillStyle = 'orange';
    ctx.fillRect(fb.x, fb.y + 12, 10, 8);
  });
  document.getElementById('hp-bar').style.setProperty('--hp', (player.hp/player.maxHp*100)+'%');
  document.getElementById('exp-bar').style.setProperty('--exp', (player.exp)+'%');
  document.querySelector('#hp-bar::after').style.width = (player.hp/player.maxHp*100)+'%';
  document.querySelector('#exp-bar::after').style.width = player.exp+'%';
  document.getElementById('info').innerText = `LVL: ${player.lvl} | EXP: ${player.exp} | GOLD: ${player.gold} | Potion: ${player.potion}`;
  requestAnimationFrame(update);
}
for (let i = 0; i < 3; i++) spawnEnemy();
update();