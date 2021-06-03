import React, {useState} from 'react';
import axios from 'axios';
import Message from './Message'

//Whatelse here?
//1.verify the subject in database 
//2.then upload to that class
//3.then fetch and output all the notes
//4.Diedoing all this
const FacNotes = () => {

    const [file, setFile] = useState('');
    const [filename, setFilename] = useState('Choose file');
    const [uploadedFile, setUplaoadedFile] = useState({});
    const [message, setMessage] = useState('');
  //  const [uploadtodb, setUploadtoDB] = useState('')
    const onChange = e =>{
        setFile(e.target.files[0]);
        setFilename(e.target.file[0].name);
      //  const name = filename;
    }

   
    const onSubmit = async e =>{
        e.preventDefault();
        const formData = new FormData;
        formData.append('file', file);

        try{
                const res = await axios.post('/faculty/upload', formData, {
                    headers:{
                        'Content-Type': 'multipart/form-data'
                    }
                });
                const { filename, filepath } = res.data;

                setUplaoadedFile({ filename, filepath});
                console.log("Uploaded");
                setMessage('Notes Uploaded');
        }catch(err){
            if(err.response.status === 500){
                setMessage('There was a problem with the server');
            }
            else
            setMessage(err.response.data.msg);
            setMessage('No file was uploaded');


        }
    }

    //for database
/*    let name, value;
        const handleInput = (e) =>{
            console.log(e);
            name = e.target.name;
            value = e.target.value;
            
            setUploadtoDB({ ...uploadtodb, [name]:value});
        }
*/

    return (
      <>
            {message ?<Message msg = {message}/>: null}
            <h2>Upload </h2>
    
            
<div className="mt-4">
    <form onSubmit={onSubmit} >
        <input className="mt=5 mb-5" type="text" name="SubjectName" placeholder="Enter Subject Name" ></input>
  <input className="form-control" type="file" id="formFileMultiple" onChange={onChange}  />
  <input type="submit" value=" Upload" className=" btn mt-4"></input>
  </form>
</div>






        {uploadedFile ?<div className = "row mt-5">
            <div className="col-md-6 m-auto">

            <h3 className="text-center">{ uploadedFile.filename}</h3>

            <img style={{width: '100%'}} src={uploadedFile.filepath} alt="" ></img>
            </div>
            
        </div> :null}


       </>
    )
}
export default FacNotes 


//the preview part(65 ) isnt working.....