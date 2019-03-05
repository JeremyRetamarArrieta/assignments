import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import JokesProvider from './context/JokesProvider'





ReactDOM.render(
    <JokesProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </JokesProvider>, 
document.getElementById('root'));

