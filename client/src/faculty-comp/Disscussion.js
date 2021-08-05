import React, {useState, useEffect} from 'react';
import {Route} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import io from 'socket.io-client';



const socket = io()

const Discussion = () => {


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
        
        <div className="mt-1 mb-0 d-flex justify-content-between">
            <h5 className="mt-3 mb-0 ml-5">Subject: {classData.subject}</h5>  <h5 className="mt-3 mb-0 mr-5">Faculty: {classData.faculty}</h5>
                </div>
            <div className="Options Content">
                        
                        <NavLink className=" nav-link col text-secondry " to="/faculty/class"><div className="Option text-light"><h4>Class</h4></div></NavLink>
                        <NavLink className=" nav-link col text-secondry " to="/faculty/notes"><div className="Option text-light"><h4>Notes</h4></div></NavLink>
                        <NavLink className=" nav-link col text-secondry " to="/faculty/assignment"><div className="Option text-light"><h4>Assignment</h4></div></NavLink>
                        <NavLink className="nav-link col text-secondry bg-light  border rounded " to="/faculty/disscussion"><div className="Option text-dark"><h4>Discussion</h4></div></NavLink>
                       
     
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
                                 <p className="h-auto mt-3 ml-2 bottom-0 ">{item.message}</p>
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
                                                 <p className="h-auto mt-3 ml-2 bottom-0">{item.message}</p>
                                                </div>
                                            </div>
                                </>
                            )

                            })
                            }
                </div>

                        <div className=" mt-0">
                            <div class=" input-group mb-3 h-10">
                                    <input 
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