
//progetto Scritto con javascript 

// Obiettivi di questa giornata bellissima ^^ :

// 1. dipositare  una somma di dinero
// 2. determinare il numero di linee su cui scommettere
// 3. raccogliere l'importo della scommessa
// 4. gira la machina (inizia)
// 5. controlliamo le utente a vinto.
// 6. dai all'utente le sue vincite oppure niente se ha perso
// 7. rigioca  di nuovo.

const prompt = require("prompt-sync")();
const rowsCount = 3; // Righe
const COLS = 3; // Colonne

const SYMBOLS_COUNT = {
  "A": 2,
  "B": 4,
  "C": 6,
  "D": 8
};

const SYMBOLS_VALUES = {
  "A": 5,
  "B": 4,
  "C": 3,
  "D": 2
};

const deposit = () => {
  while (true) {
    const depositAmount = prompt("Inserisci un valore nel dispositivo: ");
    const numberDepositAmount = parseFloat(depositAmount);

    if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
      console.log("Numero non valido, si prega di riprovare.");
    } else {
      return numberDepositAmount;
    }
  }
};

const getNumberOfLines = () => {
  while (true) {
    const lines = prompt("Inserisci il numero di linee su cui vuoi scommettere (1-3): ");
    const numberOfLines = parseFloat(lines);

    if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
      console.log("Numero non valido. Inserire un numero compreso tra 1 e 3.");
    } else {
      return numberOfLines;
    }
  }
};

const getBet = (balance, lines) => {
  while (true) {
    const bet = prompt("Inserisci l'importo della scommessa: ");
    const numberBet = parseFloat(bet);

    if (isNaN(numberBet) || numberBet <= 0 || numberBet > balance / lines) {
      console.log("Importo scommesso non valido. Si prega di riprovare.");
    } else {
      return numberBet;
    }
  }
};

const spin = () => {
  const symbols = [];
  for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)) {
    for (let i = 0; i < count; i++) {
      symbols.push(symbol);
    }
  }

  const reels = [];
  for (let i = 0; i < COLS; i++) {
    reels.push([]);
    const reelSymbols = [...symbols];
    for (let j = 0; j < rowsCount; j++) { // Usiamo rowsCount invece di rows
      const randomIndex = Math.floor(Math.random() * reelSymbols.length);
      const selectedSymbol = reelSymbols[randomIndex];
      reels[i].push(selectedSymbol);
      reelSymbols.splice(randomIndex, 1);
    }
  }

  return reels;
};

const transpose = (reels) => {
  const rows = [];
  for (let i = 0; i < rowsCount; i++) { // Usiamo rowsCount 
    rows.push([]);
    for (let j = 0; j < COLS; j++) {
      rows[i].push(reels[j][i]);
    }
  }
  return rows;
};

const printRows = (rows) => { // Passiamo le righe come parametro
  for (const row of rows) {
    let rowString = "";
    for (const [i, symbol] of row.entries()) {
      rowString += symbol
      if (i != row.length - 1) {
        rowString += " | "
      }
    }
    console.log(rowString);
  }
};

const getWinnings = (rows, bet, lines) => {
  let winnings = 0;

  for (let row = 0; row < lines; row++) {
    const symbols = rows[row];
    let allSame = true;
    for (const symbol of symbols) {
      if (symbol !== symbols[0]) {
        allSame = false;
        break;
      }
    }

    if (allSame) {
      winnings += bet * SYMBOLS_VALUES[symbols[0]];
    }
  }
  return winnings;
};

const game = () => {
  let balance = deposit();

  while (true) {
    console.log("Il tuo conto è di $" + balance);
    const numberOfLines = getNumberOfLines();
    const bet = getBet(balance, numberOfLines);
    balance -= bet * numberOfLines;
    const reels = spin();
    const rows1 = transpose(reels); // Cambio il nome della variabile per evitare sovrapposizioni
    printRows(rows1); // Passiamo le righe trasposte alla funzione printRows
    const winnings = getWinnings(rows1, bet, numberOfLines); //   chiamata a getWinnings
    balance += winnings;
    console.log("Hai vinto $" + winnings);

    if (balance <= 0) {
      console.log("Non hai più soldi!");
      break;
    }

    const playAgain = prompt("Vuoi rigiocare di nuovo (S/N): ").toLowerCase();
    if (playAgain !== "s") {
      console.log("Arrivederci e tanta fortuna!");
      break;
    }
  }
};

game();
