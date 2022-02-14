import React, { useContext, useEffect, useRef, useState } from 'react';
import Notecontext from '../context/notes/NoteContext';
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";

const Notes = () => {
    const context = useContext(Notecontext);
    const { notes, fetchNotes, editNote } = context;
    useEffect(() => {
        fetchNotes();
        // eslint-disable-next-line
    }, []);

    const [note, setNote] = useState({ id: '', etitle: "", edescription: "", etag: "" })
    const ref = useRef(null);
    const refClose = useRef(null);

    const updateNote = (currentNote) => {
        setNote({ id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag });
        ref.current.click();
    }

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value });
    }
    const handleClick = (e) => {
        e.preventDefault();
        editNote(note.id, note.etitle, note.edescription, note.etag);
        setNote({ etitle: "", edescription: "", etag: "" });
        refClose.current.click();
    }


    return (
        <>
            <AddNote />
            <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch static backdrop modal
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="note_title" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="note_title" name="etitle" value={note.etitle} aria-describedby="emailHelp" placeholder="Note title" onChange={onChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="note_description" className="form-label">Description</label>
                                    <input type="text" className="form-control" id="note_description" name="edescription" value={note.edescription} placeholder="Note description" onChange={onChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="note_tag" className="form-label">Tage</label>
                                    <input type="text" className="form-control" id="note_tag" name="etag" value={note.etag} placeholder="Note tag" onChange={onChange} />
                                </div>
                                <button type="submit" onClick={handleClick} className="btn btn-primary">Save</button>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container row my-3">
                <h2>Your Notes</h2>
                {note.length === 0 && 'No notes to display'}
                {notes.map((note) => {
                    return <NoteItem key={note._id} updateNote={updateNote} note={note} />

                })}
            </div>
        </>
    )
}
export default Notes;

