import {CriminalHTML} from './Criminal.js';
import {getCriminals, useCriminals} from './CriminalProvider.js';

const eventHub = document.querySelector(".container")
const domElement = document.querySelector(".criminalsContainer");

// Listen for the custom event you dispatched in ConvictionSelect
eventHub.addEventListener("crimeChosen", event => {
    // You remembered to add the id of the crime to the event detail, right?
    if (event.detail.crimeThatWasChosen !== "0") {
        /*
            Filter the criminals application state down to the people that committed the crime
        */
        const matchingCriminals = useCriminals().filter(currentCriminal => {
            return currentCriminal.conviction === event.detail.crimeThatWasChosen
        })
        render(matchingCriminals)
        /*
        Then invoke render() and pass the filtered collection as
        an argument
        */
    } else {
        render(useCriminals());
    
    }
})

eventHub.addEventListener("officerSelected", event => {
    if (event.detail.officer !== "0" ) {
        const officerName = event.detail.officer
        const criminals = useCriminals()
        const matchingCriminals = criminals.filter(criminalObject => {
            return criminalObject.arrestingOfficer === officerName
        }) 
        render(matchingCriminals)
    } else render(useCriminals()) 
})

export const CriminalList = () => {
    getCriminals()
    .then(() => {
        const criminalArray = useCriminals();
        render(criminalArray)
    })
        }
        
const render = (aCriminalsArray) => {
    const domElement = document.querySelector(".criminalsContainer");
    let HTMLArray = aCriminalsArray.map(singleCriminal => {
        return CriminalHTML(singleCriminal);
    })
    domElement.innerHTML = HTMLArray.join("");
}






