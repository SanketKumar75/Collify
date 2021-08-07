import React, { useState } from 'react';
import {NavLink} from 'react-router-dom';

import {Navlink, useHistory} from 'react-router-dom';
import sideimg from '../assets/20944201.jpg'

const StLogin = () => {
    document.body.style = 'background: #1DA1F2;';
    const history = useHistory();

    localStorage.clear()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');



        const postData = async (e) =>{
            e.preventDefault();

            
            const res = await fetch('/student-login', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email, password
                })
            });
            const data = await res.json();
            
            if(res.status === 402 || !data){
                window.alert(`Invalid Registeration ${res.status}`);
                console.log("Invalid reghisteration");
            }
            else if(res.status === 422 || res.status === 422 )
            window.alert(`Invalid Registeration ${res.status}`);
            else if(res.status === 200){

                localStorage.setItem("jwt", data.token)
                localStorage.setItem("email", data.studentLogin.email)
                localStorage.setItem("batch", data.studentLogin.batch)
                localStorage.setItem("ID", data.studentLogin._id)
                localStorage.setItem("name", data.studentLogin.name)
                localStorage.setItem("user", JSON.stringify(data))
            window.alert(`Yup Login succe3ssfull  ${res.status}`);
            console.log("Yup Login succe3ssfull ");
            history.push("/student")
            }
        }


    return (
        <>
      
        <div className=" form d-flex  justify-content-center ">
                <div className=" Homepage-Container p-2 w-50 row mt-5 ">
                
                        <div className=" mr-5 ml-5 justify-content-center col p-2 ">
                            <center><h2 className="text-light">Student Login</h2>
                            <NavLink to="/student/signup"> <p className="text-light smallFont mt-2">Dont have an account?</p></NavLink> </center>
                                <form className="col  " method="POST">
                                <input className="row text-light inputcss" type="text" name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Email Id" required />
                                <input className="row  text-light inputcss"  type="Password" name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Password" required />
                                    
                                <button className="Logbutton text-light" onClick={postData}>Login</button>
                                </form>
                                
                        </div>      
            
                            
                        <img className="mt-3 mr-2 border rounded justify-content-right col p-0  imagecss" src={sideimg} alt="login image"  width="auto" height="300" />

            </div>
            </div>
               
           
        </>
    )

}
export default StLogin