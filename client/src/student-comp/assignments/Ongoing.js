import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import pdf from '../../assets/pdf.png'


const Ongoing = () => {
    return (
        <> 
            {/* <div class="border rounded  border-1 border-info mr-auto ml-auto mt-5 h-25 w-75 bg-light">
                    <h6 className="ml-2"> Ongoing assignment</h6>
                    <div className="">

                        <div className="d-flex justify-content-start test1">
                hehe
                        </div>
                        <div className="d-flex justify-content-end test2">
                not
                        </div>
                    
                    </div>
                    </div>   */}
                   <div class="card mr-auto ml-auto mt-2 h-30 w-75">
                    <div class="d-flex justify-content-between card-header">
                        Ongoing Assignment
                        <div className="">
                            Deadline:
                        </div>
                    </div>
                    <div className="card-body overflow-auto">
                            <Link className="nav-link border rounded">
                                <div className="row bd-highlight mb-0">
                                <img className=" ml-4  col-0 "src={pdf} alt="pdf" width="40" height="50"/>
                                
                                <h5 className="card-title ml-5 col-sm text2 text-dark">Special title treatment</h5>
                                </div>
                                <p className="PdfName mb-1  text-dark">Filw name here<br/></p>
                            </Link>

                                <div className="row ">
                                    <input className=" mt-2 ml-4 col-sm" 
                                    type="file"  
                                    // onChange= {PostNotes, (e)=>{ e.preventDefault(); setfile(e.target.files[0])}}
                                    />
                                
                                        <button type="button" className=" ml-5 btn btn-primary mr-5 mt-2 ">Submit</button>
                                </div>
                    </div>
                    
                    </div>
                    
        </>
    )
}
export default Ongoing