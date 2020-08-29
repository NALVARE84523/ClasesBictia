const nombre = document.getElementById('name');
const email = document.getElementById('email');
const pass = document.getElementById('password');
const form = document.getElementById('form');
const parrafo = document.getElementById('warnings');

form.addEventListener('submit', e=>{
    e.preventDefault();
    let entrar = false;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(nombre.value.length < 6){
        swal("Error", "El nombre debe tener mas de 6 caracteres", "error");
        entrar = true;
    }

    if(!regexEmail.test(email.value)){
        swal("Error", "El email es incorrecto", "error");
        entrar = true;
    }
    if(pass.value.length < 8){
        swal("Error", "La contrasena debe tener mas de 8 caracteres", "error");
        entrar = true;
    }
    if(entrar == false){
        onclick=location.href='/calculadora/index.html';
    }
})
