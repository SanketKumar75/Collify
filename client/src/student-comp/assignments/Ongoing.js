import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import pdf from '../../assets/pdf.png'


const Ongoing = () => {

    const [classData, setclassData] = useState({})

    //for upload
    const [tab, setTab] = useState("")
    const [time, setTime] = useState(new Date())
    const [file, setFile] = useState("")
    const [url, setUrl] = useState("")

    const classObj = (localStorage.getItem("classObj"))
    const class_id = (localStorage.getItem("classID"))
    const _id = (localStorage.getItem("ID"))
    console.log(class_id)

    // To check which class in 
    useEffect(() =>{
        fetch('/faculty/INclass',   {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer "+localStorage.getItem("jwt")
             },
             body: JSON.stringify({
                 class_id
             })
            }).then(res=> res.json())
            .then(result =>{
    
                setclassData(result)
                console.log(result)
            })
        }, [])







        //Submission Upload
    useEffect(()=>{
        if(url){
        fetch("/student/uploadsubmit", {
            method:"post",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                //assign_id,
                time, 
                url,
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
            setTime(new Date())
        // let filepath
        const data = new FormData()
        data.append("file", file)
        console.log(url)
        fetch("/student/upload/submission",{
            method: "post",
            body:data
        })
        .then(res=>res.json())
        .then(data=>{
            
             const filepath = data.filePath;
            setUrl(filepath);
            // localStorage.setItem("filepath", data.filePath)
            console.log(url)
            console.log(time)
        })
        .catch(err=>{
            console.log(err)
        })}




    return (
        <> 
            {/* <div class="border rounded  border-1 border-info mr-auto ml-auto mt-5 h-25 w-75 bg-light">
                    <h6 className="ml-2"> Ongoing assignment</h6>
                    <div className="">

                        <div className="d-flex justify-content-start test1">
                hehe
                        </div>
                        <div className="d-flex justify-content-end test2">
                not
                        </div>
                    
                    </div>
                    </div>   */}
                   <div class="card mr-auto ml-auto mt-2 h-30 w-75">
                    <div class="d-flex justify-content-between card-header">
                        Ongoing Assignment
                        <div className="">
                            Deadline:
                        </div>
                    </div>
                    <div className="card-body overflow-auto">
                            <Link className="nav-link border rounded">
                                <div className="row bd-highlight mb-0">
                                <img className=" ml-4  col-0 "src={pdf} alt="pdf" width="40" height="50"/>
                                
                                <h5 className="card-title ml-5 col-sm text2 text-dark">Special title treatment</h5>
                                </div>
                                <p className="PdfName mb-1  text-dark">Filw name here<br/></p>
                            </Link>

                                <div className="row ">
                                    <input className=" mt-2 ml-4 col-sm"
                                    onChange={(e)=>setFile(e.target.files[0])} 
                                    type="file"  
                                    id="formFile" 
                                    
                                    // onChange= {PostNotes, (e)=>{ e.preventDefault(); setfile(e.target.files[0])}}
                                    />
                                
                                        <button 
                                        type="button" 
                                        className=" ml-5 btn btn-primary mr-5 mt-2 "  
                                        onClick={(e)=> PostNotes(e)}>
                                            Submit
                                        </button>
                                </div>
                    </div>
                    
                    </div>
                    
        </>
    )
}
export default Ongoing