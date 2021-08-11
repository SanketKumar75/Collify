import React, { useState } from 'react';
import {Navlink, useHistory} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import sideimg from '../assets/sign.png'

const Signup = () =>{
    document.body.style = 'background: #1DA1F2;';

    
    const history = useHistory();
    const [user, setUser] = useState({
        name:"", email:"", phone:"", password:"", cpassword:""
    });

    let name, value;
        const handleInput = (e) =>{
            console.log(e);
            name= e.target.name;
            value= e.target.value;

            setUser({ ...user, [name]: value});
        }

        const postData = async (e) =>{
            e.preventDefault();

            const {name , email , phone , password } = user;
            const res = await fetch('/faculty-sign', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name, email, phone, password
                })
            });
            const data = await res.json();

                if(res.status == 422 || res.status == 402 || !data){
                    window.alert(`Invalid Registeration ${res.status}`);
                console.log("Invalid reghisteration");
                }
            else{
            
                window.alert(`Yup SignedUP  ${res.status}`);
            console.log("Yup SignedUP");
            history.push("./login")
            }
        }

    return (
        <>
        <div className=" form d-flex  justify-content-center ">
        <div className=" Homepage-Container p-2 w-50 row mt-5 ">
        
            <div className=" mr-5 ml-5 justify-content-center col p-2 ">
            <center><h2 className="text-light">Faculty Signup</h2>
            <NavLink to="/faculty/login"> <p className="text-light smallFont mt-2">Already have an account?</p></NavLink> </center>
                            <form method="POST">
                            <input className="text-light"  type="name" name="name"
                            value={user.name}
                            onChange={handleInput}
                                placeholder="Name" required />

                            <input className="text-light"  type="email" name="email"
                            value={user.email}
                            onChange={handleInput}
                                placeholder="Email Id" required />

                                

                            <input className="text-light"  type="text" name="phone"
                            value={user.phone}
                            onChange={handleInput}
                                placeholder="Phone No" required />

                            <input className="text-light"  type="Password" name="password"
                            value={user.password}
                            onChange={handleInput}
                                placeholder=" Password" required /><br />
                            <button className="Logbutton text-light"  onClick={postData}>Sign up</button>
                        </form>

            </div>      
            
                        
                        <img className="mt-3 mr-2 border rounded justify-content-right col p-0  imagecss" src={sideimg} alt="login image"  width="auto" height="350" />
                            

            </div>
            </div>
        </>
    )
}
export default Signup
