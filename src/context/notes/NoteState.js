import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
    const host = "http://localhost:5000";
    const notesInitial = [];
    const [notes, setnotes] = useState(notesInitial);

    //fetch all note
    const fetchNotes = async() => {
          //TODO: API call
          const ajax = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: "get",
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIwNDFlODJlZDZhOGFhNTEwN2JkYWIzIn0sImlhdCI6MTY0NDc2MzI3M30.l3waqmqLQngrxSpsgzj9IQ-cGPSuzZhBXdyY6arbeQk',
            },
        });
        const json = await ajax.json();
        console.log(json);
        setnotes(json);

    }

    //add a note
    const addNote = async (title, description, tag) => {
        //TODO: API call
        const ajax = await fetch(`${host}/api/notes/addnote`, {
            method: "post",
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIwNDFlODJlZDZhOGFhNTEwN2JkYWIzIn0sImlhdCI6MTY0NDc2MzI3M30.l3waqmqLQngrxSpsgzj9IQ-cGPSuzZhBXdyY6arbeQk',
            },
            body: JSON.stringify({ title, description, tag })
        });

        const json = ajax.json();

        const note = {
            "_id": "61f824e0e965bfcad2ee3602cca",
            "user": "62041e82ed6a8aa5107bdab3",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2022-01-31T18:44:30.865Z",
            "__v": 0
        };
        setnotes(notes.concat(note))

    }

    //delete a note
    const deleteNote = (id) => {
        const newNote = notes.filter((note) => {
            return note._id !== id;
        })
        setnotes(newNote);

    }

    //edit a note
    const editNote = async (id, title, description, tag) => {
        //define ajax function for using api call
        const ajax = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: "post",
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIwNDFlODJlZDZhOGFhNTEwN2JkYWIzIn0sImlhdCI6MTY0NDc2MzI3M30.l3waqmqLQngrxSpsgzj9IQ-cGPSuzZhBXdyY6arbeQk',
            },
            body: JSON.stringify({ title, description, tag })
        });

        const json = ajax.json();

        for (let index = 0; index < notes.length; index++) {
            const element = notes[index];
            if (element._id === id) {
                element.title = title;
                element.description = description;
                element.tag = tag;
            }
        }
    }


    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, fetchNotes }}>
            {props.children}
        </NoteContext.Provider>
    )


}

export default NoteState;