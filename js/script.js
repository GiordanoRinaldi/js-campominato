//Chiedere all'utente di inserire il numero di celle di cui sarà composto il campo da gioco.

var celleUtente = parseInt(prompt("Di quante celle vuoi che sia il campo ?"));

while(isNaN(celleUtente) || celleUtente < 1) {
    celleUtente = parseInt(prompt("ERRORE! Hai inserito una parola o un numero inferiore a 1. Di quante celle vuoi che sia il campo ?"));
}

var numerocelle = []; 

//Tramite una funzione javascript disegnare in pagina la griglia con massimo 10 celle per riga.
function creaCampo(nCelle) {
    for (var i = 1; i <= nCelle; i++) {
    document.getElementById("container").innerHTML += `<div class="quadrato">${i}</div>`;
    numerocelle.push(i);
    }    
}

creaCampo(celleUtente);


// funzione restituisce true se l'elemento é presente 
function inArray(arr, el) {

    var cont = 0;

    while ( cont < arr.lenght) {
        if ( arr[cont] == el) {
            return true;
        }

        cont++
    }

    return false;
}


//Consegna
//Il computer deve generare 16 numeri casuali tra 1 e 100 (bombe).
//I numeri non possono essere duplicati.
var bombe = [ ];

function numeroRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

var classeQuadrato = document.getElementsByClassName("quadrato");

console.log(classeQuadrato[0])

for (var i = 0; i < 16; i++) {
    var numeriBombe = (numeroRandom(1, 100));
    var check = bombe.includes(numeriBombe);

    if (check == false) {
        bombe.push(numeriBombe);

    } else {
        while(check == true){
            numeriBombe = (numeroRandom(1, 100));
            check = bombe.includes(numeriBombe);
            if(check == false){
                bombe.push(numeriBombe);
            }
        }
    }
}


for (var i = 0; i <= 100; i++) {
    if (bombe.includes(numerocelle[i])) {
        classeQuadrato[i].classList.add("bomba");
    }
}




//In seguito il giocatore clicca sulle celle numerate (non può cliccare più volte sulla stessa cella)
//Al click su una cella dovrà essere mostrato con un alert il numero della cella e il suo background diventerà rosso.

var celleCliccate = 0;

var vittoria = 0

document.getElementById("container").addEventListener("click", 
    function (event) {
        
        if (event.target.classList.contains("bomba")){
            event.target.classList.add("boom")
            alert(`BOOM! HAI PERSO! Il tuo punteggio: ${celleCliccate} punti` );
        } else if (event.target.classList.contains("rosso")) {
            alert("CHICCO CHAI GIÁ PREMUTO !");
        } else {
            event.target.classList.add("rosso");
            //alert(event.target.innerHTML);
            celleCliccate += 1;
            
            if(celleCliccate == vittoria) {
                alert("HAI VINTO!")
            }
        }
    }
);









//La partita termina quando il giocatore clicca su un numero “vietato” o clicca su tutte le celle che non sono delle bombe.
//Al termine della partita il software deve comunicare il punteggio.
//BONUS: (da fare solo se funziona tutto il resto)
//all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
//con difficoltà 0 => tra 1 e 100
//con difficoltà 1 => tra 1 e 80
//con difficoltà 2 => tra 1 e 50





