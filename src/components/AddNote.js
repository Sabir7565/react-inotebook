import React, { useContext, useState } from 'react';
import Notecontext from '../context/notes/NoteContext';

const AddNote = (props) => {
    const context = useContext(Notecontext);
    const { addNote } = context;

    const [note, setNote] = useState({ title: "", description: "", tag: "" });
    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNote({ title: "", description: "", tag: "" });
        props.alert('Note added successfully', 'success');
    }
    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value });
    }
    return (
        <>
            <h1>Add Note</h1>
            <form>
                <div className="mb-3">
                    <label htmlFor="note_title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="note_title" name="title" value={note.title} aria-describedby="emailHelp" placeholder="Note title" onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="note_description" className="form-label">Description</label>
                    <input type="text" className="form-control" id="note_description" name="description" value={note.description} placeholder="Note description" onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="note_tag" className="form-label">Tage</label>
                    <input type="text" className="form-control" id="note_tag" name="tag" value={note.tag} placeholder="Note tag" onChange={onChange} />
                </div>
                <button type="submit" onClick={handleClick} className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}

export default AddNote