import React, {useState, useEffect} from 'react';

import {Route} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import PrevNotes from './PrevNotes';





const Notes = () => {
    document.body.style = 'background: rgb(199, 179, 150);';




    
    //There three are for Uploading notes
    const [title, settitle] = useState("")
    const [file, setfile] = useState("")
    const [url, seturl] = useState("")

    //This is for the getting the class object 
    const [classData, setclassData] = useState({})


    const classObj = (localStorage.getItem("classObj"))
    const _id = (localStorage.getItem("classID"))
    // console.log(classObj)
    console.log(_id)


    //fetching the class/subjects object from DB using the classID from the local storage
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



    //Notes Upload
    useEffect(()=>{
        if(url){
        fetch("/faculty/uploadnote", {
            method:"post",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title,
                url,
                _id
            })
        })
        .then(res=>res.json())
        .then(result=>{
            const data = result
            if(data.error){
                window.alert("Unable to upload to the server")
                console.log("No response from /faculty/uploadnote")
            }
            else{
                
                window.alert("Notes uploaded successfully")
                
            }
        })
        }
    }, [url])
    const PostNotes =()=>{
   
        
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
            seturl(filepath);
            // localStorage.setItem("filepath", data.filePath)
            console.log(filepath)
            console.log(url)
        })
        .catch(err=>{
            console.log(err)
        })
        
        //  const url = localStorage.getItem("filepath")
        //  localStorage.removeItem("filepath")
        
        
   
    }

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
                <NavLink className=" nav-link col text-secondry bg-light  border rounded" to="/faculty/notes"><div className="Option text-dark"><h5>Notes</h5></div></NavLink>
                <NavLink className=" nav-link col text-secondry " to="/faculty/assignment"><div className="Option text-light"><h5>Assignment</h5></div></NavLink>
                <NavLink className=" nav-link col text-secondry " to="/faculty/disscussion"><div className="Option text-light"><h5>Discussion</h5></div></NavLink>
                
     
                     </div>
        </div>
 
            <div className="Content">
                <div className="w-50 h-100 bg-light ">


                    <br/>
                    <center><h3 className="w-75 h-25"> Upload Notes for {classData.batch} batch</h3></center>
                    <br/>
                    <div className="mb-3">
                    <input type="text" 
                    className="form-control w-50 mr-auto ml-auto" 
                    placeholder="Title"
                    value={title}
                    onChange={(e)=>{e.preventDefault(); settitle(e.target.value)}}/>
                    <br/>

                    <input className="form-control w-75 mr-auto ml-auto" 
                    type="file"  
                    onChange= {PostNotes, (e)=>{ e.preventDefault(); setfile(e.target.files[0])}}
                    />
                    </div>

                    <div className=" mr-auto ml-auto mt-5 h-25 w-50 bg-light">
                    <button 
                    type="button" 
                    className="btn btn-primary mr-auto ml-auto h-50"
                    onClick={()=>PostNotes() }
                    >Upload Notes</button>
                    </div>
                    
                 
                </div>
                <div className="w-50 h-100 mt-50">
                <PrevNotes/>           
                </div>
            </div>
        </>
    )
}
export default Notes