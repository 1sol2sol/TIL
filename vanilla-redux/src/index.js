import { createStore } from "redux"; 


const add = document.getElementById("add")
const minus = document.getElementById("minus")
const number = document.querySelector("span")

// reducer is a function that modify my data
const countModifier = (count = 0) => {
  // return값이 나의 application data가 되는것 
  return count;
}

// store는 나의 data(state)를 저장하는곳(state는 나의 app에서 바뀌는 data를 말함)
const countStore = createStore(countModifier);

console.log(countStore.getState());
