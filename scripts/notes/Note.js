
/*
Take notes made and prepare to display on website
*/

const eventHub = document.querySelector(".container")


export const NoteHTMLConverter = (noteObject) => {
    return `
        <section class="note">
            <div class="note--title">Suspect: ${ noteObject.suspectId }</div>
            <div class="note--content">${ noteObject.noteText }</div>
            <div class="note--timestamp">Timestamp: ${ new Date(noteObject.date).toLocaleDateString('en-US')  }</div>
        </section>
    `
}