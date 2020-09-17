/*
map over an array and display all notes from Note.js
*/

import { getNotes, useNotes } from "./NoteProvider.js";
import { NoteHTMLConverter } from "./Note.js";
import { useCriminals } from "../criminals/CriminalProvider.js";

const contentTarget = document.querySelector(".noteListContainer")
const eventHub = document.querySelector(".container")

const render = (notes) => {
    const criminals = useCriminals()
    let HTMLrender = notes.map((noteObject) => {
        return NoteHTMLConverter(noteObject)
    })
    contentTarget.innerHTML = HTMLrender.join("");
    
    // contentTarget.innerHTML = notes.map((noteObject) => {
    //         return NoteHTMLConverter(noteObject)
    //      })     .join("");
        
}

// This starts the process of getting the notes:  We get them, 
// call useNotes then call the render function
//  The render is going over notes.map and its returning the HTML
export const NoteList = () => {
    getNotes()
        .then(useNotes)
        .then(render())
}

// Once the state has changed (SEE NOTEPROVIDER) get the 
// newNotes and render them.SEE BELOW
eventHub.addEventListener("noteStateChanged", () => {	
    const newNotes = useNotes()
    render(newNotes)
})









