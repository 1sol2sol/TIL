import { createStore } from "redux";
import { configureStore, createAction, createReducer, createSlice } from "@reduxjs/toolkit";


// const TODOS_KEY = "toDos";

// export const addToDo = createAction("ADD");
// export const deleteToDo = createAction("DELETE");

// const reducer = (state =JSON.parse(savedToDos), action) => {
//   switch(action.type){
//     case addToDo.type:
//       console.log(action);
//       const addItem = [{text: action.payload, id: Date.now()}, ...state];
//       localStorage.setItem(TODOS_KEY, JSON.stringify(addItem));
//       return addItem;
//     case deleteToDo.type:
//       const delItem = state.filter(toDo => toDo.id !== action.payload);
//       localStorage.setItem(TODOS_KEY, JSON.stringify(delItem));
//       return delItem;
//     default:
//       return state;
//   }
// }

// const reducer = createReducer([],{
//   [addToDo]: (state,action) => {
//     state.push({text: action.payload, id: Date.now()})
//   },
//   [deleteToDo]:(state,action) =>  state.filter(toDo => toDo.id !== action.payload)
// })

// JSON.parse(localStorage.getItem("toDos")) || localStorage.setItem("toDos", JSON.stringify([]));
// const savedToDos = localStorage.getItem(TODOS_KEY);

const toDos = createSlice({
  name: 'toDosReducer',
  initialState: [],
  reducers: {
    add: (state,action) => {
      state.push({text: action.payload, id: Date.now()});
    },
    remove: (state,action) => {
      state.filter(toDo => toDo.id !== action.payload)
    }
  }
})

const store = configureStore({reducer: toDos.reducer})

export const{
  add,
  remove
} = toDos.actions


export default store;