// SCRIPT.JS
console.log("finnaly a direction");
let cnv = document.getElementById("game");
let ctx = cnv.getContext("2d");

window.addEventListener('resize', (e) => {
  [cnv.width, cnv.height] = [e.target.innerWidth, e.target.innerHeight];
})

requestAnimationFrame(drawBreakIt);
function drawBreakIt() {
  ctx.fillStyle = "rgb(200, 200, 200)";
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  ctx.fillStyle = "rgb(255, 255, 255)";
  ctx.textAlign = "center"
  ctx.font = "30px Arial";
  ctx.fillText("You Reap What You Sow", cnv.width/2, 100);
  
  requestAnimationFrame(drawBreakIt);
}
