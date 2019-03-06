import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import JokesProvider from './context/JokesProvider.js'
import App from './App.js'






ReactDOM.render(
    <JokesProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </JokesProvider>, 
document.getElementById('root'));

