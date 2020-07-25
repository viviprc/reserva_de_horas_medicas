//Evento escuchar en el click al boton de envío de formulario, que invoca la función procesarFormulario.

document.getElementsByClassName('btn-enviar')[0].addEventListener("click", procesarFormulario);

let rut = document.getElementById("rut");
let nombre = document.getElementById("nombre");
let apellidos = document.getElementById("apellidos");
let edad = document.getElementById("edad");
let correo = document.getElementById("correo");
let especialidad = document.getElementById("Listado");
let fecha = document.getElementById("fecha");
let hora = document.getElementById("Hora");

// Función validar, valida cada uno de los datos ingresados por el usuario. Si la validacion de todos los datos es correcta, retorna "true".
function validar(){
    const expRut = /^(\d{1,3}(\.?\d{3}){2})\-?([\dkK])$/;
    const expNomAp = /^[a-zA-Z\ áéíóúÁÉÍÓÚñÑ\s]*$/;
    const expCorreo = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const expFecha = /^((\d{4})\-(\d{2})\-(\d{2}))$/;

    if (
        rut.value === "" ||
        nombre.value === "" ||
        apellidos.value === "" ||
        edad.value === "" ||
        correo.value === "" ||
        especialidad.value === "" ||
        fecha.value === "" ||
        hora.value === ""
   
    )   {
            alert("Todos los campos son obligatorios");
            return false;
        }   else if (!expRut.test(rut.value)){
            alert("Ingrese un rut válido");
            return false;
        }   else if (!expNomAp.test(nombre.value)){
            alert("Ingrese su nombre correctamente");
            return false;
        }   else if (!expNomAp.test(apellidos.value)){
            alert("Ingrese sus apellidos correctamente");
            return false;
        }   else if (!expCorreo.test(correo.value)){
            alert("Ingrese un correo valido");
            return false;
        }   else if (!expFecha.test(fecha.value)){
            alert("Ingrese la fecha en formato correcto");
            return false;
        }   else {
            return true;
        }
};

/*Esta función invoca la función validar. Si esta retorna true, se invoca reservaExitosa. 
Si es false, detiene el envío del formulario, para corregir los datos ingresados.*/

function procesarFormulario(event){
    if (validar() === true){
        reservaExitosa();
    }else {
        event.preventDefault();
    }
};

/*Esta función toma el string del input fecha, lo convierte en array, revierte su orden (para que quede en el formato requerido dd-mm-yyyy),
Y retorna la información en un string.*/
function convertirFecha(fecha){
    let nuevaFecha = fecha.split("-");
    nuevaFecha.reverse();
    return nuevaFecha.join("-");
};

//Esta función muestra en un alert el resúmen de la Reserva medica exitosa, además invoca la función convertirFecha, para que la fecha se muestre en el formato requerido.
function reservaExitosa(){
    alert (
        "Estimado(a) " + nombre.value + apellidos.value + ", su hora para " + especialidad.value + 
        " ha sido reservada para el día " + convertirFecha(fecha.value) + " a las " + hora.value + 
        ". Además, se le envió un mensaje a su correo " + correo.value + 
        " con el detalle de su cita. Gracias por preferirnos." 
    );
};



