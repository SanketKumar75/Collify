
import './App.css';
import React from 'react';
import {Route} from 'react-router-dom';
import StudentHome from'./student-comp/S-main';
import FacultyHome from './faculty-comp/F-main';
import Home from './Home';



function App() {



  return (
    <>

    
        <Route exact path = "/">
          <Home />
        </Route>

        <Route path = "/student">
        <StudentHome />
        </Route>

        <Route path = "/faculty">
        <FacultyHome />
        </Route>
    </>


  );
}


export default App;
