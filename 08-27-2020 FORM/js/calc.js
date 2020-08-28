const promedio = document.getElementById('promedio'); /* Llamamos el boton*/

promedio.addEventListener('click', ()=>{
    let num1 =parseFloat(document.getElementById('num1').value); /*Me trae y almacena el valor del input */
    let num2 =parseFloat (document.getElementById(('num2')).value);
    let num3 =parseFloat (document.getElementById(('num3')).value);

    let respuesta = document.getElementById('respuesta');

    let resultado = ((num1 + num2 + num3) / 3).toFixed(2);

    respuesta.innerHTML = '<i>' + resultado + '</i>';
})