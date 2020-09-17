import { getWitnesses, useWitnesses } from "./WitnessProvider.js"
import { Witnesses } from "./Witness.js";

export const WitnessList = () => {
    getWitnesses()
    .then(() => {
        const WitnessArray = useWitnesses();
        addWitnessToDOM(WitnessArray);
    })
}

const addWitnessToDOM = (witnessCollection) => {
  //get a reference to the DOM location where this list will eb put
  const domElement = document.querySelector(".witnessContainer");
  //Loop thru witnessCollection and
  let HTMLArray = witnessCollection.map(singleWitness => {
      //make some HTML stuff for each one
    return Witnesses(singleWitness)
  }).join("")
  //add to inner HTML
  domElement.innerHTML += HTMLArray;
}