

function mensajeAlert(){
    alert("Hola mundooo!!!");
}

function cajitaTexto(){
    var nombre = prompt("Ingrese su nombre");
    document.write("<h1>Su nombre es: " + nombre + " </h1>");
}

function confirmar(){
    var respuesta = confirm("Estas seguro que deseas eliminar el archivo?");
    if(respuesta == true){
        alert("Archivo eliminado correctamente");
    } else{
        alert("Archivo no eliminado");
    }
}

function consola(){
    console.log("Soy tu mejor amigo para los errores");
}

// Modificando imagen

var imagen = document.getElementById("imagen");

imagen.addEventListener("dblclick", ()=>{
    imagen.style.width = "1000px";
    imagen.style.border = "5px solid black";
})

// Mouse

var caja = document.getElementById("box");

caja.addEventListener("mouseenter", ()=>{
    caja.classList.replace("box", "cambio1");
})

caja.addEventListener("mouseleave", ()=>{
    caja.classList.replace("cambio1", "box");
})

caja.addEventListener("mousemove", ()=>{
    console.log("El mouse se esta moviendo");
})

caja.addEventListener("mousedown", ()=>{
    console.log("Has dado click dentro del div");
})

caja.addEventListener("mouseup", ()=>{
    console.log("Has levantado el click dentro del div");
})

// TECLADO

var teclado = document.getElementById("teclado");

// teclado.addEventListener("keydown", ()=>{
//     console.log("Has oprimido una tecla")
// })

// teclado.addEventListener("keypress", ()=>{
//     console.log("Tienes la tecla sostenida")
// })

teclado.addEventListener("keyup", (e)=>{
    console.log(e.key);

    if(e.key.toLowerCase() == "w"){
        alert("Vas hacia adelante")
    }
    if(e.key.toLowerCase() == "d"){
        alert("Girando hacia la derecha")
    }
    if(e.key.toLowerCase() == "s"){
        alert("Vas hacia atras")
    }
    if(e.key.toLowerCase() == "a"){
        alert("Girando hacia la izquierda")
    }else{
        alert("Estas oprimiendo la tecla incorrecta")
    }
})

// Objeto evento

var padre = document.getElementById("padre");
padre.addEventListener("click", (e)=>{
    console.log(e.target.textContent);
    e.target.classList.add("color")
})

// CREAR ELEMENTOS DENTRO DE UN NODO O ETIQUETA

var lista = document.getElementById("lista");
var agregar = document.getElementById("agregar");

agregar.addEventListener("click", ()=>{
    var texto = document.getElementById("texto").value;
    // me trae el texto o informacion ingresado dentro del imput

    var etiqueta = document.createElement("li");
    // creo la etiqueta 

    etiqueta.textContent = texto;
    // dentro de la etiqueta inserto el texto que tiene el input

    lista.appendChild(etiqueta);
})