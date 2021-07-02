import React from 'react';
import FacClass from './FacClass';
import {Route} from 'react-router-dom';
import FacLogin from './FacLogin';
import Navbar from './FacultyHomePage';
import Signup from './Fsignup'
import Subject from './SubjectComp';
import Notes from './Notes';
import Assignment from './Assignment';
import Discussion from './Disscussion';


const FacultyHome = () => {
    return (
        <>
        <Navbar />
        <div>
            <h2>Faculty'sPage</h2>
        </div>
        <Route  exact path="/faculty">
        <Subject />
        </Route>
        <Route  exact path="/faculty/class">
        <FacClass />
        </Route>
        <Route  exact path="/faculty/login">
        <FacLogin />
        </Route>
        <Route path="/faculty/signup">
            <Signup />
        </Route>

        <Route  exact path="/faculty/notes">
        <Notes />
        </Route>
        <Route  exact path="/faculty/assignment">
        <Assignment />
        </Route>
        <Route path="/faculty/disscussion">
            <Discussion />
        </Route>
        </>
    )
}
export default FacultyHome