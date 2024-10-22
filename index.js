// index.js or main entry file
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';  // Your main App component
import './index.css';  // Any global styles
import reportWebVitals from './reportWebVitals';


const container = document.getElementById('root');  // Get the root element from the DOM
const root = createRoot(container);  // Create the root with React 18
root.render(<App />);  // Render your application


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
