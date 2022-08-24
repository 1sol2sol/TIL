import { createStore } from "redux";

const ADD = "ADD"
const DELETE = "DELETE"
const TODOS_KEY = "toDos";

export const addToDo = (text) => {
  return{type:ADD, text}
}

export const deleteToDo = (id) => {
  return{type:DELETE, id}
}


JSON.parse(localStorage.getItem("toDos")) || localStorage.setItem("toDos", JSON.stringify([]));
const savedToDos = localStorage.getItem(TODOS_KEY);


const reducer = (state =JSON.parse(savedToDos), action) => {
  switch(action.type){
    case ADD:
      const addItem = [{text: action.text, id: Date.now()}, ...state];
      localStorage.setItem(TODOS_KEY, JSON.stringify(addItem));
      return addItem;
    case DELETE:
      const delItem = state.filter(toDo => toDo.id !== action.id);
      localStorage.setItem(TODOS_KEY, JSON.stringify(delItem));
      return delItem;
    default:
      return state;
  }
}

const store = createStore(reducer)




export default store;