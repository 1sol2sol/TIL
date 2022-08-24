import { createStore } from "redux"; 


const add = document.getElementById("add")
const minus = document.getElementById("minus")
const number = document.querySelector("span")

// reducer is a function that modify my data
// action: redux에서 function을 부를때쓰는 두번째 parameter
const countModifier = (count = 0, action) => {
  // return값이 나의 application data가 되는것 
  if(action.type === "ADD"){
    return count + 1;
  } else if(action.type === "MINUS"){
    return count - 1;
  } else {
    return count;
  }
}

// store는 나의 data(state)를 저장하는곳(state는 나의 app에서 바뀌는 data를 말함)
const countStore = createStore(countModifier);

// store -> dispatch -> action -> modifier
// dispatch를 통해 countModifier로 메세지를 보내는것 
countStore.dispatch({type: "ADD"});
countStore.dispatch({type: "ADD"});
countStore.dispatch({type: "ADD"});
countStore.dispatch({type: "ADD"});
countStore.dispatch({type: "ADD"});
countStore.dispatch({type: "MINUS"});

console.log(countStore.getState()); // 4
