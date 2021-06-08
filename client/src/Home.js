import React from 'react';
import {NavLink} from 'react-router-dom';
const Home = () => {
    return (
        <>
        <div >
            <h2>This is Home</h2>
        </div>
        <NavLink to ="/student">Student</NavLink>
        <br />
        <br />
        <NavLink to ="/faculty">Faculty</NavLink>
        </>


    )

}
export default Home