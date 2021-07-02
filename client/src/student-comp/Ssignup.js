import React, { useState } from 'react';
import {Navlink, useHistory} from 'react-router-dom';

const Signup = () =>{

    const history = useHistory();
    const [user, setUser] = useState({
        name:"", email:"",batch:"", phone:"", password:"", cpassword:""
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

            const {name , email ,batch, phone , password } = user;
            const res = await fetch('/student-sign', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name, email,batch, phone, password
                })
            });
            const data = await res.json();

                if(res.status == 402 || res.status == 422 || !data){
                window.alert(`Invalid Registeration ${res.status}`);
                console.log("Invalid reghisteration");
                }
            else{
            window.alert("Yup SignedUP");
            console.log("Yup SignedUP");
            history.push("./login")
            }
        }

    return (
        <>
     <h3>Sign up</h3>
            <div className= "form col d-flex justify-content-center h-50 w-25">
                <form method="POST">
                <input type="name" name="name"
                value={user.name}
                onChange={handleInput}
                    placeholder="Userame" required />
                    <input type="email" name="email"
                    value={user.email}
                    onChange={handleInput}
                        placeholder="Email Id" required />
                    <input type="text" name="batch"
                    value={user.batch}
                    onChange={handleInput}
                        placeholder="Batch" required />
                    <input type="text" name="phone"
                    value={user.phone}
                    onChange={handleInput}
                        placeholder="Phone No" required />
                    <input type="Password" name="password"
                    value={user.password}
                    onChange={handleInput}
                        placeholder="Confirm Password" required /><br />
                    <button  onClick={postData}>Sign up</button>
                </form>
            </div>
        </>
    )
}
export default Signup