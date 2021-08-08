import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import pdf from '../../assets/pdf.png'


const PrevAssign = () => {

    const [classData, setclassData] = useState([])
    const classObj = (localStorage.getItem("classObj"))
    const _id = (localStorage.getItem("classID"))
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



    const [assign, setassign] = useState([])
    useEffect( async () =>{
            const res = await fetch('/getassigns',{
                method: "post",
                headers: {
                    
                    "Content-Type":"application/json",
                    
                },
                body: JSON.stringify({
                    _id
                })
                
            })
            const data = await res.json();
                setassign(data)
                console.log(assign)

            }, [])



    return (
        <> 
            <div className="w-100 h-100 mt-1 ">
                    <div class="border rounded  border-1 border mr-auto ml-auto mt-2 h-50 w-75 bg-light overflow-auto">
                        <h6 className="card-header"> previous assignments</h6>
                        {
                        assign.slice(0).reverse().map(item=>{

                            const url = item.assign
                            const name = url.substring(url.lastIndexOf('/')+1);
                            
                            return(
                                <>

                                <div className="col">
                                <Link className="nav-link border-bottom" to= {item.assign} target="_blank" rel="noopener noreferrer">
                                <h6 className="ml-auto text-dark w-70 d-flex justify-content-center col-11">{item.topic}</h6>

                                <div className= "mt-2 ml-0 col-1">
                                <img className=" ml-0 mr-auto d-flex justify-content-center  "src={pdf} alt="pdf" width="40" height="50"/>
                                <p className=" mt-1 ml-0 PdfName text-dark">{name}</p> 
                                </div>   


                                </Link>
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