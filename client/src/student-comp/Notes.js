import React from 'react';

import {Route} from 'react-router-dom';
import {NavLink} from 'react-router-dom';

const Notes = () => {
    return (
        <>
        <div>
            <h2>InClass</h2>
            <div className="Options Content">
                        
                <NavLink className=" nav-link col text-secondry " to="/student/class"><div className="Option text-light"><h4>Class</h4></div></NavLink>
                <NavLink className=" nav-link col text-secondry bg-light  border rounded" to="/student/notes"><div className="Option text-dark"><h4>Notes</h4></div></NavLink>
                <NavLink className=" nav-link col text-secondry " to="/student/assignment"><div className="Option text-light"><h4>Assignment</h4></div></NavLink>
                <NavLink className=" nav-link col text-secondry " to="/student/disscussion"><div className="Option text-light"><h4>Discussion</h4></div></NavLink>
                
     
                     </div>
        </div>
            <div className="Content col">


            <div className="w-30 h-100 mt-50 col-4">
                <h5  className="ml-5">Notes by Professor</h5>
                <div class="border rounded  border-1 border-info mr-auto ml-auto mt-5 h-75 w-75 bg-light">
                    <h6 className="ml-2"> Notes Provided by the facuty appears here</h6>
                    </div>                
                </div>


                <div className="w-100 h-100 bg-dark col">

                    <h3 className="w-100 h-90 bg-light">Write Your Notes here</h3>

                 
                </div>
                
            </div>
        </>
    )
}
export default Notes