const saveBtn = document.getElementById("save");
const textInput = document.getElementById("text");
const fileInput = document.getElementById("file");
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

canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;

// 이 코드는 한번만 실행됨 (라인의 변화를 계속 감지하기 위해서는 함수 사용 필요)
ctx.lineWidth = lineWidth.value;
ctx.lineCap = "round";
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

function onFileChange(event){
  const file = event.target.files[0];
  const url = URL.createObjectURL(file);
  const image = new Image() // html에서 <img src=""/> 작성하는것과 같음 
  image.src = url;
  image.onload = function(){
    ctx.drawImage(image, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT); 
    fileInput.value = null;
  }
}

function onDoubleClick(event){
  const text = textInput.value; 
  if(text !== ""){
    ctx.save(); // ctx의 현재 상태, 색상, 스타일등  모든것을 저장함.
    ctx.lineWidth = 1;
    ctx.font = "68px serif"
    // event.offsetX, event.offsetY => 마우스가 클릭한 canvas 내부 좌표 
    ctx.fillText(text,event.offsetX, event.offsetY);
    
    // restore(): 이전에 저장된 상태로 돌아감, save ~ restore 에 있던 코드들은 저장되지 않음 
    ctx.restore(); 
  }
}

function onSaveClick(){
 const url = canvas.toDataURL();
 const a = document.createElement("a");
 a.href = url;
 a.download = "myDrawing.png"
 a.click();
}

canvas.addEventListener("dblclick", onDoubleClick);
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
fileInput.addEventListener("change", onFileChange);
saveBtn.addEventListener("click", onSaveClick);