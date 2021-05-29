import React from 'react';
import StClass from './StClass';
import {Route} from 'react-router-dom';
import StLogin from './StLogin';
import Navbar from './StudentHomePage'
import Signup from './Ssignup';
import Subject from './Subjects';


const StudentHome = () => {
    return (
       <>
       <Navbar />
        <div>
         <h2>Student'sPage</h2>
        </div>
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

       </>

    )
}
export default StudentHome