import React from 'react';
import ReactDOM from "react-dom/client";
import App from './App';
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import Context from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Context>
    <App />
    </Context>
    </BrowserRouter>
  </React.StrictMode>
);
