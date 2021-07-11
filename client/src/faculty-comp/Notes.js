import React, {useState, useEffect} from 'react';

import {Route} from 'react-router-dom';
import {NavLink} from 'react-router-dom';







const Notes = () => {
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