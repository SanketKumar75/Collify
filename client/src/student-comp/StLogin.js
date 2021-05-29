import React, { useState } from 'react';
import {Navlink, useHistory} from 'react-router-dom';


const StLogin = () => {

    const history = useHistory();
    const [user, setUser] = useState({
        name:"", password:""
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

            const {email,  password} = user;
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

            if(data.status === 422 || !data){
                window.alert("Invalid Registeration");
                console.log("Invalid reghisteration");
            }
            else{
                //window.alert("Yup SignedUP");
            console.log("Yup SignedUP");
            history.push("/student")
            }
        }

    return (
        <>
        <div className= "form">
                <form method="POST">
                    <input type="email" name="email"
                    value={user.email}
                    onChange={handleInput}
                        placeholder="Email Id" required />
                    <input type="Password" name="password"
                    value={user.password}
                    onChange={handleInput}
                        placeholder="Password" required />
                    <button  onClick={postData}>Login</button>
                </form>
            </div>
        </>
    )
}
export default StLogin