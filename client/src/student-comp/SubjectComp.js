import React from 'react';
import {NavLink} from 'react-router-dom';



const Subject = () => {
    return (
        <>
        
        <div className="Subjects">
            <h2>InClass</h2>

            <NavLink className="nav-link" to="/student/class">
            <div className="SubId">
                <div className="Details">
                    <h6>Faculty Name</h6>
                        <br></br>
                    <h6>BAtch</h6>
 
                </div>
                <h4 className="subName">This is Subject 1;</h4>
                <div className="joinClass">
                <button >Attend Class</button>
                </div>
            </div></NavLink>

     
     <NavLink className="nav-link" to="/student/class">
         <div className="SubId">       
                <div className="Details">
                    <h6>Faculty Name</h6>
                        <br></br>
                    <h6>BAtch</h6>
 
                </div>
                <h4 className="subName">This is Subject 1;</h4>

                <div className="joinClass">
                    
                <button>Attend Class</button>
                </div>
            </div>
            </NavLink>
            <NavLink className="nav-link" to="/student/class">
             
            <div className="SubId">
                
                
                <div className="Details">
                    <h6>Faculty Name</h6>
                        <br></br>
                    <h6>BAtch</h6>
 
                </div>
                <h4 className="subName">This is Subject 1;</h4>

                <div className="joinClass">
                <button >Attend Class</button>
                </div>
            </div>
            </NavLink>
            <NavLink className="nav-link" to="/student/class">
             
            <div className="SubId">
                
                
                <div className="Details">
                    <h6>Faculty Name</h6>
                        <br></br>
                    <h6>BAtch</h6>
 
                </div>
                <h4 className="subName">This is Subject 1;</h4>

                <div className="joinClass">
                <button >Attend Class</button>
                </div>
            </div>
            </NavLink>
            
            
        </div>
    </>
    )
}
export default Subject