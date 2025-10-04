// SCRIPT.JS
console.log("canvas");
let cnv = document.getElementById("game");
let ctx = cnv.getContext("2d");

const GAME_WIDTH = 900, GAME_HEIGHT = 900;
[cnv.width, cnv.height] = [GAME_WIDTH, GAME_HEIGHT];

requestAnimationFrame(drawBreakIt);
function drawBreakIt() {
  ctx.fillStyle = "rgb(200, 200, 200)";
  ctx.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
  requestAnimationFrame(drawBreakIt);
}
