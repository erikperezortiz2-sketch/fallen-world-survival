const canvas = document.getElementById("juego");
const ctx = canvas.getContext("2d");

const jugador = { x: 300, y: 220, tam: 20, vel: 2 };
const teclas = {};

window.addEventListener("keydown", e => teclas[e.key.toLowerCase()] = true);
window.addEventListener("keyup", e => teclas[e.key.toLowerCase()] = false);

function actualizar() {
  if (teclas["w"] || teclas["arrowup"]) jugador.y -= jugador.vel;
  if (teclas["s"] || teclas["arrowdown"]) jugador.y += jugador.vel;
  if (teclas["a"] || teclas["arrowleft"]) jugador.x -= jugador.vel;
  if (teclas["d"] || teclas["arrowright"]) jugador.x += jugador.vel;
}

function dibujar() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#7CFC00";
  ctx.fillRect(jugador.x, jugador.y, jugador.tam, jugador.tam);
}

function bucle() {
  actualizar();
  dibujar();
  requestAnimationFrame(bucle);
}
bucle();
