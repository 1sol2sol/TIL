const fileInput = document.getElementById("file")
const modeBtn = document.getElementById("mode-btn");
const destoryBtn = document.getElementById("destroy-btn");
const eraseBtn = document.getElementById("eraser-btn");
const colorOptions = Array.from(document.getElementsByClassName("color-option"));
const color = document.getElementById("color");
const lineWidth = document.getElementById("line-width");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d"); // paint brush 설정

const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;

canvas.width = 800;
canvas.height = 800;

// 이 코드는 한번만 실행됨 (라인의 변화를 계속 감지하기 위해서는 함수 사용 필요)
ctx.lineWidth = lineWidth.value;
let isPainting = false;
let isFilling = false;

function onMove(event){
  if(isPainting){
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
    return;
  }
  ctx.beginPath();
  ctx.moveTo(event.offsetX, event.offsetY); 
}

function startPainting(){
  isPainting = true;
}

function cancelPainting(){
  isPainting = false;
}
function onLineWidthChange(event){
  console.log(event.target.value);
  ctx.lineWidth = event.target.value;
}

function onColorChange(event){
  ctx.strokeStyle = event.target.value;
  ctx.fillStyle = event.target.value;
}

function onColorClick(event){
  const colorValue = event.target.dataset.color;
  ctx.strokeStyle = colorValue;
  ctx.fillStyle = colorValue;
  color.value = colorValue;
}

function onModeClick(){
  if(isFilling){
    isFilling = false;
    modeBtn.innerText = "Fill"
  } else{
    isFilling = true;
    modeBtn.innerText = "Draw"
  }
}

function onCanvasClick(){
  if(isFilling){
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
  }
}

function onDestroyClick(){
  ctx.fillStyle = "white"
  ctx.fillRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT)
}

function onEraserClick(){
  ctx.strokeStyle="white";
  isFilling = false;
  modeBtn.innerText = "Fill";
}

canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting); // mousedown: 마우스를 누른채로 있는것
canvas.addEventListener("mouseup", cancelPainting); 
canvas.addEventListener("mouseleave", cancelPainting);
canvas.addEventListener("click", onCanvasClick);
lineWidth.addEventListener("change", onLineWidthChange);
color.addEventListener("change", onColorChange);

colorOptions.forEach(color => color.addEventListener("click", onColorClick))

modeBtn.addEventListener("click", onModeClick);
destoryBtn.addEventListener("click", onDestroyClick);
eraseBtn.addEventListener("click", onEraserClick);