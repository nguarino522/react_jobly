import React from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import NavBar from './NavBar';
import Routing from './Routes';
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <h1>My App</h1>
          <p>This is my React-Bootstrap app.</p>
        </main>
        <Button variant="primary">Primary</Button>{' '}
        <Routing />
      </BrowserRouter>
    </div>
  );
}

export default App;
