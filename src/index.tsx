import React from 'react';
import ReactDOM from 'react-dom/client';
import './core/import.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./app/views/Home.view";
import Contact from "./app/views/Contact.view";
import NotFound404 from "./app/views/NotFound404.view";
import Navbar from "./app/components/NavBar/NavBar";
import User from "./app/views/User.view";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path={"/home"} element={<Home/>}/>
                <Route path={"/contato"} element={<Contact/>}/>
                <Route path={'/usuario/:userId'} element={<User/>}/>
                <Route path={"/*"} element={<NotFound404/>}/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
