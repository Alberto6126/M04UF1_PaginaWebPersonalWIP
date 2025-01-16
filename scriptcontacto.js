let nombre = "";
let fecha ="";
let email = "";
let telefono ="";
let color ="";
let mensaje="";

function asignacionVariables(){
nombre = document.getElementById("nombreForm").value;
email = document.getElementById("emailForm").value;

if(document.getElementById("telefonoForm").value != ""){
    telefono = document.getElementById("telefonoForm").value;
    console.log(telefono)
}
if(document.getElementById("fechaForm").value != ""){
    fecha = document.getElementById("fechaForm").value;
    console.log(fecha)
}
if(document.getElementById("colorForm").value != ""){
    color = document.getElementById("colorForm").value;
    console.log(color)
}
if(document.getElementById("mensajeForm").value != ""){
    mensaje = document.getElementById("mensajeForm").value;
    console.log(mensaje)
}

}
