import React from 'react';

import {Route} from 'react-router-dom';
import {NavLink} from 'react-router-dom';

const Notes = () => {
    return (
        <>
        <div>
            <h2>InClass</h2>
            <div className="Options Content">
                        
                        <NavLink className=" nav-link col text-secondry " to="/faculty/class"><div className="Option text-light"><h4>Class</h4></div></NavLink>
                        <NavLink className=" nav-link col text-secondry bg-light  border rounded" to="/faculty/notes"><div className="Option text-dark"><h4>Notes</h4></div></NavLink>
                        <NavLink className=" nav-link col text-secondry " to="/faculty/assignment"><div className="Option text-light"><h4>Assignment</h4></div></NavLink>
                        <NavLink className=" nav-link col text-secondry " to="/faculty/disscussion"><div className="Option text-light"><h4>Discussion</h4></div></NavLink>
                       
     
                     </div>
        </div>
            <div className="Content">
                <div className="w-50 h-100 bg-light ">

                    <h3 className="w-75 h-50">Your Notes are here!!..</h3>

                    <div className=" mr-auto ml-auto mt-0 h-25 w-50 bg-light">
                    <button type="button" className="btn btn-primary mr-auto ml-auto h-50">Upload New Notes</button>
                    </div>
                 
                </div>
                <div className="w-50 h-100 mt-50">
                <h5  className="ml-5"> Previously Uploaded Notes Here...</h5>
                <div class="border rounded  border-1 border-info mr-auto ml-auto mt-5 h-75 w-75 bg-light">
                    <h6 className="ml-2"> here are your previously 
                     uploaded marks and stuff</h6>
                    </div>                
                </div>
            </div>
        </>
    )
}
export default Notes