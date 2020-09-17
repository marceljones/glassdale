export const Witnesses = (witnessObj) => {

    const placeWitnessOnDOM = `
    <section id="witness--${witnessObj.id}" class="card-criminal">
            <p><strong>Name:</strong> ${witnessObj.name}</p>
             <p>Statement:${witnessObj.statement}</p>
    </section>
    `;
    return placeWitnessOnDOM;
}