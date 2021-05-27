import React from 'react';
import StClass from './StClass';
import {Route} from 'react-router-dom';
import StLogin from './StLogin';


const StudentHome = () => {
    return (
       <>
        <div>
         <h2>Student'sPage</h2>
        </div>
        <Route  exact path="/student/class">
        <StClass />
        </Route>
        <Route  exact path="/student/login">
        <StLogin />
        </Route>
       </>
    )
}
export default StudentHome