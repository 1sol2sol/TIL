import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store";
import ToDo from "../components/ToDo";

function Home(){
  const [text, setText] = useState("");
  const onChange = (e) => {
    setText(e.target.value)
  }
  const toDo = useSelector((state) => state);
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(add(text))
    setText("");
  }

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange}/>
        <button>Add</button>
      </form>
      <ul>{toDo.map(todo => <ToDo {...todo} key={todo.id}/>)}</ul>
    </>
  )
}



export default Home;
