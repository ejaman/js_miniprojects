const canvas = document.getElementById("jsCanvas");
const context = canvas.getContext("2d");
const color = document.getElementsByClassName("controlColor");
const range = document.querySelector("#jsRange");
const fillBtn = document.querySelector("#jsMode");
const sizeX = document.querySelector("#jsX");
const sizeY = document.querySelector("#jsY");

canvas.width = 1000;
canvas.height = 600;
context.lineWidth = 10.1;
context.lineCap = "round";
let painting = false;

function stopPaint() {
  painting = false;
}

function startPaint() {
  painting = true;
}

function OnColorChange(event) {
  const bgColor = event.target.style.backgroundColor;
  context.strokeStyle = bgColor;
}
function onHandleRange(event) {
  const range = event.target.value;
  console.log(range);
  context.lineWidth = range;
}
function onHandleFill() {
  context.fillStyle = context.strokeStyle;
  context.fillRect(0, 0, 1000, 600);
}
function onHandleSize(event) {
  console.log(event);
}

function onMouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  if (!painting) {
    context.beginPath(); // line
    context.moveTo(x, y);
  } else {
    context.lineTo(x, y);
    context.stroke();
  }
}

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPaint);
  canvas.addEventListener("mouseup", stopPaint);
  canvas.addEventListener("mouseleave", stopPaint);
}
Array.from(color).forEach((c) => c.addEventListener("click", OnColorChange));
range.addEventListener("input", onHandleRange);
fillBtn.addEventListener("click", onHandleFill);
sizeX.addEventListener("input", onHandleSize);
