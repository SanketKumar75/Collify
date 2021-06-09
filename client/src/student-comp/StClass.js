import React from 'react';
import {NavLink} from 'react-router-dom';


const StClass = () => {
    return (
        <>
        <div>
            <h2>InClass</h2>
        </div>
            <div className="Content">

                <div className="Options">

                    <div className="Option"><h4>Class</h4></div>
                    <div className="Option"><h4>Notes</h4></div>
                    <div className="Option"><h4>Assignment</h4></div>
                    <div className="Option"><h4>Discussion</h4></div>

                </div>
                <div className="Class-Body"></div>

            </div>
        </>
    )
}
export default StClass