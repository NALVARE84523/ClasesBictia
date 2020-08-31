
// let usu = 'Pepito';
// let pass = 234;


// function login(){
//     let usuario = prompt('Ingrese un usuario');
//     let contra = parseInt(prompt('Ingrese una contrasena'));

//     if((usuario == usu) && (contra == pass)){
//         alert('Bienvenido ' + usu);
//     }else{
//         alert('Usuario o contrasena incorrecta')
//     }
// }
// Const se utiliza para guardar elemntos o etiquetas que no van a cambiar
// Let es una variable que si puede cambiar en este caso lo usamos para traer el valor ingresado dentro de una etiquera


let usuarioPrueba = 'admin';
let passPrueba = '1234';
const eventoForm = document.getElementById('evento');

eventoForm.addEventListener('click', (event)=>{
    event.preventDefault();

    let usuarioF = document.getElementById('usuForm').value;
    let passwordF = document.getElementById('contraForm').value;
    if(usuarioF === "" || passwordF === ""){
        alert('Datos vacios');
    }else if(usuarioF == usuarioPrueba && passwordF == passPrueba){
        alert('Exito');
        setTimeout(()=>window.location = '/08-29-2020 calculadora/index.html', 2500)

    }else{
        alert('Fallido');
    }

})
