import React from 'react';
import {render } from 'react-dom';
import { Provider } from 'react-redux';
import  { createStore } from 'redux';
import PlayerReducer from './src/reducers/players';
import App from './src/components/App';


const store = createStore(
    PlayerReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

render (
    <Provider store ={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);
module.hot.accept();
