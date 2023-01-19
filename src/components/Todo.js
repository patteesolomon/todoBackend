import { useState, useEffect } from 'react';
import { getTodo , deleteTodo } from '../services/todos-api';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function Todo() {
  const nav = useNavigate();
  const {id} = useParams();
  const [todo, setTodo] = useState({});
  useEffect(() => {
    getTodo(id)
    .then(res => setTodo(res.data));
  }, []);

    const deleteTheTodo = () =>
    {
      // delete function goes here
      // navigate back to the main screen
      deleteTodo(id);
      nav('/');
    };
    // by itself it make a grey tab
    const BushidoButton = styled.button`
        background-color: cyan;
    `;
  return (
    <div className='each'> 
      <h3>description: {todo.description}</h3>
      Completed:{todo.complete === true? (<input type="checkbox" checked></input>) 
      : (<input type="checkbox"></input>)}
      <br/>
      <BushidoButton><button onClick = {() => {nav(`/${id}/edit`)}}>Edit</button></BushidoButton>
      <br/>
      <BushidoButton><button onClick = {deleteTheTodo}>Delete</button></BushidoButton>
      <br/>
      <BushidoButton><button onClick = {() => {nav('/')}}>Main</button></BushidoButton>
    </div>
  )
}
