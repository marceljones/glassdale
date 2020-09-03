// A bunch of input boxes related to the note informtion.
import { useCriminals, getCriminals } from "./CriminalProvider.js";
import { saveNote } from "./NoteProvider.js";
const eventHub = document.querySelector("#main");
const contentTarget = document.querySelector("#noteFormContainer")

eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id ==="saveNote"){

        const noteContent = document.querySelector("#noteForm--text")
        const noteCriminal = document.querySelector("#noteForm--criminal")

        if(noteCriminal.value !== "0"){
           
        const newNote = {
            noteText: noteContent.value,
            suspect: noteCriminal.value,
            date: Date.now()
        }

        // saveNote(newNote);
    }else {
            window.alert("Choose a Suspect");
        }
    }
})
const render = () => {
    contentTarget.innerHTML = `
        <h3>New Note Details</h3>
        <textarea id="noteForm--text" placeholder="Put a note here"></textarea>

        <select class="dropdown" id="noteForm--criminal">
        <option value="0">Please select a crime...</option>
        ${
            criminalArray.map(criminalObj => {
            return `<option value="${criminalObj.name}">${criminalObj.name}</option>`
            }).join("")
        }
    </select>

        <button id="saveNote">Save Note</button>
    `
}
// export NoteForm which only renders the form above
export const NoteForm = () => {
    getCriminals()
    .then(() => {
    render(useCriminals());
})
}