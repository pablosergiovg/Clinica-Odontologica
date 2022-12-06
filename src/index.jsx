import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Routes/Home"
import Contact from "./Routes/Contact"
import Detail from "./Routes/Detail"
import Favs from "./Routes/Favs"
import ErrorComponent from './Routes/ErrorComponent';
import ContextProvider from './Components/utils/global.context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextProvider >
      <BrowserRouter>
        <Routes>
          <Route element={<App/>}> 
            <Route index path="/" element={<Home/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/dentist/:id" element={<Detail/>} />
            <Route path="/favs" element={<Favs/>} />
          </Route>
          <Route path='*' element={<ErrorComponent/>} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  </React.StrictMode>
);
