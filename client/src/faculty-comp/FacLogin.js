import React, { useState } from 'react';
import {Navlink, useHistory} from 'react-router-dom';


const StLogin = () => {

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

            window.alert(`Yup Login succe3ssfull  ${res.status}`);
            console.log("Yup Login succe3ssfull ");
            history.push("/faculty")
            }
        }


    return (
        <>
        <div className= "form col d-flex justify-content-center h-50 w-25">
                <form method="POST">
                    <input type="text" name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email Id" required />
                    <input type="Password" name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password" required /><br></br>
                    <button  onClick={postData}>Login</button>
                </form>
            </div>
        </>
    )
}
export default StLogin