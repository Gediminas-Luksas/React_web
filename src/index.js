import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// import 'semantic-ui-css/semantic.min.css';
import NavBar from './components/NavBar';
import App from './App';
import './assets/scss/app.scss';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <BrowserRouter>
        <NavBar />
        <App />
    </BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
