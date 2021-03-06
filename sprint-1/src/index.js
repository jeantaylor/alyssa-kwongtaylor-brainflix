import React from 'react';
import ReactDOM from 'react-dom';
import "./styles/main.css"; 
import App from './App';
import * as serviceWorker from './serviceWorker';

// Render the component called App inside an element w/ id = "root" 
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
