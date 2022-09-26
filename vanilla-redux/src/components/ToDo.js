import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { remove } from "../store";

function ToDo({text, id}){
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(remove(id));
  }
  return(
    <li>
      <Link to={`/${id}`}>
      </Link>
      {text}<button onClick={onClick}>DEL</button>
    </li>
  )
}

export default ToDo;