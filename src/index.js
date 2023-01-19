import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import styled from 'styled-components';

// this b is for the bold
const Merica = styled.b``;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Merica className='b'>
      <App/> 
    </Merica>
  </React.StrictMode>
);