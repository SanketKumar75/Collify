import React from 'react';
import FacClass from './FacClass';
import {Route} from 'react-router-dom';
import FacLogin from './FacLogin';
const FacultyHome = () => {
    return (
        <>
        <div>
            <h2>Paculty'sPage</h2>
        </div>
        <Route  exact path="/faculty/facultyClass">
        <FacClass />
        </Route>
        <Route  exact path="/faculty/facultyLogin">
        <FacLogin />
        </Route>

        </>
    )
}
export default FacultyHome