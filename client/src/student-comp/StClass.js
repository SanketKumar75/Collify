import React, {useState, useEffect} from 'react';
import {Route} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import Video from '../Comp/Jisti'


const FacClass = (props) => {
    document.body.style = 'background: rgb(199, 179, 150);';


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
        


    // const GetClass = (e) =>{
    //     console.log("streaming video")
    //     return ( <Video/>)
    // }
    return (
        <>
        <div>
                    <div className="card-header bg-secondary border rounded d-flex justify-content-between">
                        
                        <div className="bg-dark rounded pl-2 pr-2 pt-2 mt-0">
                                <NavLink to="/student"><mat-icon class="material-icons large">first_page</mat-icon></NavLink>
                        </div >
                        <h5 className="mt-3 mb-0 mr-5">Subject: {classData.subject}</h5>
                        <h5 className="mt-3 mb-0 mr-5">Faculty: {classData.faculty}</h5>
                        <button className="bg-dark border rounded h-5  text-light"  > 
                            <NavLink className="nav-link text-light" to="/faculty/login" onClick={(e)=> {window.alert("Successfully logged out")}}>logout</NavLink></button>

                    </div> 
        <div className="Options Content">
                        
                   <NavLink className=" nav-link col text-secondary bg-light  border rounded" to="/student/class"><div className="Option text-dark"><h5>Class</h5></div></NavLink>
                   <NavLink className=" nav-link col text-secondary " to="/student/notes"><div className="Option text-light"><h5>Notes</h5></div></NavLink>
                   <NavLink className=" nav-link col text-secondry " to="/student/assignment"><div className="Option text-light"><h5>Assignment</h5></div></NavLink>
                   <NavLink className=" nav-link col text-secondry " to="/student/disscussion"><div className="Option text-light"><h5>Discussion</h5></div></NavLink>
                  

                </div>
        </div>
         
            <div className="Content ">
         
                
                <div className="mt-0  h-75 w-100  border rounded">

               
                    <Video className="float"/>
                </div>

            </div>
        </>
    )
}
export default FacClass

