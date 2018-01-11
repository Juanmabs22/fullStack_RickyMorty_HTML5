

if (window.localStorage === undefined) {
    console.log("Su navegador no permite localStorage");
    return;
}


let ids = [
    "firstname",
    "lastname",
    "telephone",
    "email",
    "birthday",
    "height",
    "favcolor",
    "favweb" ];

function guardar() {
    let formularioPersona = {};
    ids.forEach((v, i, a) =>{
        formularioPersona[ids[i]] = document.getElementById(ids[i]).value;
    });
    localStorage.formularioPersona = JSON.stringify(formularioPersona);
}

function cargar() {
    let formularioPersona = JSON.parse(localStorage.formularioPersona);
    if(!formularioPersona){
        console.log("No hay datos!");
    }

    ids.forEach((v, i, a) => {
        document.getElementById(ids[i]).value = formularioPersona[ids[i]];
    });
    localStorage.formularioPersona = JSON.stringify(formularioPersona);
}