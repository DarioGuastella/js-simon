const pageDiv = document.getElementById("container");
//Genero 5 numeri in maniera randomica, all'interno di un array.

let randomNumbers = [];
let selectedNumbers = [];
let correctNumbers = [];
while (randomNumbers.length < 5) {
    let number = numeroRandom(1, 99);
    if (randomNumbers.indexOf(number) === -1) {
        const paragraph = document.createElement("p");
        randomNumbers.push(number);
        paragraph.innerText += number;
        pageDiv.appendChild(paragraph);
        paragraph.classList.add("numbers");
    }
    

}
console.log(`Numeri randomici: ${randomNumbers}`);

//Aspetto 30 secondi ed eseguo funzione
const myTimer = setTimeout(ask5Numbers, 3 * 1000); //ToDo: cambia in 30 secondi


////////////////////// FUNZIONI ////////////////////////////////

function numeroRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

///////////////////////////////////////////////////////////////

function ask5Numbers() {
    pageDiv.innerHTML = "";
    setTimeout(function () {
        while (selectedNumbers.length < 5) {
            let number = Number(prompt("Inserisci uno dei numeri visualizzati"));
            selectedNumbers.push(number);
        }
        console.log(`Numeri scelti: ${selectedNumbers}`);
        correctNumbers = randomNumbers.filter(function(n) {
            return selectedNumbers.indexOf(n) !== -1;
        });
        console.log(correctNumbers);
        
    }, 100);
    
}

////////////////////////////////////////////////////////////////


