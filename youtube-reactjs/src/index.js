import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import 'dotenv/config';
// import 'path-browserify'; // Add this line to polyfill the 'path' module
// import 'crypto-browserify'; // Add this line to polyfill the 'crypto' module
// import 'buffer'; // Add this line to polyfill the 'buffer' module

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
