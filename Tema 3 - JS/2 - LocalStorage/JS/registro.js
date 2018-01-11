// Comprobamos si el navegar el compatible con localStorage
if (window.localStorage === undefined) {
    alert("Su navegador no permite localStorage, busque otro");
}

// Array con los IDs de los campos/inputs que vamos a guardas y subir
let ids = [
    "firstname",
    "lastname",
    "telephone",
    "email",
    "birthday",
    "height",
    "favcolor",
    "favweb" ];

// Función que guarda los datos del formulario en localStorage
function guardar() {
    let formularioPersona = {};
    ids.forEach((v, i, a) =>{
        formularioPersona[ids[i]] = document.getElementById(ids[i]).value;
    });
    localStorage.formularioPersona = JSON.stringify(formularioPersona);
}

// Función que carga los datos de localStorage al formulario
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

//Cuando cargue la página cargamos los datos.
cargar();
