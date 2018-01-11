
var circulo = document.getElementsByClassName("connection-status__circle")[0];
var texto = document.getElementsByClassName("connection-status__text")[0];
var last_state;

function updateConectionStatus(connected) {
    if(last_state === connected) return;
    last_state = connected;

    if(connected) {
        circulo.className = "connection-status__circle";
        texto.innerHTML = "Conectado";
    } else {
        circulo.className = "connection-status__circle--disconnected";
        texto.innerHTML = "Desconectado";
    }

}


window.addEventListener("offline", function () {
    updateConectionStatus(false);
}, false);
window.addEventListener("online", function () {
    updateConectionStatus(true);
}, false);
updateConectionStatus(navigator.onLine);