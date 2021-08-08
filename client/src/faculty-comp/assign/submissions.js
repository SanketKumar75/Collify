import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';
import pdf from '../../assets/pdf.png'


const Submissions = () => {
    const _id = localStorage.getItem("assign_id");
    const assign_url = localStorage.getItem("assign_url");
    const name = assign_url.substring(assign_url.lastIndexOf('/')+1);
    const [SubList, setSubList] = useState([])


    useEffect(() =>{
        fetch('/submissions',   {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                
             },
             body: JSON.stringify({
                 _id
             })
            }).then(res=> res.json())
            .then(result =>{
    
                setSubList(result)
                console.log(result)
            })
        }, [])

        const check = Object.keys(SubList).length;
                        if(!check)
                        {
                            return( <><div className=" h-25 w-100 text-info h3 mt-5  ml-10"><center>No Submissions Yet</center></div></>)
                        }

    
    return (
        <> 
        <div className="">
            
            <div className=" mt-2 card  col-md-8 offset-md-3  h-75 w-50 d-flex justify-content-between overflow-hidden">
            <Link  className="nav-link mb-0 text-dark "to={assign_url} target="_blank" rel="noopener noreferrer">
            <h5 className=" mb-1 card-header border rounded  row text-dark">Assignment</h5>
                
                <img className="mt-4 row-" herf={assign_url} src={pdf} alt="pdf" width="50" height="60"/>
                <h6 className="mt-2 text-dark ">{name}</h6>
                   
                </Link>
            </div>
           




            <div className=" card mt-2  col-md-8 offset-md-3  h-50 w-50 d-flex justify-content-between HeightCSS overflow-scroll ">
            <div className="card-header mt-1 border round width-CSS overflow-scroll ">Submissions</div>

                {
                    SubList.slice(0).reverse().map(item=>{

                        
                        const url = item.submit
                        const name = url.substring(url.lastIndexOf('/')+1);

                        
                        return(

                            <>
                                <div className="  h-25  mt-1  border-bottom overflow-scroll">
                                            <div className="row">
                                                <Link to={url} target="_blank" rel="noopener noreferrer">
                                            <img className=" ml-5 mt-1 row-"  src={pdf} alt="pdf" width="50" height="60" />
                                            </Link>
                                            <h6 className="col mt-4 offset-md-3 card-title">{item.name}</h6>
                                            <h6 className="col-2 mt-4 card-title">{item.email}</h6>
                                            </div>
                                    
                                            <Link className="nav-link" to={url} target="_blank" rel="noopener noreferrer">
                                    <p className="PdfName text-dark">{name}</p></Link>
                                    
                                </div>
                            </>

                        )
                    })
                }
                </div>
            </div>
        </>
    )
}
export default Submissions