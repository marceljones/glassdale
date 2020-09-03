export const OfficerHTML = (officerObj) => {
    return `
        <section id="officer-${officerObj.id}" class="card-officer">
            <h3>Name: ${officerObj.name}</h3>
        </section>
    `
}
