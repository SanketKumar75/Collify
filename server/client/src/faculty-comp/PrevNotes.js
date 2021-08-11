import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import pdf from '../assets/pdf.png'


const PrevNotes = () => {

    const [classData, setclassData] = useState({})


    const classObj = (localStorage.getItem("classObj"))
    const _id = (localStorage.getItem("classID"))
    // console.log(classObj)
    console.log(_id)


    //fetching the class/subjects object from DB using the classID from the local storage
    useEffect( () =>{
    fetch('/faculty/INclass',  {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer "+localStorage.getItem("jwt")
         },
         body: JSON.stringify({
             _id
         })
        }).then(res=> res.json())
        .then(result =>{

            setclassData(result)
            console.log(result)
        })
    }, [])

    const [noteList, setnoteList] = useState([])
    useEffect( async () =>{
            const res = await fetch('/getnotes',{
                method: "post",
                headers: {
                    
                    "Content-Type":"application/json",
                    "Authorization": "Bearer "+localStorage.getItem("jwt")
                },
                body: JSON.stringify({
                    _id
                })
                
            })
            const data = await res.json();
                setnoteList(data)
                console.log(noteList)
            // .then(res=>res.json())
            // .then(result =>{
            //     console.log(result)
            //     // console.log(localName);
            //     // console.log(result.classes[2].faculty)
            //     // for(let i=0; i<data.length; i++){
            //     //     if(localName === result.classes[i].faculty)
            //     //     { setData(result.classes[i])}
            //     // }
            //             //if(localName === result.classes.faculty)
            //             setData(result.classes.notes)
            // })
    }, [])



    return(
        <>
        <br/>
                <h5  className="ml-5"> Previous Notes by Prof. {classData.faculty}</h5>
                <div class="border rounded  border-1 border-info mr-auto ml-auto mt-5 h-75 w-75 bg-light overflow-auto">
                    {
                        noteList.slice(0).reverse().map(item=>{

                            const url = item.note
                            const name = url.substring(url.lastIndexOf('/')+1);
                            
                            return(
                                <>
                                <Link className="nav-link border-bottom" to= {item.note + "#toolbar=0"} target="_blank" rel="noopener noreferrer">
                                <div className= "mt-2 ml-2">
                                <div className="row  ">
                                <img className="col-2 w-5 ml-3 pdf"src={pdf} alt="pdf" width="50" height="60"/>
                                <h4 className=" col mt-3 ml-5 text-body">{item.title}</h4>
                                </div>
                                <p className="ml-2 text-dark">{name}</p>
                                
                                
                                </div>   

                                </Link>


                                {/* <embed className="noSelect" src={item.note+ "#toolbar=0" } width="800px" height="2100px" >
                           
                                </embed> */}
                                

                                </>
                            )

                        })
                    }
                    </div> 
        </>
    )
}
export default PrevNotes