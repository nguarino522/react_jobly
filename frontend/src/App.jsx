import React from 'react';
import './App.css';
// import Button from 'react-bootstrap/Button';
import NavBar from './NavBar';
import Routing from './Routes';
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <div className="m-5">
          <Routing />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
