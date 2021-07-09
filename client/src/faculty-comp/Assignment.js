import React, {useState, useEffect} from 'react';
import {Route} from 'react-router-dom';
import {NavLink} from 'react-router-dom';



const Assignment = () => {

    const [classData, setclassData] = useState({})


    const classObj = (localStorage.getItem("classObj"))
    const _id = (localStorage.getItem("classID"))
    console.log(classObj)
    console.log(_id)


    useEffect(() =>{
    fetch('/faculty/INclass',  {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer "+localStorage.getItem("jwt")
         },
         body: JSON.stringify({
             _id
         })
        }).then(res=> res.json())
        .then(result =>{

            setclassData(result)
            console.log(result)
        })
    }, [])



    return (
        <>
        <div>
        
            <div className="Options Content">
                   <NavLink className=" nav-link col text-secondry " to="/faculty/class"><div className="Option text-light"><h4>Class</h4></div></NavLink>
                   <NavLink className=" nav-link col text-secondry " to="/faculty/notes"><div className="Option text-light"><h4>Notes</h4></div></NavLink>
                   <NavLink className=" nav-link col text-secondry bg-light  border rounded " to="/faculty/assignment"><div className="Option text-dark"><h4>Assignment</h4></div></NavLink>
                   <NavLink className=" nav-link col text-secondry " to="/faculty/disscussion"><div className="Option text-light"><h4>Discussion</h4></div></NavLink>
                </div>
        </div>
        <center> <h2><h6>Subject</h6>{classData.subject}</h2></center>
        <div className="Content">
            
                <div className="w-50 h-100 ht border border-top-0 border-start-0 border-bottom-0 border-end-1 ">
                    
                    <h4 className="w-75 h-10">Create assignment for {classData.batch} batch</h4>
                    <div className=" mr-auto ml-auto mt-5 h-75 w-75 ">
                    <div class="row g-3 align-items-center">
                        
                        <div class="col-auto">
                            <label for="inputPassword6" class="col-form-label">Topic</label>
                        </div>
                        <div class="col-8">
                            <input type="text" id="" className="form-control" aria-describedby=""  placeholder="Topic for the assignment" />
                        </div>
                        <div class="col-auto
                        ">
                            
                        </div>
                        </div>
                        <br />                        <label for="inputPassword6" class="col-form-label">Due Time</label>
                        <input type="date"  className=" ml-2 col-form-control" aria-describedby="" />
                        <input type="time"  className=" ml-2 col-form-control" aria-describedby="" />
                        <div className="mb-3">
                  
                        <input className="form-control w-75 mr-auto ml-1 mt-2" type="file" id="formFile" />
                        </div>

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