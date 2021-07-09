import React, {useState, useEffect} from 'react';

import {Route} from 'react-router-dom';
import {NavLink} from 'react-router-dom';







const Notes = () => {
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
                <NavLink className=" nav-link col text-secondry bg-light  border rounded" to="/faculty/notes"><div className="Option text-dark"><h4>Notes</h4></div></NavLink>
                <NavLink className=" nav-link col text-secondry " to="/faculty/assignment"><div className="Option text-light"><h4>Assignment</h4></div></NavLink>
                <NavLink className=" nav-link col text-secondry " to="/faculty/disscussion"><div className="Option text-light"><h4>Discussion</h4></div></NavLink>
                
     
                     </div>
        </div>
        <center> <h2><h6>Subject</h6>{classData.subject}</h2></center>
            <div className="Content">
                <div className="w-50 h-100 bg-light ">


                    <br/>
                    <center><h3 className="w-75 h-25"> Upload Notes for {classData.batch} batch</h3></center>
                    <br/>
                    <div className="mb-3">
                  
                    <input className="form-control w-75 mr-auto ml-auto" type="file" id="formFile" />
                    </div>

                    <div className=" mr-auto ml-auto mt-5 h-25 w-50 bg-light">
                    <button type="button" className="btn btn-primary mr-auto ml-auto h-50">Upload New Notes</button>
                    </div>
                 
                </div>
                <div className="w-50 h-100 mt-50">
                <br/>
                <h5  className="ml-5"> Previous Notes by Prof. {classData.faculty}</h5>
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