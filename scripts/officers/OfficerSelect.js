import {getOfficers, useOfficers} from './OfficerProvider.js';

const contentTarget = document.querySelector(".filters__officer")

const eventHub = document.querySelector(".container")

eventHub.addEventListener("change", changeEvent => {
    if (changeEvent.target.id === "officerSelect") {
        // Get the name of the selected officer
        const selectedOfficer = changeEvent.target.value
        
        // Define a custom event
        const theChosenOfficer = new CustomEvent("officerSelected", {
            detail: {
                officer: selectedOfficer
            }
        })

        // Dispatch event to event hub
        eventHub.dispatchEvent(theChosenOfficer)
    }
})

export const officerList = () => {
    gitOfficers()
    .then(()=> {
        const officerArray = useOfficers();
        addOfficersToDOM(officerArray);
    })
    }

    export const OfficerSelect = () => {
        getOfficers()
            .then(() => {
                const officers = useOfficers()
                render(officers)
            }
        )
    }
const render = allOfficers => {
    // if not .officerSelected then .officers
    // const officerArray = allOfficers.officers
    contentTarget.innerHTML = `
    <select class="dropdown" id="officerSelect">
        <option value="0"> Please select an officer...</option>
        ${
            allOfficers.map(officer => {
            return `<option value="${officer.name}">${officer.name}</option>`
        }).join("")
    }
        </select>`
}