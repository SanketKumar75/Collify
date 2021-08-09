import React, {useState, useEffect} from 'react';
import {NavLink} from 'react-router-dom';



const Subject = () => {
    document.body.style = 'background: rgb(199, 179, 150);';


    const localBatch = localStorage.getItem("batch")
    localStorage.removeItem("classID")
    localStorage.removeItem("classObj")

    const [data, setData] = useState([])
    useEffect(() =>{
            fetch('/allclass',{
                headers: {
                    
                    "Content-Type":"application/json",
                    "Authorization": "Bearer "+localStorage.getItem("jwt")
                }
            }).then(res=>res.json())
            .then(result =>{
                console.log(result)
                setData(result.classes)
            })
    }, [])

    
    


    return (
        <>
        
        <div className="Subjects">
           
            <h2>Enrolled class</h2>

            
                {
                    data.map(item=>{
                        const postData = async (e) =>{
                            localStorage.setItem("classID", item._id)
                            localStorage.setItem("classObj", JSON.stringify(item))

                            console.log(item)
                        }

                        if(item.batch === localBatch) 
                    return(
                       
                         
                        <NavLink className="nav-link" to="/student/class" onClick={postData}>
                        <div className="SubId text-light">
                        <div className="Details">
                        <h6>Batch:  {item.batch}</h6>
                                <br></br>
                            <h6>By {item.faculty}</h6>
        
                        </div>
                        <h4 className="subName"> <h6>Subject:</h6> {item.subject}</h4>
                        <div className="joinClass ">
                        <button className="btn btn-info text-light " onClick={postData}>Join Class</button>
                        </div>
                        </div>
                        </NavLink>
                        
                    )
                    }
                    )
                }
                
            
           
            
                

            
        </div>
    </>
    )
}
export default Subject
