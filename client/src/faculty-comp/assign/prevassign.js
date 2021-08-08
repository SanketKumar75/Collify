import React, {useState, useEffect} from 'react';
import {Route} from 'react-router-dom';

import {Link} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import pdf from '../../assets/pdf.png'
import Submissions from './submissions'

const PrevAssign = ( ) => {


    const [classData, setclassData] = useState({})
    const [assignList, setassignList] = useState([])

    localStorage.removeItem("assign_id")
    localStorage.removeItem("assign_url")

    const _id = (localStorage.getItem("classID"))
    
    
    useEffect(() =>{ 
        
        fetch("/getassignlist", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
             },
            body: JSON.stringify({
                _id
        })
    })
    .then(res=> res.json())
    .then(result=> {
        const List = result
        setassignList(result)
        
        // console.log(assignList)
        if(result.error){
            window.alert("Unable to fetch from server, try adain later")
            console.log("No response :(")
        }
        else{
            
            // window.alert("Assignment uploaded successfully")
            // window.location.reload();
        }

    }).catch(err=> {
        console.log(err)
        })
    }, [])

    return (
        <> 

        

            
            <div className="w-50 h-100 mt-2  border border-top-0 border-start-1 border-bottom-0 border-end-0">
                    <h5  className="ml-5"> Old assignments</h5>
                    
                        <div class="border rounded  border-1 border-info mr-auto ml-auto mt-5 h-75 w-75 bg-light overflow-auto">
                        <h6 className="ml-2"> previous assignments</h6>
                          
                        {
                            assignList.slice(0).reverse().map(item=>{

                            const url = item.assign
                            const name = url.substring(url.lastIndexOf('/')+1);


                                return(
                                    <>
                                    <div className= "mt-2 ml-2">
                                    <NavLink className="nav-link border-bottom" to= "/faculty/submission" onClick={()=>{localStorage.setItem("assign_id", item._id); localStorage.setItem("assign_url", url)}} >

                                    <div className="row  ">
                                    <img className="col-2 w-5 ml-3 mt-4 pdf"src={pdf} alt="pdf"  width="40" height="50"/>
                                    <h4 className=" col mt-3 ml-5 text-body ">{item.topic}</h4>
                                    </div>
                                    {/* <Link to={item.assign + "#toolbar=0"} className="" target="_blank" rel="noopener noreferrer">{name}</Link> */}
                                    <p className="ml-2 text-dark PdfName"> {name}</p>
                                    </NavLink>
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
export default PrevAssign