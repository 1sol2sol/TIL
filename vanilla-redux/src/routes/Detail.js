import React from "react";
import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";

function Detail(){
  const toDos = useSelector((state) => state);
  const id = useParams().id;
  const toDo = toDos.find(toDo => toDo.id === parseInt(id))
  console.log(toDos);
  console.log(toDo);
  return (
    <>
    <h1>{toDo?.text}</h1>
    <h5>Created at: {toDo?.id}</h5>
    </>
  );
}

export default Detail;
