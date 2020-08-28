const inputName = document.getElementById('inputName');
const inputApellido = document.getElementById('inputApellido');
const inputCorreo = document.getElementById('inputCorreo');
const inputPassword = document.getElementById('inputPassword');
const inputCelular = document.getElementById('inputCelular');
const mensajeName = document.getElementById('mensajeName');
const mensajeApellido = document.getElementById('mensajeApellido');
const mensajeCorreo = document.getElementById('mensajeCorreo');
const mensajePassword = document.getElementById('mensajePassword');
const mensajeCelular = document.getElementById('mensajeCelular');


function validarFormulario(event){
    event.preventDefault();
    if(inputName.value == ""){
        inputName.classList.add('alert');
        mensajeName.innerText = 'Llena el campo del nombre';
        inputName.placeholder = 'Pepi';
    }else if(inputApellido.value == ""){
        inputApellido.classList.add('alert');
        mensajeApellido.innerText = 'Llena el campo de Apellido';
        inputApellido.placeholder = 'No hay apellido'
    }/*else if(){

    }else if(){

    }*/

    window.location = '/08-27-2020 FORM/calculadora.html';
}