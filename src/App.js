import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Todo from './components/Todo';
import Todos from './components/Todos';
import { EditTodo } from './components/EditTodo';
import styled from 'styled-components';

/*
Objectives
How to use Styled Components

*/

const Background = styled.div`
  background-color: #051749;
  color: palevioletred;
  text-align: center;
`

const TodoS = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
`

function App() {
  return (
    <div className="App">
      <Background>
        Todo App
        <Router>
          <Routes> 
            <Route path="/" element={<TodoS><Todos/></TodoS>}/>
            <Route path='/:id' element={<Todo></Todo>}/>
            <Route path='/:id/edit' element={<EditTodo/>}/>
          </Routes>
        </Router>
      </Background>
      
    </div>
  );
}

export default App;
