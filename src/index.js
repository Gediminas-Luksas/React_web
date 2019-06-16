import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import NavBar from './components/NavBar';
import App from './App';
import './assets/scss/app.scss';
import * as serviceWorker from './serviceWorker';
import rootReducer from './rootReducer';
import { userLoggedIn } from './actions/auth';



const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));

if(localStorage.dbJWT){
    const user = { token: localStorage.dbJWT };
    store.dispatch(userLoggedIn(user));
}

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <NavBar />
            <Route component={App} />
        </Provider>
    </BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
