import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
    const host = "http://localhost:5000";
    const notesInitial = [];
    const [notes, setnotes] = useState(notesInitial);

    //fetch all note
    const fetchNotes = async () => {
        //TODO: API call
        const ajax = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIwNDFlODJlZDZhOGFhNTEwN2JkYWIzIn0sImlhdCI6MTY0NDc2MzI3M30.l3waqmqLQngrxSpsgzj9IQ-cGPSuzZhBXdyY6arbeQk',
            },
        });
        const json = await ajax.json();
        setnotes(json);

    }

    //add a note
    const addNote = async (title, description, tag) => {
        //TODO: API call
        const ajax = await fetch(`${host}/api/notes/addnote`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIwNDFlODJlZDZhOGFhNTEwN2JkYWIzIn0sImlhdCI6MTY0NDc2MzI3M30.l3waqmqLQngrxSpsgzj9IQ-cGPSuzZhBXdyY6arbeQk',
            },
            body: JSON.stringify({ title, description, tag })
        });

        const note = await ajax.json();

        setnotes(notes.concat(note))

    }

    //delete a note
    const deleteNote = async (id) => {
        const ajax = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIwNDFlODJlZDZhOGFhNTEwN2JkYWIzIn0sImlhdCI6MTY0NDc2MzI3M30.l3waqmqLQngrxSpsgzj9IQ-cGPSuzZhBXdyY6arbeQk',
            },
        });
        const json = ajax.json();

        const newNote = notes.filter((note) => {
            return note._id !== id;
        })
        setnotes(newNote);

    }

    //edit a note
    const editNote = async (id, title, description, tag) => {
        //define ajax function for using api call
        const ajax = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIwNDFlODJlZDZhOGFhNTEwN2JkYWIzIn0sImlhdCI6MTY0NDc2MzI3M30.l3waqmqLQngrxSpsgzj9IQ-cGPSuzZhBXdyY6arbeQk',
            },
            body: JSON.stringify({ title, description, tag })
        });

        const json = ajax.json();
        let newNotes = JSON.parse(JSON.stringify(notes));
        for (let index = 0; index < notes.length; index++) {
            const element = notes[index];
            if (element._id === id) {
                newNotes[index].title = title;
                newNotes[index].description = description;
                newNotes[index].tag = tag;
                break;
            }
        }
        setnotes(newNotes);
    }


    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, fetchNotes }}>
            {props.children}
        </NoteContext.Provider>
    )


}

export default NoteState;