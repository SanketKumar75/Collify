import React, {useState, useEffect} from 'react';
import {Route} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import io from 'socket.io-client';


const socket = io()

const Discussion = () => {
    document.body.style = 'background: rgb(199, 179, 150);';


    const [classData, setclassData] = useState({})
    const [ message, setMessage] = useState("")
    const [ msgObj, setMsgObj] = useState([])
    const [prevMsg, setPrevMsg] = useState([])
    const dataObj=[]


    const classObj = (localStorage.getItem("classObj"))
    const _id = (localStorage.getItem("classID"))

    //for discussion name
    const name = (localStorage.getItem("name"))
        // console.log(name)
        // console.log(_id)


                    useEffect(() =>{
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
                            // console.log(result)
                        })
                    }, [])


    const sendmessage= (e)=>{
        e.preventDefault()
        // console.log(message)
        const data = {user: name, message: message}
        // dataObj.push(data)
        setMsgObj(msgObj =>  [...msgObj, data])
        socket.emit('message', data)
    }

    socket.on('message', (data)=>{
        
        // setMsgObj(msg=>{[...msgObj, data]})
        // dataObj.push(data)
        setMsgObj([...msgObj, data])
    })
    // socket.off('MY_EVENT', doThisOnlyOnce).on('MY_EVENT', doThisOnlyOnce);

    return (
        <>
        <div>
        
                            <div className="card-header bg-secondary border rounded d-flex justify-content-between">
                        
                            <div className="bg-dark rounded pl-2 pr-2 pt-2 mt-0">
                                    <NavLink to="/faculty"><mat-icon class="material-icons large">first_page</mat-icon></NavLink>
                            </div >
                            <h5 className="mt-3 mb-0 mr-5">Subject: {classData.subject}</h5>
                            <h5 className="mt-3 mb-0 mr-5">Faculty: {classData.faculty}</h5>
                            <button className="bg-dark border rounded h-5  text-light"  > 
                            <NavLink className="nav-link text-light" to="/faculty/login" onClick={(e)=> {window.alert("Successfully logged out")}}>logout</NavLink></button>

                        </div>  
            <div className="Options Content">
                        
                        <NavLink className=" nav-link col text-secondry " to="/faculty/class"><div className="Option text-light"><h5>Class</h5></div></NavLink>
                        <NavLink className=" nav-link col text-secondry " to="/faculty/notes"><div className="Option text-light"><h5>Notes</h5></div></NavLink>
                        <NavLink className=" nav-link col text-secondry " to="/faculty/assignment"><div className="Option text-light"><h5>Assignment</h5></div></NavLink>
                        <NavLink className="nav-link col text-secondry bg-light  border rounded " to="/faculty/disscussion"><div className="Option text-dark"><h5>Discussion</h5></div></NavLink>
                       
     
                     </div>
        </div>
        
            <div className="Content">

                
                <div className="  w-50 h-80 mt-3 mb-3 offset-md-3  border rounded">
                    


                    {/* <div className=" messagebox mt-auto p-2 ">
                        <input className=" " type="text"></input>
                        <button className=" " type=" submit">Send</button>
                    </div> */}
                    
                           
                    <div className=" col border rounded w-100 sendbox overflow-auto">
                    { 
                        msgObj.map(item=> {
                             console.log(item)

                            if(item.user === name){
                            return(
                                <>
                                            
                                            
                        <div className="col-7 mb-1 mr-0 mt-1  h-auto  sendermessagebox bg-success text-light">
                        <div className="sender mt-0 ml-2 float-right mr-2" >{item.user}</div>
                            <div  className="ml-1 ">
                                 <p className="h-auto mt-3 ml-2 bottom-0 break-line">{item.message}</p>
                            </div>
                        </div>
                       
                        </>
                    
                            )}
                            else 
                            return(
                                <>
                                    <div className=" col-7 mb-1 ml-0 mt-1 h-auto float-left  messagebox bg-info text-light ">
                                                
                                            <div className="NOtsender mt-0 ml-2 ">{item.user}</div>
                                                <div  className="ml-1">
                                                 <p className="h-auto mt-3 ml-2 bottom-0 break-line">{item.message}</p>
                                                </div>
                                            </div>
                                </>
                            )

                            })
                            }
                </div>

                        <div className=" mt-0">
                            <div class=" input-group mb-3 h-10">
                                    <textarea 
                                    type="text" 
                                    class="form-control textareaCSS" 
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder="Type your message here" 
                                    aria-label="Recipient's username" 
                                    aria-describedby="basic-addon2" />
                            <div class="input-group-append">
                                <button 
                                    class="btn btn-outline-secondary bg-success text-light" 
                                    type="button"
                                    onClick={(e)=>{ sendmessage(e)}}
                                    >Send</button>
                            </div>
                        </div>
                        </div>
                    
                </div>

            </div>
        </>
    )
}
export default Discussion