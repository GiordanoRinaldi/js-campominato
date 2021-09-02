//Chiedere all'utente di inserire il numero di celle di cui sarà composto il campo da gioco.

var celleUtente = parseInt(prompt("Di quante celle vuoi che sia il campo ?"));

while(isNaN(celleUtente) || celleUtente < 1) {
    celleUtente = parseInt(prompt("ERRORE! Hai inserito una parola o un numero inferiore a 1. Di quante celle vuoi che sia il campo ?"));
}

//Tramite una funzione javascript disegnare in pagina la griglia con massimo 10 celle per riga.
function creaCampo(nCelle) {
    for (var i = 1; i <= nCelle; i++) {
    document.getElementById("container").innerHTML += `<div class="quadrato">${i}</div>`;
    }    
}

creaCampo(celleUtente);


//Al click su una cella dovrà essere mostrato con un alert il numero della cella e il suo background diventerà rosso.

document.getElementById("container").addEventListener("click", 
    function(event) {
        event.target.classList.toggle("rosso");
        alert(event.target.innerHTML);
    }
);


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


