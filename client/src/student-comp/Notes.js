import React, {useState, useEffect} from 'react';

import {Route} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import StprevNotes from './StprevNotes';







const Notes = () => {
    document.body.style = 'background: rgb(199, 179, 150);';

    const [classData, setclassData] = useState({})

    const [header, setheader] = useState("")
    const [mynote, setmynote] = useState("")
    const [mynotesList, setmynotesList] = useState([])



    const classObj = (localStorage.getItem("classObj"))
    const _id = (localStorage.getItem("classID"))
    const student_id = (localStorage.getItem("ID"))
    

    


const Style={
    style:"width: 18rem;"
}
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
            
        })
    }, [])

    useEffect(() => {
        fetch('/get-my-notes',{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                student_id
            })
        }).then(res => res.json())
        .then(result =>{
            setmynotesList(result)
            console.log(result)
            console.log(mynotesList)

        })

    }, [])





    const postNotes = async (e) =>{
        e.preventDefault();

            
             const res = await fetch('/upload-my-notes', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    student_id,
                    header,
                    mynote
                })
            });
            const data = await res.json();
            
            if(res.status === 402 || !data){
                window.alert(`Error while uploading ${res.status}`);
                console.log("Error while uploading");
            }
            else if(res.status === 422 || res.status === 422 )
            window.alert(`Error while uploading${res.status}`);
            else if(res.status === 200){

                console.log("Your notes have been saved");
                window.alert(`Your notes have been saved  ${res.status}`);
                window.location.reload()
            
            }
        }





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
                        
                <NavLink className=" nav-link col text-secondry " to="/student/class"><div className="Option text-light"><h5>Class</h5></div></NavLink>
                <NavLink className=" nav-link col text-secondry bg-light  border rounded" to="/student/notes"><div className="Option text-dark"><h5>Notes</h5></div></NavLink>
                <NavLink className=" nav-link col text-secondry " to="/student/assignment"><div className="Option text-light"><h5>Assignment</h5></div></NavLink>
                <NavLink className=" nav-link col text-secondry " to="/student/disscussion"><div className="Option text-light"><h5>Discussion</h5></div></NavLink>
                
     
                     </div>
        </div>
      
            <div className="Content ">


                <div className="w-40 h-100  col-5">
                    <StprevNotes />               
                </div>


                <div className="w-75 border rounded overflow-auto mynote-cards">

                    <h3 className=" mt-2 ml-5">Write new note</h3>

                    <input type="text"
                            name="header"
                            className=" w-75 offset-1 mt-5 mr-3 h-auto border  border-bottom-1 rounded " 
                            placeholder="Type the header here...."
                            value ={header}
                            onChange = { (e)=> setheader(e.target.value)}/>
                    <textarea className="break-line mt-0 w-75 offset-1 h-50 text-dark inputcss border rounded" 
                            type="text" 
                            name="nynote"
                            placeholder="Start typing your notes... " 
                            
                            value ={mynote}
                            onChange = { (e)=> setmynote(e.target.value)}/> 
                            {/* value={email}
                            onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Email Id" required               */}
                            <button className="btn btn-info col-3 mt-0 offset-1" 
                                    type="button"
                                    onClick={(e)=> {postNotes(e)}}>Save</button>
<br/>
<br/>
                            <h3 className="mt-5 ml-5 col">
                                   My previous notes
                            </h3>
                                        {

                                            mynotesList.slice(0).reverse().map(item =>{
                                                return(
                                            
                                                    <>
                                                    <div class=" mynote-cards card w-auto offset-2 mr-5 ml-2 mb-2 " >
                                                            <div className="card-header">{item.header}
                                                            </div>
                                                            <div class="card-body">
                                                            <p class="card-text smallFont break-line">{item.mynote}</p>
                                                        </div>
                                                    </div>
                                                    </>
                                            )
                                        })   
                                    }
                            
                </div>
                
            </div>
        </>
    )
}
export default Notes
