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
                   <NavLink className=" nav-link col text-secondry " to="/student/class"><div className="Option text-light"><h4>Class</h4></div></NavLink>
                   <NavLink className=" nav-link col text-secondry " to="/student/notes"><div className="Option text-light"><h4>Notes</h4></div></NavLink>
                   <NavLink className=" nav-link col text-secondry bg-light  border rounded " to="/student/assignment"><div className="Option text-dark"><h4>Assignment</h4></div></NavLink>
                   <NavLink className=" nav-link col text-secondry " to="/student/disscussion"><div className="Option text-light"><h4>Discussion</h4></div></NavLink>
                </div>
        </div>
        <center> <h2><h6>Subject</h6>{classData.subject}</h2></center>
        <div className="Content row">
                
        <div class="border rounded  border-1 border-info mr-auto ml-auto mt-5 h-25 w-75 bg-light">
                    <h6 className="ml-2"> Ongoing assignment</h6>
                    </div>     
                <div className="w-100 h-100 mt-5  border border-top-0 border-start-1 border-bottom-0 border-end-0">
                    <div class="border rounded  border-1 border-info mr-auto ml-auto mt-2 h-50 w-75 bg-light">
                        <h6 className="ml-2"> previous assignments</h6>
                        </div>                
                    </div>
            </div>
        </>
    )
}
export default Assignment