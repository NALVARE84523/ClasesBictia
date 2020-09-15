// let edad = 25;
// console.log(edad);

// let decimal = 2.5;
// console.log(typeof decimal)

// let nombre = "Nelson";
// let apellido = "Alvarez";
// console.log(nombre + " " + apellido);


// let x = false;
// console.log(x);

//undefined

// let saludo;
// console.log(saludo);

// let nombre = "Nelson";
// console.log(nombre * 3);

// let abierto;

// let hora = 7;
// if(hora > 8){
//     abierto = "La tienda ya esta abierta, puedes venir a comprar";
// }else{
//     abierto = "La tienda aun esta cerrada";
// }
// console.log(abierto);

// POO



// const persona = {
//     nombre: "Nelson Alvarez",
//     edad: 23,
//     barrio: "Facatativa",
//     hobbies: ["Futbol", "Billar", "Tejo"],
//     padre: {
//         name: "Camilo Sr",
//         edad: 46,
//         barrio: "Faca",
//         hobbies: ["Futbol", "Billar", "Tejo"]
//     },
//     madre:{
//         nombre: "Mama Camilo",
//         edad: 46,
//         barrio: "Faca"
//     }
// }

// const Nelson = JSON.stringify(persona);
// document.write(Nelson);

// console.log(persona.nombre);

// JSON = JavaScript Object Notation

// let numeros = [2, 3.4, 5, 7];
// let palabras = ["Pepito", "Pepita", "Pedrito"];
// let booleanos = [true, false, true];

// Multiples datos

// let sancocho = ["Pollo", 3, "yuca", 1, true, 3.4];

// // Metodos y propiedades, manipular los arrays y arreglos

// let videojuegos = ["Spiderman", "MarioBros", "Contra", "God of war", "Pacman", "Ghost and gobbins"];

// document.write("Tienes " + videojuegos.length + " videojuegos");

// videojuegos.push("Metal gear", "Metal Slug", "World of tanks");

// document.write("<br>" + videojuegos);

// Splice - Agregar nuevos elementos en una posicion especificas
// Primer parametro (2) es la posicion donde quiero que se inserten los elementos nuevos
// Segundo parametro (3) es la cantidad de elementos  que quiero que se eliminen a partir de esas posicion. En este caso elimina desde la posicion 2 en adelante

// videojuegos.splice(2, 3 , "Mario Kart", "Zelda");

// document.write("<br>" + videojuegos);

// // Pop- Eliminar la ultima posicion del arreglo

// videojuegos.pop();
// document.write("<br>" + videojuegos);

// delete - Elimina cualquier posicion. Deja el espacio vacia, undefined
// delete videojuegos[0];
// document.write("<br>" + videojuegos);

// Slice - cortar la matriz del arreglo

// let cortar = videojuegos.slice(4, videojuegos.length);
// document.write("<br>" + cortar);

// let nombre = "Nelson ALvarez";
// console.log(nombre.slice(7, nombre.length));

// Concat - Concatenar, enlazar, unir dos aareglos

// let consolas = ["Xbox", "PlayStation", "Nintendo", "Sega", "Atari"];

// document.write("<br>" + videojuegos + " " + consolas);

// let grupoRetro = videojuegos.concat(consolas);
// console.log("<br>" + grupoRetro);

// // Join - Separar un elemento de otro, por medio de cualquier simbolo

// document.write("<br>" + grupoRetro.join("<br>"));

// // Sort - Organizar alfabeticamente

// document.write(grupoRetro.sort());

// for (let i = 0; i <= 10; i++){
//     document.write("El contador va a ejecutar de 0 a 10 " + "<br>");
// }

// let anime = ["deat note", "another", "shingueki no kyojin"];

// for(let i = 0; i < anime.length; i++){
//     document.write(anime[i] + "<br>");
// }

// Ciclo for - Se ejecuta hasta que la condicion se cumpla

// for (let index = 0; index < anime.length; index++) {
//     document.write("<h1>" + (index + 1)  + ". " + anime[index] + "</h1>");
// }

// While - se ejecuta indefinidamente mientras se cumpla una condicion
// let posicion = 0;
// while (posicion < anime.length) {
//     document.write(anime[posicion] + "<br>");
//     posicion++;
// }

// do-while - 

// let pass = prompt("Ingrese su contrasena");
// let bd = "bitBictia";

// if (pass == bd) {
//     alert("Bienvenido")
// }else{
//     do{
//         pass = prompt("Contrasena incorrecta, vuelva a ingresar");
//     }while (pass !== bd);
// }

document.write("<h1> Tabla del 5 </h1>")

const tablaCinco = 5;
for (let index = 1; index <= 10; index++){
    document.write("<li>" + tablaCinco + " x " + index + " =" + (index * tablaCinco) + "<br>");
}

