import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
    const notesInitial = [
        {
            "_id": "61f6e257b20e6bb5b06a765a",
            "user": "62041e82ed6a8aa5107bdab3",
            "title": "My title",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "2022-01-30T19:09:11.915Z",
            "__v": 0
        },
        {
            "_id": "61f821e0e9bfcad2ee3602cca",
            "user": "62041e82ed6a8aa5107bdab3",
            "title": "New note",
            "description": "Please access the playlist",
            "tag": "youtube",
            "date": "2022-01-31T18:44:30.865Z",
            "__v": 0
        },
        {
            "_id": "61f822e0e9bfcad2ee3602cca",
            "user": "62041e82ed6a8aa5107bdab3",
            "title": "New note",
            "description": "Please access the playlist",
            "tag": "youtube",
            "date": "2022-01-31T18:44:30.865Z",
            "__v": 0
        },
        {
            "_id": "61f823e0e9bfcad2ee3602cca",
            "user": "62041e82ed6a8aa5107bdab3",
            "title": "New note",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi reiciendis reprehenderit, quo quaerat natus alias explicabo placeat sint vero officiis quidem, odit consequuntur. Quam doloribus, voluptas modi asperiores quas dolorum? Nobis molestias quisquam fugit?",
            "tag": "youtube",
            "date": "2022-01-31T18:44:30.865Z",
            "__v": 0
        },
        {
            "_id": "61f824e0e9bfcad2ee3602cca",
            "user": "62041e82ed6a8aa5107bdab3",
            "title": "New note",
            "description": "Please access the playlist",
            "tag": "youtube",
            "date": "2022-01-31T18:44:30.865Z",
            "__v": 0
        }
    ];
    const [notes, setnotes] = useState(notesInitial);

    //add a note
    const addNote = (title, description, tag) => {
        //TODO: API call
        console.log("addmin a new note");
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
    const deleteNote = () => {

    }

    //edit a note
    const editNote = () => {

    }


    return (
        <NoteContext.Provider value={{ notes, setnotes, addNote, deleteNote, editNote }}>
            {props.children}
        </NoteContext.Provider>
    )


}

export default NoteState;