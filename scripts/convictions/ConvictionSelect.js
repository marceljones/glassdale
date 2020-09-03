   /*
 *   ConvictionSelect component that renders a select HTML element
 *   which lists all convictions in the Glassdale PD API
 */
import { useConvictions, getConvictions } from "./ConvictionProvider.js"

// Get a reference to the DOM element where the <select> will be rendered
const contentTarget = document.querySelector(".filters__crime")

const eventHub = document.querySelector(".container")

// On the event hub, listen for a "change" event.
eventHub.addEventListener("change", event => {

    // Only do this if the `crimeSelect` element was changed
    if (event.target.id === "crimeSelect") {
        // Create custom event. Provide an appropriate name.
        const customEvent = new CustomEvent("crimeChosen", {
            detail: {
                crimeThatWasChosen: event.target.value
            }
        })

        // Dispatch to event hub
        eventHub.dispatchEvent(customEvent)
    }
})
// 
const render = convictionsCollection => {
    // const convictArray = convictionsCollection.convictions

    contentTarget.innerHTML = `
    <select class="dropdown" id="crimeSelect">
        <option value="0">Please select a crime...</option>
        ${
            convictionsCollection.map(conviction => {
            return `<option value="${conviction.name}">${conviction.name}</option>`
            }).join("")
        }
    </select>
    `
}



export const ConvictionSelect = () => {
    getConvictions()
    .then(() => {
        const convictions = useConvictions()
        render(convictions)
    })
}