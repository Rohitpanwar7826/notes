import React,{useState} from 'react'
import {nanoid} from 'nanoid'
import NotesAPI from './NotesAPI';
const note_value={
    title: "",
    desc: ""
};
export default function AddNote(props) {
    
    const [note, setNote] = useState(note_value);
    
    const handleChange=(event)=>{
        setNote({...note,[event.target.name]:event.target.value});
    }  

    const handleSave=()=>
    {   

        if(note.title!=="" || note.desc!=="")
        {
            const confirmation = window.confirm("Arey sure to add this note on NoteList ?")
            if (confirmation)
            {
               props.handlerSetNotes(NotesAPI.saveNote(note,nanoid()))
               setNote(note_value)
            }
        }
        else{
            alert("Title or discription can't be empty..")
        }
    }
    const date = new Date();
    return (
        <div className="mx-auto container py-4 px-1 lg:w-1/2 md:w-1/1 sm:w-1/1">
            <div className=" card">
                <div className="rounded">
                    <div className={`w-full h-72 flex flex-col justify-between dark:bg-gray-800 bg-white dark:border-gray-700 rounded-lg border border-gray-400 mb-6 py-5 px-4`}>
                        <div>
                            <input onChange={handleChange} id="title" name="title" autoFocus className="text-gray-800 dark:text-gray-100 font-bold mb-3 bg-transparent  w-full p-1" value={note.title} />
                            <textarea onChange={handleChange} id="desc" name="desc" className="text-gray-800 dark:text-gray-100 text-sm w-full bg-transparent h-44 p-1" value={note.desc} />
                        </div>
                        <div>
                            <div className="flex items-center justify-between text-gray-800 dark:text-gray-100">
                                <p className="text-sm">{date.toLocaleDateString()}</p>

                                <h4 className="p-1 bg-blue-300 rounded-xl">Untitled  Note</h4>
                                <div className=" rounded-full bg-red-800 dark:bg-gray-100 dark:text-gray-800 text-white flex items-center justify-center">
                                   <button onClick={handleSave} className="p-1 px-2">Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
