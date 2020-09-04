 
// /*
// hold on to array of notes
// useNotes - makes copy of array of notes and returns
// get all the notes from DB
// add a note to the DB
// */

// let notes = [];

// const eventHub = document.querySelector("#main")

// const dispatchStateChangeEvent = () => {
// 	const noteStateChangedEvent = new CustomEvent("noteStateChangeEvent")

// 	eventHub.dispatchEvent(noteStateChangedEvent)
// }

// export const getNotes = () => {
// 	return fetch("http://localhost8088/notes")
// 	.then(response => response.json())
// 	.then(parsedNotes => {
// 		// parsedNotes represents our array
// 		notes = parsedNotes
// 	})
// }

// export const useNotes = () => {
// 	return notes.slice();
// }

// // When we save a note, we want to go to the database and get all of the notes,
// // including the new one.REF BELOW: .then go get the notes REF ABOVE: get them, 
// // parse them and set the array equal to the parsed notes. Once done, you want
// // to disaptch an event saying the state has changed. See 2nd .then() Then see 
// // above where dispatchCstateChangeEvent is defined. 
// // PAUSE - Go to NoteList which is listening for the noteStateChange to Change(d)
// // Once changed, it says to get the newNotes and render them.



// export const saveNote = noteObj => {
// 	return fetch("http://localhost:8088/notes", {
// 		method: "POST",
// 		headers: {
// 			"Content-Type": "application/json"
// 		},
// 		body: JSON.stringify(noteObj)
// 	})
// 	.then(() => {

// 		return getNotes()
// 	})
// 	.then(dispatchStateChangeEvent)
// }

// end of my code








/*
hold on to array of notes
useNotes - makes copy of array of notes and returns
get all the notes from DB
add a note to the DB
*/

let notes = [];

const eventHub = document.querySelector("#main")

const dispatchStateChangeEvent = () => {
    const noteStateChangedEvent = new CustomEvent("noteStateChanged")

    eventHub.dispatchEvent(noteStateChangedEvent)
}

export const getNotes = () => {
    return fetch('http://localhost:8088/notes')
        .then(response => response.json())
        .then(parsedNotes => {
            notes = parsedNotes
        })

}

export const useNotes = () => {
	return notes.slice();
}

export const saveNote = noteObj => {
	return fetch("http://localhost:8088/notes", {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(noteObj)
	})
	.then((result) => {
	 getNotes()
	})
    .then(dispatchStateChangeEvent)
}