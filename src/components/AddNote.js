import React, { useContext, useState } from 'react';
import Notecontext from '../context/notes/NoteContext';

const AddNote = () => {
    const context = useContext(Notecontext);
    const { addNote } = context;

    const [note, setNote] = useState({title: "", description: "", tag: "General"})
    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
    }
    const onChange = (e) => {
        setNote({...note, [e.target.name]: e.target.value})

    }
    return (
        <>
            <h1>Add Note</h1>
            <form>
                <div className="mb-3">
                    <label htmlFor="note_title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="note_title" name="title" aria-describedby="emailHelp" placeholder="Note title" onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="note_description" className="form-label">Description</label>
                    <input type="text" className="form-control" id="note_description" name="description" placeholder="Note description" onChange={onChange} />
                </div>
                <button type="submit" onClick={handleClick} className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}

export default AddNote