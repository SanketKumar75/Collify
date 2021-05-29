<<<<<<< HEAD

=======
>>>>>>> parent of b1bfecc (crying)
import './App.css';
import React from 'react';
import {Route} from 'react-router-dom';
import StudentHome from'./student-comp/S-main.js';
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
<<<<<<< HEAD
  )}
=======
  );
}

>>>>>>> parent of b1bfecc (crying)
export default App;
