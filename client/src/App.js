<<<<<<< HEAD
import './App.css';
import React from 'react';
import {Route} from 'react-router-dom';
import StudentHome from'./student-comp/S-main.js';
import FacultyHome from './faculty-comp/F-main';
import Home from './Home';


function App() {
  return (
    <>
      <header className = "App-header ">
        <Route exact path = "/">
          <Home />
        </Route>

        <Route path = "/student">
        <StudentHome />
        </Route>

        <Route path = "/faculty">
        <FacultyHome />
        </Route>
        </header>
    </>
=======
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
>>>>>>> front
  );
}

export default App;
