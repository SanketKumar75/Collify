import React, {useState, useEffect} from 'react';
import {Route} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";
import Calender from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import PrevAssign from './assign/prevassign';

const Assignment = () => {
    document.body.style = 'background: rgb(199, 179, 150);';


    const [classData, setclassData] = useState({})

    //for upload
    const [topic, setTopic] = useState("")
    const [date, setDate] = useState(new Date())
    const [file, setFile] = useState("")
    const [url, setUrl] = useState("")

    //local storge for ID
    const classObj = (localStorage.getItem("classObj"))
    const _id = (localStorage.getItem("classID"))
    console.log(_id)

    useEffect(() =>{
    fetch('/faculty/INclass',   {
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






    const changeDate = (e) => {
        setDate(e)
      }
    //Assignment Upload
    useEffect(()=>{
        if(url){
        fetch("/faculty/uploadassign", {
            method:"post",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                topic, 
                date, url,
                _id
            })
        })
        .then(res=>res.json())
        .then(result=>{
            const data = result
            if(data.error){
                window.alert("Unable to upload to the server")
                console.log("No response from /faculty/uploadassignment")
            }
            else{
                
                window.alert("Assignment uploaded successfully")
                window.location.reload();
            }

        })
        
    }}, [url])
    
   
    const PostNotes =(e)=>{
        e.preventDefault()
        // let filepath
        const data = new FormData()
        data.append("file", file)
        fetch("/faculty/upload",{
            method: "post",
            body:data
        })
        .then(res=>res.json())
        .then(data=>{
            
             const filepath = data.filePath;
            setUrl(filepath);
            // localStorage.setItem("filepath", data.filePath)
            console.log(url)
            console.log(date)
        })
        .catch(err=>{
            console.log(err)
        })}


        
    

    return (
        <>
        <div>

                    <div className="card-header bg-secondary border rounded d-flex justify-content-between">
                        
                        <div className="bg-dark rounded pl-2 pr-2 pt-2 mt-0">
                                <NavLink to="/faculty"><mat-icon class="material-icons large">first_page</mat-icon></NavLink>
                        </div >
                        <h5 className="mt-3 mb-0 mr-5">Subject: {classData.subject}</h5>
                        <h5 className="mt-3 mb-0 mr-5">Faculty: {classData.faculty}</h5>
                        <button className="bg-dark border rounded h-5  text-light"  > 
                            <NavLink className="nav-link text-light" to="/faculty/login" onClick={(e)=> {window.alert("Successfully logged out")}}>logout</NavLink></button>

                    </div>  
            <div className="Options Content">
                   <NavLink className=" nav-link col text-secondry " to="/faculty/class"><div className="Option text-light"><h5>Class</h5></div></NavLink>
                   <NavLink className=" nav-link col text-secondry " to="/faculty/notes"><div className="Option text-light"><h5>Notes</h5></div></NavLink>
                   <NavLink className=" nav-link col text-secondry bg-light  border rounded " to="/faculty/assignment"><div className="Option text-dark"><h5>Assignment</h5></div></NavLink>
                   <NavLink className=" nav-link col text-secondry " to="/faculty/disscussion"><div className="Option text-light"><h5>Discussion</h5></div></NavLink>
                </div>
        </div>
      
        <div className="Content">
            
                <div className="w-50 h-100 ht border border-top-0 border-start-0 border-bottom-0 border-end-1 ">
                    
                    <h4 className="w-75 h-10">Create assignment for {classData.batch} batch</h4>
                    <div className=" mr-auto ml-auto mt-5 h-75 w-75 ">
                    <div class="row g-3 align-items-center">
                        
                        <div class="col-auto">
                            <label for="inputPassword6" class="col-form-label">Topic</label>
                        </div>
                        <div class="col-8">
                            <input 
                            type="text" id="" name="topic"
                            className="form-control"
                             value={topic}
                             onChange={(e)=> setTopic(e.target.value)}
                              aria-describedby=""  placeholder="Topic for the assignment" />
                        </div>
                        </div>
                        <br /> 

                        <div className="col-5">                       
                        <label for="inputPassword" class="col-form-label">Due Time</label>
                        </div>

                        <div className="col-auto">
                         {/* <Datetime
                            className=""
                            name="date"
                            dateFormat="DD-MM-21"
                            initialViewDate= {new Date()} 
                            value={date}
                            onChange={(e)=> setDate(e.target.date)}
                         /> */}
                         <Datetime 
                         className="h-50 w-50" 
                         initialViewMode="time"
                         value={date}
                        onChange={changeDate}
                         />
                         </div>

                        <div className="mb-3">
                        <input className="form-control w-75 mr-auto ml-1 mt-2 calander" 
                        
                         onChange={(e)=>setFile(e.target.files[0])}
                          type="file" id="formFile" />
                        </div>

                    <button type="button" onClick={(e)=> PostNotes(e)} className="col btn btn-primary ml-0 mt-5">Create Assignment</button>
                    </div>
                </div>

                    <PrevAssign />
            </div>
        </>
    )
}
export default Assignment