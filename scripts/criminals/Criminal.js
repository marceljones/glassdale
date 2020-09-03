export const CriminalHTML = (criminalObj) => {
    return `
        <section id="criminal-${criminalObj.id}" class="card-criminal">
            <h3>Name: ${criminalObj.name}</h3>
            <p>Age:${criminalObj.age}</p>
            <p>Crime:${criminalObj.conviction}</p>
            <p>Term Start Date:${new Date(criminalObj.incarceration.start).toLocaleDateString('en-US')}</p>
            <p>Term End Date:${new Date(criminalObj.incarceration.end).toLocaleDateString('en-US')}</p>

        </section>
    `
}
//Create a function to give you HTML, 
//pass it a taco object to use dot notation with. 
//Set the object types in HTML for appearance
// & where they are pulling from using dot notation