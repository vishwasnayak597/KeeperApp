
import React,{useState} from 'react';
import './App.css';
import Header from './Components/header';
import Footer from './Components/footer';
import Note from './Components/note';
import CreateArea from "./Components/Createarea";

function App() {
   const[notes,setNotes]=useState([])

  function addNote(note) {
    setNotes(prevNotes => {
      return [...prevNotes, note];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes =>{
     return prevNotes.filter((noteItem,index)=>{
        return index !== id;
      });
    })
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
     {notes.map((noteItem,index)=>{
         return (
         <Note
         id={index}
         title={noteItem.title}
         content={noteItem.content}
         onDelete={deleteNote} /> );
     })
     }
     
      <Footer />
    </div>
  );
}
  

export default App;


