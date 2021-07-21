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
            
            <div className="Options Content">
                        
                <NavLink className=" nav-link col text-secondry " to="/student/class"><div className="Option text-light"><h4>Class</h4></div></NavLink>
                <NavLink className=" nav-link col text-secondry bg-light  border rounded" to="/student/notes"><div className="Option text-dark"><h4>Notes</h4></div></NavLink>
                <NavLink className=" nav-link col text-secondry " to="/student/assignment"><div className="Option text-light"><h4>Assignment</h4></div></NavLink>
                <NavLink className=" nav-link col text-secondry " to="/student/disscussion"><div className="Option text-light"><h4>Discussion</h4></div></NavLink>
                
     
                     </div>
        </div>
        <center> <h2><h6>Subject</h6>{classData.subject}</h2></center>
            <div className="Content col">


            <div className="w-30 h-100 mt-50 col-4">
                    <StprevNotes />               
                </div>


                <div className="w-100 h-100 bg-dark col">

                    <h3 className="w-100 h-90 bg-light">Write Your Notes here</h3>

                 
                </div>
                
            </div>
        </>
    )
}
export default Notes
