import React from 'react';
import {NavLink} from 'react-router-dom';


const StClass = () => {
    return (
        <>
        <div>
        <h2>InClass</h2>
        <div className="Options Content">
                    
               <NavLink className=" nav-link col text-secondary bg-light  border rounded" to="/student/class"><div className="Option text-dark"><h4>Class</h4></div></NavLink>
               <NavLink className=" nav-link col text-secondary " to="/student/notes"><div className="Option text-light"><h4>Notes</h4></div></NavLink>
               <NavLink className=" nav-link col text-secondry " to="/student/assignment"><div className="Option text-light"><h4>Assignment</h4></div></NavLink>
               <NavLink className=" nav-link col text-secondry " to="/student/disscussion"><div className="Option text-light"><h4>Discussion</h4></div></NavLink>
              

            </div>
    </div>
        <div className="Content row ml-2">
        <div className="h-25 w-50">
        <button type="button" className="col btn btn-primary h-50 w-75 mt-5 ml-5">Attend Online Class</button>
        </div>
            
            <div className="mt-25 h-75 w-100 bg-secondary">

                <h3>Recorded classes here</h3>

            </div>

        </div>
    </>
    )
}
export default StClass