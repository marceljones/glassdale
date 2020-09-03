let criminals = []

export const useCriminals = () => {
    return criminals.slice()
}

export const getCriminals =  () => {
    return fetch("https://criminals.glassdale.us/criminals")
    .then(response => response.json())
        .then(
            parsedResponse => {
                criminals = parsedResponse;  
            }
        )
        }
//Create a function to grab the API criminal data, that 
//then converts data to readable info.
//then put that info into a table and assign it to the criminals []
    