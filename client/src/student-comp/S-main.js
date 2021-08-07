import React from 'react';

import StClass from './StClass';
import {Route} from 'react-router-dom';
import StLogin from './StLogin';
import Navbar from './StudentHomePage'
import Signup from './Ssignup';
import Subject from './SubjectComp';
import Notes from './Notes';
import Assignment from './Assignment';
import Discussion from './Discussion';

//add Navbar

const StudentHome = () => {
    return (
       <>
       
        
        <Route  exact path="/student">
        <Subject />
        </Route>
        <Route  exact path="/student/class">
        <StClass />
        </Route>
        <Route  exact path="/student/login">
        <StLogin />
        </Route>
        <Route path="/student/signup">
            <Signup />
        </Route>

        <Route  exact path="/student/notes">
        <Notes />
        </Route>
        <Route  exact path="/student/assignment">
        <Assignment />
        </Route>
        <Route path="/student/disscussion">
            <Discussion />
        </Route>

       </>

    )
}
export default StudentHome