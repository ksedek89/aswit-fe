import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AboutAs from "./about-as/about-as";
import Podcast from "./podcast/podcast";

ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
 document.getElementById('root'));

