const name = "tunnelVision";


let canvas = null;
let context = null;
let mouseX = 0;
let mouseY = 0;
let size = 0;
let css = null;

function removeElement(el) {
  el.parentNode.removeChild(el);
}

function addCss(href, callback) {
  var l = document.createElement("link");
  l.setAttribute("href", href);
  l.setAttribute("rel", "stylesheet");
  l.onload = callback;
  document.getElementsByTagName("head")[0].appendChild(l);
  return l;
}

function setSize() {
  canvas.setAttribute("width", document.documentElement.clientWidth);
  canvas.setAttribute("height", document.documentElement.clientHeight);
  size = Math.min(window.innerWidth * 0.3, 300);
  update();
}

function setMousePosition(e) {
  mouseX = e.clientX;
  mouseY = e.clientY;
  update();
}

function update() {
  context.clearRect(0, 0, window.innerWidth, window.innerHeight);

  context.fillStyle = "black";
  context.rect(0, 0, window.innerWidth, window.innerHeight);
  context.fill();

  context.save();

  context.globalCompositeOperation = "destination-out";

  context.beginPath();
  context.arc(mouseX, mouseY, size / 2, 0, 2 * Math.PI);

  context.fill();

  context.restore();
}

function start() {
  

  canvas = document.createElement("canvas");
  context = canvas.getContext("2d");

  canvas.setAttribute("id", "wds-tunnelVisionCanvas");
  document.body.appendChild(canvas);

  window.addEventListener("resize", setSize, false);
  canvas.addEventListener("mousemove", setMousePosition, false);

  setSize();
  update();
}

function stop() {
  test = document.getElementById("wds-tunnelVisionCanvas");
  console.log(test);
  document.getElementById("wds-tunnelVisionCanvas").style.cssText = "display: none; visibility: hidden;";


  if (canvas) {
    removeElement(canvas);
  }

  window.removeEventListener("resize", setSize, false);
  canvas.removeEventListener("mousemove", setMousePosition, false);
}
