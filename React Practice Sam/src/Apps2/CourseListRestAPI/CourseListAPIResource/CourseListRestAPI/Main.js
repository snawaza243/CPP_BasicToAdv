import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";
import App3 from './App3';

function Main() {
    return (
        <BrowserRouter>
            <App3 />
        </BrowserRouter>
    )
}
export default Main;