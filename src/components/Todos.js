import Create from "./CreateTodo";
//connecting our data. js 
import{ getTodos, deleteTodo } from "../services/todos-api";
import { useState , useEffect } from 'react';
import styled from "styled-components";

export default function Todos() {
    const [todoList, setToDoList] = useState([]);

    const URL = 'http://localhost:3001/'; 
    const data = fetch(URL);
    useEffect(() =>{
        getTodos() // calling the function to get the data
        .then(res => setToDoList(res.data)); // settting state
    //getAllTodos();
}, []);

const TodoStyle = styled.a`
    font-size: 1.5em;
    width: 2in;
`;

    console.log(todoList);
    //setToDoList(data); // spit the data retrieved
    const deleteTheTodo = (id) =>
    {
      // delete function goes here
        deleteTodo(id);
    };
    return (
        <div> 
            All of the Todos
            <ul>
                {/* conditional rendering */}
                {/* this conditional heirarchy order is important */}
                {/*conditional styles*/}
                
            
            {todoList.map((todo) =>{
                if(todo.complete === true){
                    return (
                        deleteTheTodo(`/${todo._id}`) 
                    )
                }
                else if (todo.description == String().length){
                    return(
                        <TodoStyle>
                            <li>
                                <a href={`/${todo._id}`}>{'no description'}</a>
                            </li>
                        </TodoStyle>
                    )
                }
                else{
                    return(
                        <TodoStyle>
                            <li>
                                <a href={`/${todo._id}`}>{todo.description}</a>
                            </li>
                        </TodoStyle>
                    )
                }
            })}
            </ul>
            <Create/>  
        </div>
    )
}
