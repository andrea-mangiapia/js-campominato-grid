// L'utente indica un livello di difficoltà (con un prompt) in base al quale decidiamo il range di numeri possibili del gioco:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
// I numeri nella lista delle bombe non possono essere duplicati.
// In seguito attraverso dei prompt l'utente inserisce un numero alla volta finche il gioco non è finito:
// se il numero è presente nella lista dei numeri generati, abbiamo calpestato una bomba, il gioco finisce con un messaggio di errore
// Altrimenti il gioco va avanti a meno di aver raggiunto il numero massimo di tentativi possibili. In questo caso il gioco finisce con un messaggio di vittoria.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha scelto un numero che non era una bomba.

// 1 - chiedo il livello di difficoltà all'utente (tramite prompt)
const levelDifficulty = prompt('Scegli la difficoltà tra 1 - 2- 3');

// 2 - indico livello di difficoltà
// SE sceglie 1 il livello di difficoltà è 100;
// ALTRIMENTI SE 2 il livello di difficoltà è 81;
// ALTRIMENTI SE 3 il livello di difficoltà è 49;
if(levelDifficulty === '1') {
    gameLevel = 100;
} else if(levelDifficulty === '2') {
    gameLevel = 81;
} else if(levelDifficulty === '3') {
    gameLevel = 49;
}

// Genero le bombe
const bombs = generateBombs(16, 1, gameLevel)

// --------------
// FUNCTIONS
// --------------
function generateBombs(nBombs, rangeMin, rangeMax) {
    // 3 - genero 16 bombe con numeri casuali in un array vuoto
    // Array vuoto
    const randomNBombsArray = [];

    while(randomNBombsArray.length < nBombs) {
        // creare un numero ramdon da rangeMin a rangeMax
        const randomNBombs = getRndInteger(rangeMin, rangeMax);
        if(!randomNBombsArray.includes(randomNBombs)) {
            randomNBombsArray.push(randomNBombs);
        }
    }

    console.log(randomNBombsArray);
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}