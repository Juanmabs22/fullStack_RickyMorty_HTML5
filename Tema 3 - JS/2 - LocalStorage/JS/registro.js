

if (window.localStorage === undefined) {
    alert("Su navegador no permite localStorage, busque otro");
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
    let formularioPersona = JSON.parse(localStorage.formularioPersona || null);
    if(!formularioPersona){
        console.log("No hay datos!");
        return;
    }

    ids.forEach((v, i, a) => {
        document.getElementById(ids[i]).value = formularioPersona[ids[i]];
    });
    localStorage.formularioPersona = JSON.stringify(formularioPersona);
}

cargar();
