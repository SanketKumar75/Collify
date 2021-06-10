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
            <div className="Options Content">
                        
                   <NavLink className=" nav-link col text-secondary bg-light  border rounded" to="/faculty/class"><div className="Option text-dark"><h4>Class</h4></div></NavLink>
                   <NavLink className=" nav-link col text-secondary " to="/faculty/notes"><div className="Option text-light"><h4>Notes</h4></div></NavLink>
                   <NavLink className=" nav-link col text-secondry " to="/faculty/assignment"><div className="Option text-light"><h4>Assignment</h4></div></NavLink>
                   <NavLink className=" nav-link col text-secondry " to="/faculty/disscussion"><div className="Option text-light"><h4>Discussion</h4></div></NavLink>
                  

                </div>
        </div>
            <div className="Content row ml-2">
            <div className="h-25 w-50">
            <button type="button" className="col btn btn-primary h-50 w-75 mt-5 ml-5">Take Online Class</button>
            </div>
                
                <div className="mt-25 h-75 w-100 bg-secondary">

                    <h3>Recorded classes here</h3>

                </div>

            </div>
        </>
    )
}
export default FacClass

