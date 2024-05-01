# Gioco di Slot Machine
## Obiettivo

### Il gioco della slot machine simula l'esperienza di una slot machine virtuale, consentendo agli utenti di depositare denaro, scommettere su diverse linee e girare la macchina per cercare di ottenere combinazioni vincenti.
## Struttura del Gioco

### Il gioco è basato su una slot machine virtuale con 3 righe e 3 colonne. Ogni simbolo ha un valore associato e compare con una certa frequenza sulle ruote. Gli utenti possono scommettere su un numero di linee compreso tra 1 e 3 e selezionare l'importo della scommessa. Dopo aver effettuato la scommessa, la slot machine viene fatta girare e le combinazioni di simboli vengono generate casualmente.
## Logica di Vittoria

### Il controllo della vittoria è basato sulle combinazioni di simboli su ciascuna linea. Se tutti i simboli su una linea sono uguali, l'utente vince un premio in denaro calcolato in base al valore del simbolo e all'importo della scommessa. La funzione getWinnings determina se l'utente ha vinto e calcola le vincite corrispondenti.
## Implementazione

### Il gioco è implementato in JavaScript utilizzando Node.js. Le funzioni principali includono deposit per il deposito del denaro, getNumberOfLines per la selezione del numero di linee, getBet per la selezione dell'importo della scommessa, spin per la generazione casuale delle combinazioni di simboli, e getWinnings per il calcolo delle vincite. La logica di gioco è strutturata in modo da consentire all'utente di giocare più volte, depositando denaro aggiuntivo e selezionando nuove scommesse.

##### Sentiti libero di personalizzare il README con ulteriori dettagli o istruzioni se necessario.
