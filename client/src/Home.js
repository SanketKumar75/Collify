import React from 'react';
import {NavLink} from 'react-router-dom';
const Home = () => {


    window.onunload = () => {
        // Clear the local storage
        window.MyStorage.clear()
     }
     
     document.body.style = 'background: #1DA1F2;';

    return (
        < >

        <div className="Background">
               <center> 
                   <h1 className="cursive mt-5 text-light ">Welcome to Collify </h1>
                   
                   <div className="comforta mt-3 text-warning pl-3">Collify is an E-Learning platform for students and faculties </div>
                   <div className="comforta text-warning p-2">With Collify you can- </div>
                 
                    <div className="smallFont text-secondary mt-0" > |Attend classes with built-in video-class feature|</div>
                    <div className="smallFont text-secondary mt-0">|Faculties can provide notes to the student|</div>
                    <div className="smallFont text-secondary mt-0">|Assignment can be created, submited and evaluated|</div>
                    <div className="smallFont text-secondary mt-0">|Clear doubt and have discussions|</div>
                   

                   
               </center>
            
            <div className="d-flex  justify-content-center ">
                <div className="Homepage-Container p-2 w-50  row ">
                        <div className=" mr-5 ml-3 justify-content-center rbackground-blue  p-2 ">
                            <h3>Student</h3>
                            <p>If you are a student you can </p>
                                    <div className=" ml-3 smallFont text-dark  mt-0" > 
                                    |Attend classes hosted by your faculty.|<br/>
                                    |Write down Important notes.|<br/>
                                    |Checkout notes provided by your faculty.|<br/>

                                    |Clear your doubts with the faculty.|<br/>

                                    </div>
                                <br/>
                            <div className="" >Click here to login as a student </div >
                        <NavLink  className="nav-link" to ="/student/login">
                        <h4 className="col mt-2 text-dark border border-light rounded p-3">Student</h4></NavLink>
                        </div>      
            
                        <div className="ml-3 justify-content-center  p-2">
                            <h3>Faculty</h3>
                            <p>If you are a faculty you can </p>
                                    <div className=" ml-3 smallFont text-dark  mt-0" > 
                                    |Host live-classes.|<br/>
                                    |Provide notes to the student.|<br/>
                                    |Create assignment.|<br/>
                                    |Evaluate submissions by students.|<br/>
                                    |Clear students doubt and have discussion with them.|<br/>

                                    </div>
                                <br/>
                            <div className="" >Click here to login as a faculty </div >
                        <NavLink className="nav-link" to ="/faculty/login">
                            <h4 className="p-3  border border-light rounded col mt-2  text-dark">Faculty</h4></NavLink>
                        </div>
            </div>
            </div>
        </div>
        </>


    )

}
export default Home