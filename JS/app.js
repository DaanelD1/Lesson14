let name = "Daanel Dederer"
let age = 16;
let survived = true;
let city = "Kehra";
let commentary = "";
let drivingLicense = "";
console.log(`Character: ${name}. Age: ${age}. City: ${city}. `);


if(survived){
    commentary = "I live in Kehra.";
} else{
    commentary = "I live in Tallinn.";
}
console.log(`Charcter ${name} ${commentary}`);

if(age > 18){
    drvingLicense = `${name} is old enought to drive a car.`;
} else{
    drivingLicense = `${name} is too young to drive a car.`;
}
console.log(drivingLicense);


const html = `

    <ul>
        <li>Name: ${name}</li>
        <li>Age: ${age}</li>
        <li>City: ${city}</li>
        <li>He: ${commentary}</li>
        <li>${drivingLicense}</li>
    </ul>

`;


document.body.innerHTML = html;
