
import React, {useState, useEffect} from 'react';
import {Link, Route} from 'react-router-dom';

//child components
import FacClass from './FacClass';
import Notes from './Notes';
import Assignment from './Assignment';
import Discussion from './Disscussion';




const Subject = () => {
    document.body.style = 'background: rgb(199, 179, 150);';


    const localName = localStorage.getItem("name");
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
                // console.log(localName);
                // console.log(result.classes[2].faculty)
                // for(let i=0; i<data.length; i++){
                //     if(localName === result.classes[i].faculty)
                //     { setData(result.classes[i])}
                // }
                        //if(localName === result.classes.faculty)
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
                        
                        // const res = await fetch('/INclass', {
                        //     method: "POST",
                        //     headers: {
                        //         "Content-Type": "application/json",
                        //         "Authorization": "Bearer "+localStorage.getItem("jwt")
                        //     },
                        //     body: JSON.stringify({
                        //         item
                        //     })
                            
                        // });
                         }

                        if(item.faculty === localName)  
                        {        
                            const classObj = item;
                            return(
                                <>
                               
                                         
                                        
                                        <Link className="nav-link text-dark" to="/faculty/class" onClick={postData} >
                                        <div className="SubId text-dark">
                                        <div className="Details">
                                            <h6>{item.faculty}</h6>
                                                <br></br>
                                            <h6>{item.batch}</h6>
                        
                                        </div>
                                        <h4 className="subName">{item.subject}</h4>
                                        <div className="joinClass">
                                        <button className="btn btn-info text-light " onClick={postData}>Take Class</button>
                                        </div>
                                        </div>
                                        </Link>
                                       

                                </>
                                
                            )}
                    }
                    )
                }    
        </div>



    </>
    )
}
export default Subject