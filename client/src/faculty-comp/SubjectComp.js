import React, {useState, useEffect} from 'react';
import {NavLink} from 'react-router-dom';



const Subject = () => {

    const [data, setData] = useState([])
    useEffect(() =>{
            fetch('/allclass',{
                headers: {
                    "Content-Type":"application/json"
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
           
            <h2>InClass</h2>

            
                {
                    data.map(item=>{

                    return(
                       
                        <NavLink className="nav-link" to="/faculty/class">
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