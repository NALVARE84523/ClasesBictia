const nombreUsuario = document.getElementById("Usuario");
const limpiar = document.getElementById("limpiar");

const usuarioEnStorage = localStorage.getItem('nombreUsuario');

nombreUsuario.innerText = usuarioEnStorage;

limpiar.addEventListener('click', ()=>{
    // localStorage.clear();
    localStorage.removeItem('nombreUsuario');
    window.location.reload();
})