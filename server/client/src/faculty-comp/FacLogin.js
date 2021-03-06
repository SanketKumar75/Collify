import React, { useState } from 'react';
import {NavLink} from 'react-router-dom';

import {Navlink, useHistory} from 'react-router-dom';
import sideimg from '../assets/20944201.jpg'


const FacLogin = () => {
    localStorage.clear()
    document.body.style = 'background: #1DA1F2;';


    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');




        const postData = async (e) =>{
            e.preventDefault();

        
            const res = await fetch('/faculty-login', {
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
            else if(res.status === 422 )
            window.alert(`Invalid Registeration ${res.status}`);
            else if(res.status === 200){

                localStorage.setItem("jwt", data.token)
                localStorage.setItem("name", data.facultyLogin.name)
                localStorage.setItem("email", data.facultyLogin.email)
                localStorage.setItem("ID", data.facultyLogin._id)
                localStorage.setItem("user", JSON.stringify(data))
                window.alert(`Yup Login succe3ssfull  ${res.status}`);
                console.log("Yup Login succe3ssfull ");
                history.push("/faculty")
            }
        }


    return (
        <>
        <div className=" form d-flex  justify-content-center ">
                <div className=" Homepage-Container p-2 w-50 row mt-5 ">
                
                        <div className=" mr-5 ml-5 justify-content-center col p-2 ">
                            <center><h2 className="text-light ">Faculty Login</h2>
                            {/* <NavLink to="/faculty/signup"> <p className="text-light smallFont mt-2">Dont have an account?</p></NavLink> */}
                            <p className="text-light smallFont mt-2">If you dont know the password for login, contract admin block</p>

                             </center>
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

            <center><div className="text-light smallFont">Bheetar pravesh karne ke lie <br/>
            albert@collify,  cvraman@collify ya srinivasramanujan@collify<br/> 
            inme se kisi email ka prayas kare.<br/>
            Aur passward ke lie national wifi password ka istamaal kare. 
            <br/><br/>Dhanyavaad</div></center>

        </>
    )
}
export default FacLogin