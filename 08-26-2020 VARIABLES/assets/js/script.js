// Var permite realizar modificacion a las variables. Al igual que let
// Const - constante no permite cambiar su valor y se debe asignarle el valor una vez declarada

// var nombre5 = 'Nelson ALvarez';

// nombre5 = 'Nelson Alvarez Roa'; // Me permite modificar su valor
// console.log(nombre5);

//ES6


// let nombreLet = 'Laura Martinez';
// nombreLet = 'Laura Perez';
// console.log(nombreLet);

// const nombre6 = 'Herlyn Carima'; // Al declarar su valor no puede ser modificado y el nav nos presentara error
// nombre6 = 'Pedro Garcia';


// Alcance global - Alcance local

// GLOBAL Se puede modificar en cualquier seccion del codigo

// var global = 0;

// function varGlobal(){
//     for(var i = 0; i < 5; i++){
//         global = i;
//     }
// }
// varGlobal();
// console.log(global);


// LOCAL

// function varLocal(){
//     var local = 'Hola mundo!!'; // Variable local
//     console.log(local)
// }

// varLocal();



// function varPrueba(){
//     var x = 70;
//     if(true){
//         var x = 50;
//         document.writeln(x);
//     }
//     document.write(x);
// }

// function letPrueba(){
//     let y = 30;
//     if(true){
//         let y = (30*2);
//         document.writeln('La multiplicacion dio ' + y);
//     }
//     document.writeln('El valor inicial es de ' +y);
// }

// LET: Se limita al bloque(scope) o su alcance
// CONST: No permite cambios una vez declarado o asignado un valor
// VAR: Modificar la variable 

// FUNCIONES
// Funcion tradicional, se definen con la palabra reservada 'Function'
// function soyUnaFuncion(num1, num2){
//     return num1 + num2;
// }

// console.log(soyUnaFuncion(5, 3)); 

// Funciones anonimas, se utlizan directamente sin un nombre

//Funcion flecha

// let sumar = (a, v)=> a+b;
// console.log(sumar(10, 15));

// let hola = function(){
//     return "Hola, como estas?";
// }

// console.log(hola());

// CONDICIONALES - Flujo del programa a partir de una condicion, depende de otra parte del codigo


// let color = prompt('Ingrese un color en ingles');

// if(color == 'red'){
//     document.writeln("<h1 style = 'color:red'> Si el color es red - rojo</h1>");
// }else{
//     document.writeln("<h1 style ='color: " + color + " '> No el color no es red, el color escogido fue " + color + "</h1>");
// }

// = ES DE ASIGNACION
// OPERADORES DE COMPARACION
// == IGUALDAD
// === ESTRICTAMENTE IGUAL - TIENE QUE SER EL MISMO TIPO DE DATO
// != DIFERENTE O DISTINTO
// !===  NO IDENTICO, HASTA EL TIPO DE DATO DEBE SER DIFERENTE

// < MENOR QUE
// <= MENOR O IGUAL QUE
// > MAYOR QUE
// >= MAYOR O IGUAL QUE

// let year = 2020;
// if(year != 2020){
//     document.write("El year es diferente a 2020");
// }else{
//     document.write("Si el year es 2020");
// }

// OPERADORES LOGICOS
// && AND -- Y
// || OR -- O
// ! NOT - NEGACION, QUE NO SE CUMPLA ALGO

// let nota = 4.5;

// if(nota >= 4.5 && nota <= 5){
//     document.write("Felicidades has ganado la beca");
// }else if(nota < 4.5 && nota >= 0){
//     document.write("Vuelve a intentarlo");
// }else{
//     document.write("Ingrese un numero entre 0 y 5");
// }

// if(usuario == "camila" && contra== "1233"){
//     document.write('Bienvenido');
// }else{
//     document.write('Acceso denegado');
// }

// OR

// let pais = "Colombia";
// if(pais == "Colombia" || pais == "Peru" || pais == "Mexico"){
//     document.write("El pais pertenece a latinoamerica")
// }else{
//     document.write("A donde pertenece ese pais?");
// }

var operacion = prompt("Escoja una operacion: suma, resta, multiplicacion o division");
let num1 = parseFloat(prompt("Ingrese un numero"));
let num2 = parseFloat(prompt("Ingrese el segundo numero"));
switch (operacion){
    case "suma"://Si es igual a suma
        document.writeln("El resultado de la suma es: " + (num1 + num2));
    break;

    case "resta":
        document.writeln("El resultado de la resta es: " + (num1 - num2));
    break;

    case "multiplicacion":
        document.writeln("El resultado de la multiplicacion es: " + (num1 * num2));
    break;

    case "division":
        document.writeln("El resultado de la division es: " + (num1 / num2));
    break;

    default:
        document.write("Esta operacion no existe");
    break;
}