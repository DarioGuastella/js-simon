const pageDiv = document.getElementById("container");
//Genero 5 numeri in maniera randomica, all'interno di un array.

let RandomNumbers = [];
let selectedNumbers = [];

while (RandomNumbers.length < 5) {
    let number = numeroRandom(1, 99);
    if (RandomNumbers.indexOf(number)=== -1) {
        const paragraph = document.createElement("p");
        RandomNumbers.push(number);
        paragraph.innerText += number;
        pageDiv.appendChild(paragraph);
        paragraph.classList.add("numbers");
    }

}
console.log(`Numeri randomici: ${RandomNumbers}`);

//Aspetto 30 secondi ed eseguo funzione
const myTimer =setTimeout(Timer, 3*1000); //ToDo: cambia in 30 secondi


////////////////////// FUNZIONI ////////////////////////////////

function numeroRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

///

function Timer() {
    container.innerHTML = "";
    while (selectedNumbers.length < 5) {
        let number = prompt("Inserisci uno dei numeri visualizzati");
        selectedNumbers.push(number);
    }
  }