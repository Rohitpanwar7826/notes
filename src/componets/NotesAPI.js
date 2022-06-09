class NotesAPI {
    static getCurrent() {
        let date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; 
        minutes = minutes < 10 ? '0'+minutes : minutes;
        let strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    }

    static getAllNotes() {
        let notes = JSON.parse(localStorage.getItem("user_notes") || `[]`);
        return notes;
    }

    static saveNote(note, id) {
        let notes = this.getAllNotes();
        const date = new Date();
        const newNote = {
            id: id,
            title: note.title,
            desc: note.desc,
            createdAt: this.getCurrent(),
            date: date.toLocaleDateString()
        }

        if (notes.length === 0) {

            notes.unshift(newNote);
            localStorage.setItem("user_notes", JSON.stringify(notes));
            return this.getAllNotes();
        }
        notes.unshift(newNote);
        localStorage.setItem("user_notes", JSON.stringify(notes));
        return this.getAllNotes();
    }
    static updateNotes(notes)
    {
        localStorage.setItem("user_notes", JSON.stringify(notes));
        return this.getAllNotes();
    }

    static deleteNotes(NoteId) {
        const allNotes=this.getAllNotes();
        const updatedNotes=allNotes.filter((note)=>
            note.id!==NoteId
        )
        return this.updateNotes(updatedNotes)
    }

}



export default NotesAPI;