import React,{useState} from "react";
import './createarea.css';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';

function CreateArea(props) {
  //creating objets of note
  const[note,setNote] =useState({
    title:'',
    content:''
  });

  
  function handleChange(event) {
    const {name,value}= event.target;
    setNote(prevnote =>{
      return {
        ...prevnote,[name]: value
      }
    })
  
  }

  function submitNote(event){
    props.onAdd(note);
    //after submission reset
    setNote({
      title:'',
      content:''
    })
  //prevent default refresh
   event.preventDefault();
  }

  return (
    <div>
       <form className="create-note">
        <input onChange={handleChange} value={note.title} name="title" placeholder="Title" />
        <textarea onChange={handleChange} value={note.content} name="content" placeholder="Take a note..." rows="3" />
        <Fab onClick={submitNote}><AddIcon/></Fab>
      </form>
    </div>
  );
}

export default CreateArea;
