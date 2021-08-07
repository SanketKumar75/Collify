import React, {useState, useEffect} from 'react';

import {Route} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import StprevNotes from './StprevNotes';







const Notes = () => {
    const [classData, setclassData] = useState({})


    const classObj = (localStorage.getItem("classObj"))
    const _id = (localStorage.getItem("classID"))
    



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

                    <div className="card-header bg-secondary border rounded d-flex justify-content-between">
                        
                        <div className="bg-dark rounded pl-2 pr-2 pt-2 mt-0">
                                <NavLink to="/student"><mat-icon class="material-icons large">first_page</mat-icon></NavLink>
                        </div >
                        <h5 className="mt-3 mb-0 mr-5">Subject: {classData.subject}</h5>
                        <h5 className="mt-3 mb-0 mr-5">Faculty: {classData.faculty}</h5>
                        <button className="bg-dark border rounded h-5  text-light" > <NavLink className="nav-link text-light" to="/student/login" >logout</NavLink></button>

                    </div>  
            
            <div className="Options Content">
                        
                <NavLink className=" nav-link col text-secondry " to="/student/class"><div className="Option text-light"><h4>Class</h4></div></NavLink>
                <NavLink className=" nav-link col text-secondry bg-light  border rounded" to="/student/notes"><div className="Option text-dark"><h4>Notes</h4></div></NavLink>
                <NavLink className=" nav-link col text-secondry " to="/student/assignment"><div className="Option text-light"><h4>Assignment</h4></div></NavLink>
                <NavLink className=" nav-link col text-secondry " to="/student/disscussion"><div className="Option text-light"><h4>Discussion</h4></div></NavLink>
                
     
                     </div>
        </div>
      
            <div className="Content ">


            <div className="w-30 h-100 mt-50 col-4">
                    <StprevNotes />               
                </div>


                <div className="w-80 h-100 bg-dark col">

                    <h3 className="w-auto h-90 bg-light">Write Your Notes here</h3>

                 
                </div>
                
            </div>
        </>
    )
}
export default Notes
