import { useNavigate } from "react-router-dom";
import {createTodo} from '../services/todos-api';

import styled from "styled-components";

function Create() {
    const nav = useNavigate();

    const BushidoBar = styled.text`
        background-color: cyan;
    `;

    const BushidoButton = styled.button`
        background-color: cyan;
    `;

    const createTheTodo = (e) => {
        const todo = {description: e.target.description.value, complete: false};
        createTodo(todo);
        nav('/');
    };

return(
    <div>
        <h4>Create a Todo</h4>
        <form onSubmit={createTheTodo}>
            <BushidoBar><input type='text' name='description' id='dsc'/></BushidoBar>
            <BushidoButton><input type='submit'/></BushidoButton>
        </form>
    </div>
)
}

export default Create