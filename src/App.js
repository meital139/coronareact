import './App.css';
import {HashRouter as BrowserRouter,Route,Routes} from 'react-router-dom';
import { useState,useRef} from 'react';
import React from 'react';
import HomePage from './components/HomePage';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path = '/' element = {<HomePage/>}/>

        </Routes>
      </HashRouter>

    </div>
  );
}

export default App;
