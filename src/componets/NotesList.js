import React,{useState,useEffect} from 'react';
import NotesAPI from './NotesAPI';
import AddNote from './AddNote';
import Note from "./Note";
import './Note.css'


export default function NotesList() {
  const [notes, setNotes] = useState([])
  
  useEffect(() => {
   setNotes(NotesAPI.getAllNotes());
  }, [])
  

  
  return (
    <div className="w-full flex flex-wrap p-4">
      < AddNote handlerSetNotes={setNotes} />
      < Note userNotes={notes} handlerSetNotes={setNotes}/>
    </div >
  )
}
