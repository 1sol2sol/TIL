import { createStore } from "redux"; 


const add = document.getElementById("add")
const minus = document.getElementById("minus")
const number = document.querySelector("span")


number.innerText = 0;

const ADD = "ADD";
const MINUS = "MINUS";

// reducer is a function that modify my data
// action: redux에서 function을 부를때쓰는 두번째 parameter
const countModifier = (count = 0, action) => {
  // return값이 나의 application data가 되는것 
  switch(action.type){
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
}

// store는 나의 data(state)를 저장하는곳(state는 나의 app에서 바뀌는 data를 말함)
const countStore = createStore(countModifier);

const onChage = () => {
  number.innerText = countStore.getState();
}

// subscribe : store안에 있는 변화들을 알려줌 
countStore.subscribe(onChage)

add.addEventListener("click",() => countStore.dispatch({type: ADD}))
minus.addEventListener("click",() => countStore.dispatch({type: MINUS}))