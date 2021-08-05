import React from 'react';

import {Route} from 'react-router-dom';
import FacLogin from './FacLogin';
import Navbar from './FacultyHomePage';
import Signup from './Fsignup'
import Subject from './SubjectComp';
//If needed any time
import FacClass from './FacClass';
import Notes from './Notes';
import Assignment from './Assignment';
import Discussion from './Disscussion';
import Submissions from './assign/submissions';
import Video from '../Comp/Jisti'

const FacultyHome = () => {


    

    return (
        <>
        
{/* Some thing to fill */}
        <Route  exact path="/faculty">
        <Subject />
        </Route>
        <Route  exact path="/faculty/login">
        <FacLogin />
        </Route>
        <Route path="/faculty/signup">
            <Signup />
        </Route>
        <Route  exact path="/faculty/class">
        <FacClass />
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
        <Route  exact path="/faculty/submission">
        <Submissions />
        </Route>
        <Route  exact path="/faculty/online">
        <Video />
        </Route>
        
        


        </>
    )
}
export default FacultyHome