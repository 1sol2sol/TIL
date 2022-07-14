const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos(){
  // JSON.stringify : JavaScript object나 array 또는 어떤 JavaScript 코드건 간에 string으로 바꿔줌 
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
  // target은 클릭된 HTML element이다.
  // 모든 HTML element에는 하나 이상의 property가 있다.
  // parentElement는 클릭된 element의 부모다.
  const li = event.target.parentElement;
  li.remove();

  // console.log(typeof li.id); => li.id가 string 타입임

  // filter() : 새로운 array를 반환함, 원래 있던 array에 삭제를 직접하는것이 아님 
  // 우리가 클릭한 li.id와 다른 toDo는 남기겠다
  // toDo.id는 Number타입
  toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));

  // toDos DB에서 todo를 지운 뒤에 다시 한번 저장해야함 
  saveToDos();
} 

function paintToDo(newTodo){
  const li = document.createElement("li");
  li.id  = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click",deleteToDo)
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}



function handleToDoSubmit(event){
  event.preventDefault(); // submit의 기본 동작인 새로고침을 막아줌
  const newTodo = toDoInput.value; // 새로운 변수에 toDoInput.value를 복사해둠 
  toDoInput.value=""; // 따라서 여기서 toDoInput의 값을 비우더라도 newTodo의 값이 비는것이 아님 
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj); // 복사된 value값을 toDos라는 배열에 저장함 
  paintToDo(newTodoObj);
  saveToDos(); // saveToDos() 호출 시점에 newTodo는 배열에 이미 저장되어있음 
}

toDoForm.addEventListener("submit", handleToDoSubmit);


const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos != null){
  // 로컬스토리지에 저장된 savedToDos가 존재한다면 
  // 그 savedToDos는 string 형태로 저장되어있고 이것을 배열 객체로 저장함 
  const parsedToDos = JSON.parse(savedToDos);

  // toDos 선언시 빈 배열로 시작한다.
  // 하지만 우리는 빈 배열로 시작하는것이 아니라 localStorage에 저장되어 있는 todo들의 값들로 시작하고 싶다.
  toDos  = parsedToDos;

  // console.log(parsedToDos);

  // forEach: array의 각 item에 대해 function을 실행함 
  parsedToDos.forEach(paintToDo);
}

