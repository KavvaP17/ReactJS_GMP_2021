import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import {
    BrowserRouter
} from 'react-router-dom';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { createStore, applyMiddleware } from 'redux';

const store = window.PRELOADED_STATE
    ? createStore(rootReducer, window.PRELOADED_STATE, applyMiddleware(thunk))
    : createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.hydrate(
    <App
        store={store}
        Router={BrowserRouter}
    />,
    document.querySelector('#root')
);
