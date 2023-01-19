import { useNavigate, useParams } from "react-router-dom";
import { editTodo , getTodo } from "../services/todos-api";
import { useState, useEffect } from 'react';
import styled from 'styled-components';

export const EditTodo = () => {
    const {id} = useParams();
    const nav = useNavigate();
    const [data, setData] = useState({});

        useEffect(() =>
        {
            getTodo(id) // getting the todo that matches this id
            .then(res => setData(res.data));
        }, []);
        
        const editTheTodo = e => {
            e.preventDefault();
        const updatedTodo = { 
            description: e.target.description.value,
            complete: e.target.complete.checked
        };
        editTodo(id, updatedTodo);
        nav(`/${id}`);
    };
    const BushidoButton = styled.button`
        background-color: lime;
    `;
    return (
        <div>
            <form onSubmit = {editTheTodo}>
                Description: <input type = "text" name = 'description' defaultValue = {data.description}/>
                <br/>
                Completed: <input type = 'checkbox' name = 'complete' defaultChecked = {data.complete}/>
                <br/>
                <BushidoButton><input type='submit'/></BushidoButton>
            </form>
        </div>
    )
}
