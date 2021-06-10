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

            if(res.status === 402 || !res){
                window.alert(`Invalid Registeration ${res.status}`);
                console.log("Invalid reghisteration");
            }
            else if(res.status === 422 )
            window.alert(`Invalid Registeration ${res.status}`);
            else if(res.status === 200){

            window.alert(`Yup Login succe3ssfull  ${res.status}`);
            console.log("Yup Login succe3ssfull ");
            history.push("/faculty")
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