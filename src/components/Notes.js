import React, { useContext, useEffect } from 'react';
import Notecontext from '../context/notes/NoteContext';
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";

const Notes = () => {
    const context = useContext(Notecontext);
    const { notes, fetchNotes } = context;
    useEffect(() => {
        fetchNotes();
    }, [])

    return (
        <>
            <AddNote />
            <div className="container row my-3">
                <h2>Your Notes</h2>
                {notes.map((note) => {
                    return <NoteItem key={note._id} note={note} />

                })}
            </div>
        </>
    )
}
export default Notes;

