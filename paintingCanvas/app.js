const canvas = document.getElementById("jsCanvas");
const context = canvas.getContext("2d");

context.strokeStyle = "black";
context.lineWidth = 2.5;
let painting = false;

function stopPaint() {
  painting = false;
}

function startPaint() {
  painting = true;
}

function onMouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  if (!painting) {
    context.beginPath();
    context.moveTo(x, y);
  } else {
    context.lineTo(x, y);
    context.stroke();
  }
}

// function onMouseDown(event) {
//   painting = true;
// }

function onMouseUp() {
  stopPaint();
}

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPaint);
  canvas.addEventListener("mouseup", stopPaint);
  canvas.addEventListener("mouseleave", stopPaint);
}
