import React from 'react';
import FacClass from './FacClass';
import {Route} from 'react-router-dom';
import FacLogin from './FacLogin';
import Navbar from './FacultyHomePage';
import FacNotes from './notes';



const FacultyHome = () => {
    return (
        <>
        <Navbar />
        <div>
            <h2>Paculty'sPage</h2>
        </div>
        <Route  exact path="/faculty/class">
        <FacClass />
        </Route>
        <Route  exact path="/faculty/notes">
        <FacNotes/>
        </Route>
        <Route  exact path="/faculty/login">
        <FacLogin />
        </Route>

        </>
    )
}
export default FacultyHome