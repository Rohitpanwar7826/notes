import React from 'react'
import NotesApi from './NotesAPI'
const bgColor = ['bg-pink-300', 'bg-blue-200', 'bg-yellow-200', 'bg-green-300', 'bg-white']

export default function Note(props) {
  const handlerUpdateNote = (event) => {
    
    const noteId = event.target.id;

    const updatedNotes = [];

    props.userNotes.forEach((note) => {
      if (note.id === noteId) {
        if (event.target.name === "title") {
          note.title = event.target.value;
        }
        else {
          note.desc = event.target.value;
        }
      }
      updatedNotes.push(note);
    })

    props.handlerSetNotes(NotesApi.updateNotes(updatedNotes))
  }

  const handlerDelete=(event)=>{
    if(window.confirm("Are sure to delete this note ?")){
    props.handlerSetNotes(NotesApi.deleteNotes(event.target.id));}
  }

  var collectionNotes = props.userNotes.map((data) => (
    <div key={data.id} className="mx-auto container py-4 px-1 lg:w-1/2 md:w-1/1 sm:w-1/1">
      <div className="card hover:opacity-90">
        <div className="rounded">
          <div className={`w-full h-72 flex flex-col justify-between dark:bg-gray-800 ${bgColor[Math.floor(Math.random() * bgColor.length)]} dark:border-gray-700 rounded-lg border border-gray-400 mb-6 py-5 px-4`}>
            <div>
              <input onChange={handlerUpdateNote} id={data.id} name="title" className="text-gray-800 dark:text-gray-100 font-bold mb-3 bg-transparent  w-full p-1" value={data.title} />
              <textarea onChange={handlerUpdateNote} name="desc" id={data.id} className="text-gray-800 dark:text-gray-100 text-sm w-full bg-transparent h-44 p-1 " type="textarea" value={data.desc} />
            </div>
            <div>
              <div className="flex items-center justify-between text-gray-800 dark:text-gray-100">
                <p className="text-sm">Date: {data.date}</p>
                <p className="text-sm">Time: {data.createdAt} </p>
                <svg  xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 hover:bg-red-300" onClick={handlerDelete} id={data.id} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path  id={data.id} strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
         
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  ));

  return (
    <>
      {collectionNotes}
    </>
  )
}
