import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import pdf from '../../assets/pdf.png'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Ongoing = () => {

    const [classData, setclassData] = useState([])
    //for upload
    const [tab, setTab] = useState("")
    const [time, setTime] = useState(new Date())
    const [file, setFile] = useState("")
    const [url, setUrl] = useState("")

    // localStorage.removeItem("assign_id")

    const classObj = (localStorage.getItem("classObj"))
    const class_id = (localStorage.getItem("classID"))
    const _id = (localStorage.getItem("ID"))
    const assign_id = (localStorage.getItem("assign_id"))

    
    console.log(class_id)
    console.log(assign_id)


    // get ongoing assignments 
    useEffect(() =>{
        fetch('/getongoingassign',   {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
             },
             body: JSON.stringify({
                 class_id
             })
            }).then(res=> res.json())
            .then(result =>{
    
                setclassData(result)
                console.log(classData)
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
                assign_id,
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
                localStorage.removeItem("assign_id")
                window.location.reload();
            }

        })
        
    }}, [url])


    const PostNotes =(e)=>{

        
        
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
        })
    // }
    // else{
    //     window.alert("The time for this assignment is exceeded, submissions no longer be accepted. Contact your faculty to find alternative way to submit")
    // }
    }


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

                    
                    const check = Object.keys(classData).length;
                    // console.log(check)
            
                    
                    
                    if(!check){
                        // console.log(check)
                        // message(" No new assignment for now!!")

                        return(
                            <>
                            
                            <div className=" h-25 w-100 text-info h3 mt-5  ml-10"><center>No assignment for now!</center></div>
                            </>
                        )
                       
                    }
                    
    return (
        <> 
        {/* <div className="w-100 h-100 mt-1 overflow-scroll"> */}
            <div className="card mr-auto ml-auto w-75 mt-2   overflowForCSS">
                    {
                        
                        classData.slice(0).reverse().map(item=>{
                            console.log(item)
                            const assign_id = item._id
                            
                            // const check = 
                            const currentTime = new Date();
                            const expireTime = new Date(item.due);
                            let time 
                            const minutes = (expireTime - currentTime) / (1000 * 60);
                            const at = minutes>60?" hr":" min";
                            const day = " days"
                            const attach = minutes>1440?day:at
                             if(minutes>1440){
                                const t = minutes/1440
                                time = t.toFixed(0)
                                const attach = "days"
                            }
                            else if(minutes>60){
                                const t  = minutes/60
                                time = t.toFixed(0)
                                 const attach = "hr"
                                 
                            }
                            else{
                                time = minutes.toFixed(0)
                                 const attach = "min"
                            }
                            console.log(minutes);

                            console.log(check)
                            const url = item.assign
                            const name = url.substring(url.lastIndexOf('/')+1);
                            
                        return(
                                    <div class="  h-100 w-100">
                                        <div class=" mb-1 d-flex justify-content-between card-header">
                                            Ongoing Assignment
                                            
                                                <div className="PdfName2">
                                                    Due: { time}{attach}
                                                </div>
                                                </div>
                                            <div className="card-body overflow-auto">
                                                <Link className="nav-link border rounded" to={url} target="_blank" rel="noopener noreferrer">
                                                    <div className="row bd-highlight mb-0">
                                                    <img className=" ml-4  col-0 "src={pdf} alt="pdf" width="40" height="50"/>
                                                    
                                                    <h5 className="card-title ml-5 col-sm text2 text-dark">{item.topic}</h5>
                                                    </div>
                                                    <p className="PdfName mb-1  text-dark">{name}<br/></p>
                                                </Link>


                                                    <div className="row ">
                                                       <h6 className=" ml-4 mt-3"> Submission: </h6>
                                                        <input className=" mt-2 ml-4 col-sm"
                                                        onChange={(e)=>setFile(e.target.files[0])} 
                                                        type="file"  
                                                        id="formFile" 
                                                        
                                                        // onChange= {PostNotes, (e)=>{ e.preventDefault(); setfile(e.target.files[0])}}
                                                        />
                                                    
                                                            <button 
                                                            type="button" 
                                                            className=" ml-5 btn btn-primary mr-5 mt-2 "  
                                                            onClick={(e)=> {PostNotes(e); localStorage.setItem("assign_id", item._id)}}>
                                                                Submit
                                                            </button>
                                                            
                                                    </div>
                                        </div>
                                        
                                        </div>
                            )
                        })
                    }
            </div> 
            {/* </div>         */}

        </>
    )
}
export default Ongoing

