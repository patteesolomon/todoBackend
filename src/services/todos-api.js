import axios from "axios";

// fetch("url")
// .then(response => response.json())
// .then(data => console.log(data))
// SHOW ALL 
const baseURL = 'http://localhost:3001/todos';
// port to our express app 
// defining it here makes things easier
// the slash is for everything comming from the default route

export const getTodos = () =>{
    const URL = baseURL;// base URL
    const response = axios.get(URL);
    return response;
};

export const getTodo = (id) => {
    const URL = `${baseURL}/${id}`;
    const response = axios.get(URL);
    return response;
};

export const editTodo = (id, updatedTodo) => {
    const URL = `${baseURL}/${id}`;
    const response = axios.put(URL, updatedTodo);
    return response;
};

export const createTodo = (todo) => {
    const URL = baseURL;
    const response = axios.post(URL, todo);
    return response;
};

export const deleteTodo = (id) =>
{
    const URL = `${baseURL}/${id}`;
    const response = axios.delete(URL);
    return response;
};