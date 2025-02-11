# Gioco di Slot Machine

## Obiettivo

Il gioco della **slot machine** simula l'esperienza di una slot machine virtuale, consentendo agli utenti di **depositare denaro**, **scommettere** su diverse linee e **girare la macchina** per cercare di ottenere combinazioni vincenti.

## Struttura del Gioco

Il gioco è basato su una slot machine virtuale con **3 righe** e **3 colonne**. Ogni simbolo ha un valore associato e appare con una certa frequenza sulle ruote. Gli utenti possono:
- Scommettere su un numero di linee (1, 2 o 3).
- Selezionare l'importo della scommessa.

Una volta effettuata la scommessa, la slot machine viene fatta girare e le combinazioni di simboli vengono generate casualmente.

## Logica di Vittoria

La **logica di vittoria** si basa sulle combinazioni di simboli che appaiono su ciascuna linea. Se tutti i simboli su una linea sono uguali, l'utente vince un premio in denaro calcolato in base al valore del simbolo e all'importo della scommessa.

La funzione **getWinnings** determina se l'utente ha vinto e calcola le vincite corrispondenti.

## Funzioni Principali

- `deposit(amount)`: Permette all'utente di depositare denaro nel suo saldo.
- `getNumberOfLines(lines)`: Consente all'utente di selezionare il numero di linee su cui scommettere (da 1 a 3).
- `getBet(betAmount)`: Permette all'utente di selezionare l'importo della scommessa.
- `spin()`: Fa girare la slot machine e genera casualmente una combinazione di simboli.
- `getWinnings()`: Calcola e restituisce le vincite dell'utente in base alle combinazioni di simboli.

## Implementazione

Il gioco è implementato in **JavaScript** utilizzando **Node.js**. La logica del gioco è strutturata in modo da consentire all'utente di:
1. Depositare denaro.
2. Selezionare il numero di linee da giocare.
3. Scommettere su un'importo specifico.
4. Girare la macchina e ricevere eventuali vincite.

## Esegui il Gioco

1. Clona questo repository:
   ```bash
   git clone https://github.com/aminesalhidev/Gioco-di-Slot-Machine
   ```

2. Installazione delle dipendenze:
   ```bash
   npm install 
   ```

3. Accedi alla cartella del Progetto :
   ```bash
   cd Gioco-di-Slot-Machine
   ```

4. Avvia il gioco : 
   ```bash
   node project.js
   ```