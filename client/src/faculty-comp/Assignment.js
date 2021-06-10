import React from 'react';

import {Route} from 'react-router-dom';
import {NavLink} from 'react-router-dom';

const Assignment = () => {
    return (
        <>
        <div>
            <h2>InClass</h2>
            <div className="Options Content">
                        
                   <NavLink className=" nav-link col text-secondry " to="/faculty/class"><div className="Option text-light"><h4>Class</h4></div></NavLink>
                   <NavLink className=" nav-link col text-secondry " to="/faculty/notes"><div className="Option text-light"><h4>Notes</h4></div></NavLink>
                   <NavLink className=" nav-link col text-secondry bg-light  border rounded " to="/faculty/assignment"><div className="Option text-dark"><h4>Assignment</h4></div></NavLink>
                   <NavLink className=" nav-link col text-secondry " to="/faculty/disscussion"><div className="Option text-light"><h4>Discussion</h4></div></NavLink>
                  

                </div>
        </div>
        <div className="Content">
                <div className="w-50 h-100 ht border border-top-0 border-start-0 border-bottom-0 border-end-1 ">
                    
                    <h4 className="w-75 h-10">Create New Assignment Here!!..</h4>
                    <div className=" mr-auto ml-auto mt-5 h-75 w-75 ">
                    <div class="row g-3 align-items-center">
                        <div class="col-auto">
                            <label for="inputPassword6" class="col-form-label">Topic</label>
                        </div>
                        <div class="col-8">
                            <input type="text" id="" className="form-control" aria-describedby="" />
                        </div>
                        <div class="col-auto
                        ">
                            <span id="" className="form-text">
                            Topic for the assignment
                            </span>
                        </div>
                        </div>
                        <br /><br />
                        <label for="inputPassword6" class="col-form-label">Due Time</label>
                        <input type="date"  className=" ml-2 col-form-control" aria-describedby="" />
                        <input type="time"  className=" ml-2 col-form-control" aria-describedby="" />

                    <button type="button" className="col btn btn-primary ml-0 mt-5">Create Assignment</button>
                    </div>
                </div>





                <div className="w-50 h-100 mt-2  border border-top-0 border-start-1 border-bottom-0 border-end-0">
                <h5  className="ml-5"> Old assignments</h5>
                <div class="border rounded  border-1 border-info mr-auto ml-auto mt-5 h-75 w-75 bg-light">
                    <h6 className="ml-2"> previous assignments</h6>
                    </div>                
                </div>
            </div>
        </>
    )
}
export default Assignment