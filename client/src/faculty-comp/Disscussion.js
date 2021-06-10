import React from 'react';

import {Route} from 'react-router-dom';
import {NavLink} from 'react-router-dom';

const Discussion = () => {
    return (
        <>
        <div>
            <h2>InClass</h2>
            <div className="Options Content">
                        
                        <NavLink className=" nav-link col text-secondry " to="/faculty/class"><div className="Option text-light"><h4>Class</h4></div></NavLink>
                        <NavLink className=" nav-link col text-secondry " to="/faculty/notes"><div className="Option text-light"><h4>Notes</h4></div></NavLink>
                        <NavLink className=" nav-link col text-secondry " to="/faculty/assignment"><div className="Option text-light"><h4>Assignment</h4></div></NavLink>
                        <NavLink className="nav-link col text-secondry bg-light  border rounded " to="/faculty/disscussion"><div className="Option text-dark"><h4>Discussion</h4></div></NavLink>
                       
     
                     </div>
        </div>
            <div className="Content">

                Your Discussion are here!!..

            </div>
        </>
    )
}
export default Discussion