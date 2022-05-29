import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import { useState,useRef} from 'react';
import React from 'react';
import HomePage from './components/HomePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path = '/' element = {<HomePage/>}/>

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
