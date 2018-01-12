// Comprobamos si el navegar el compatible con localStorage
if (window.localStorage === undefined) {
    console.log("Su navegador no permite localStorage, busque otro");
}else{

// Array con los IDs de los campos/inputs que vamos a guardas y subir
ids = [ "firstname", "lastname", "telephone", "email", "birthday", "height", "favcolor", "favweb" ];

// Función que guarda los datos del formulario en localStorage
function guardar() {
    var formularioPersona = {};
    ids.forEach((v, i, a) =>{
        formularioPersona[ids[i]] = document.getElementById(ids[i]).value;
    });
    localStorage.formularioPersona = JSON.stringify(formularioPersona);
    console.log("Formulario guardado en LocalStorage.");
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

// Alerta de altura incorrecta
document.getElementById("height").oninvalid = function (e) {
    e.target.setCustomValidity("");
    if (!e.target.validity.valid) {
        e.target.setCustomValidity("¡No aceptamos personas por debajo de un metro!");
    }
};

}