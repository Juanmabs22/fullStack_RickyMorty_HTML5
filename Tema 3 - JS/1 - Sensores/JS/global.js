function updateConectionStatus(connected) {
    
}


document.body.addEventListener("offline", function () {
    updateConectionStatus(false);
}, false);
document.body.addEventListener("online", function () {
    updateConectionStatus(true);
}, false);
updateConectionStatus(navigator.onLine);