import NavBar from "components/NavBar";
import React from "react";
import {BrowserRouter } from 'react-router-dom'

import Routes from './routes'


function App() {
  return (
     
    <BrowserRouter>
    <NavBar/>
       <Routes/>
    </BrowserRouter>
  );
}

export default App;
