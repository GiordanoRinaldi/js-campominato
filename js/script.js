/**
 * FUNZIONI
 */

// CREA LA DIMENZIONE DEL CAMPO

var numerocelle = [];

function creaCampo(nCelle) {
    for (var i = 1; i <= nCelle; i++) {
    document.getElementById("container").innerHTML += `<div class="quadrato">${i}</div>`;
    numerocelle.push(i);
    }    
}


// ESEGUE NUMERI RANDOM
function numeroRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}


//Chiedere all'utente di inserire la difficolta di cui sarà composto il campo da gioco.

var sceltaUtente = prompt("Scegli la difficoltá: Facile (100 celle / 16 bombe), Medio (80 celle / 16 bombe), Difficile (50 celle / 16 bombe).");

while(sceltaUtente != "facile" && sceltaUtente != "medio" && sceltaUtente != "difficile") {
    sceltaUtente = prompt("ERRORE! Non hai inserito i termini giusti. Scegli la difficoltá: Facile (100 celle / 16 bombe), Medio (80 celle / 16 bombe), Difficile (50 celle / 16 bombe).");
}

if (sceltaUtente == "facile") {
    sceltaUtente = 100;
    vittoria = 84;
} else if (sceltaUtente == "medio") {
    sceltaUtente = 80;
    vittoria = 64
} else {
    sceltaUtente = 50;
    vittoria = 34;
}

 
creaCampo(sceltaUtente);


// genera bombe random sul campo 

var bombe = [];

for (var i = 0; i < 16; i++) {
    var numeriBombe = (numeroRandom(1, sceltaUtente));
    var check = bombe.includes(numeriBombe);

    if (check == false) {
        bombe.push(numeriBombe);

    } else {
        while(check == true){
            numeriBombe = (numeroRandom(1, sceltaUtente));
            check = bombe.includes(numeriBombe);
            if(check == false){
                bombe.push(numeriBombe);
            }
        }
    }
}




var classeQuadrato = document.getElementsByClassName("quadrato");


for (var i = 0; i <= sceltaUtente; i++) {
    if (bombe.includes(numerocelle[i])) {
        classeQuadrato[i].classList.add("bomba");
    }
}


// contatore di celle cliccate, bombe cliccate, vittoria 

var celleCliccate = 0;

var vittoria = 0

document.getElementById("container").addEventListener("click", 
    function (event) {
        
        if (event.target.classList.contains("bomba")){
            event.target.classList.add("boom")
            alert(`BOOM! HAI PERSO! Il tuo punteggio: ${celleCliccate} punti` );
            location.reload();
        } else if (event.target.classList.contains("rosso")) {
            alert("CHICCO CHAI GIÁ PREMUTO !");
        } else {
            event.target.classList.add("rosso");
            alert(event.target.innerHTML);
            celleCliccate += 1;
            
            if(celleCliccate == vittoria) {
                alert("HAI VINTO!")
            }
        }
    }
);







