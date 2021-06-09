import React from 'react';
import {Route} from 'react-router-dom';
import {NavLink} from 'react-router-dom';


import Notes from './Notes';
import Assignment from './Assignment';
import Discussion from './Disscussion';


const FacClass = () => {
    return (
        <>
        <div>
            <h2>InClass</h2>
        </div>
            <div className="Content">

                <div className="Options">
                        
                   <NavLink className=" nav-link col text-secondry " to="/faculty/class"><div className="Option text-light"><h4>Class</h4></div></NavLink>
                   <NavLink className=" nav-link col text-secondry " to="/faculty/notes"><div className="Option text-light"><h4>Notes</h4></div></NavLink>
                   <NavLink className=" nav-link col text-secondry " to="/faculty/assignment"><div className="Option text-light"><h4>Assignment</h4></div></NavLink>
                   <NavLink className=" nav-link col text-secondry " to="/faculty/disscussion"><div className="Option text-light"><h4>Discussion</h4></div></NavLink>
                  

                </div>
                <div className="Class-Body">


                </div>

            </div>
        </>
    )
}
export default FacClass

