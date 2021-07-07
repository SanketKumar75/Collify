


import React, {useState, useEffect} from 'react';
import {NavLink} from 'react-router-dom';



const Subject = () => {

    
    const localName = localStorage.getItem("name");
    
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
                console.log(localName);
                console.log(result.classes[2].faculty)
                // for(let i=0; i<data.length; i++){
                //     if(localName === result.classes[i].faculty)
                //     { setData(result.classes[i])}
                // }
                        //if(localName === result.classes.faculty)
                        setData(result.classes)
            })
    }, [])


    

    // const postData = async (e) =>{
    //     e.preventDefault();

        
    //     const res = await fetch('/INclass', {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //             "Authorization": "Bearer "+localStorage.getItem("jwt")
    //         },
    //         body: JSON.stringify({
                
    //         })
            
    //     });
    // }

    
    return (
        <>
        
        <div className="Subjects">
           
            <h2>InClass</h2>

            
                {
                    data.map(item=>{


                        if(item.faculty === localName)  
                    return(
                       
                          // key = {data.id}
                        <NavLink className="nav-link" to="/student/class" >
                        <div className="SubId">
                        <div className="Details">
                            <h6>{item.faculty}</h6>
                                <br></br>
                            <h6>{item.batch}</h6>
        
                        </div>
                        <h4 className="subName">{item.subject}</h4>
                        <div className="joinClass">
                        <button >Take Class</button>
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