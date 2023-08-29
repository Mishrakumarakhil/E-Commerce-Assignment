import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar';
import MainContainer from './Components/MainContainer';
import { menuItems } from './Components/utils';

function App() {
  return (

      <div className="App">
        <NavBar />
        <MainContainer />
     
      </div>

  );
}

export default App;
