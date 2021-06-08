import React, { useState } from 'react';
import {Navlink, useHistory} from 'react-router-dom';

const Signup = () =>{

    const history = useHistory();
    const [user, setUser] = useState({
        name:"", email:"", phone:"", password:""
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
            const res = await fetch('/student-sign', {
                method: "POST",
                header: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name, email, phone, password
                })
            });
            const data = await res.json();

                if(data.status == 422 || !data){
                window.alert("Invalid Registeration");
                console.log("Invalid reghisteration");
                }
            else{
                //window.alert("Yup SignedUP");
            console.log("Yup SignedUP");
            history.push("./login")
            }
        }

    return (
        <>
        ]<h3>Sign up</h3>
            <div className= "form">
                <form method="POST">
                <input type="name" name="name"
                value={user.name}
                onChange={handleInput}
                    placeholder="Userame" required />
                    <input type="email" name="email"
                    value={user.email}
                    onChange={handleInput}
                        placeholder="Email Id" required />
                    <input type="text" name="phone"
                    value={user.phone}
                    onChange={handleInput}
                        placeholder="Phone No" required />
                    <input type="Password" name="password"
                    value={user.password}
                    onChange={handleInput}
                        placeholder="Confirm Password" required />
                    <button  onClick={postData}>Sign up</button>
                </form>
            </div>
        </>
    )
}
export default Signup