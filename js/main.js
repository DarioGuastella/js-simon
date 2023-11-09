//Genero 5 numeri in maniera randomica, all'interno di un array.

let RandomNumbers = [];

while (RandomNumbers.length < 5) {
    let number = numeroRandom(1, 100);
    if (RandomNumbers.indexOf(number)=== -1) {
        RandomNumbers.push(number);
    }

}
console.log(`Numeri randomici: ${RandomNumbers}`);


////////////////////// FUNZIONI ////////////////////////////////

function numeroRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}