const arrayFrutas = ['Papaya', 'Manzana', 'Cereza', 'Limon', 'Pina'];
const arrayFrutasString = JSON.stringify(arrayFrutas);
const per = document.getElementById('per');

localStorage.setItem('frutas', arrayFrutasString);

const arrayFrutasStorage = JSON.parse(localStorage.getItem('frutas'));


const persona = {
    name: 'Pepito',
    surname: 'Perez',
    age: 25,
    email: 'pepito@perez.com'
}

 const personaEnString = JSON.stringify(persona);
 localStorage.setItem('persona', personaEnString)

const personaEnStorage = JSON.parse(localStorage.getItem('persona')) ;

console.log(persona);





