// const myFunc = () => alert('Soy un evento desde una funcion externa!!')

// const botonClase = document.getElementsByClassName('boton');
// console.log(botonClase[0]);
// id = un solo elemento 1 boton
// clases = un conjunto de elementos de HTML que es parecido a un arreglo

// const botonID = document.getElementById('boton');

// botonID.addEventListener('click', () =>{
//   alert('DEsde el addventListener')
// })

// const MandarAlert = () => alert('Desde el listener pero externa');

// botonID.addEventListener('click');
// botonID.removeEventListener('click');


                          // Callbacks
// Es una funcion que es pasada a otra funcion como parametro
// const mensaje = () => 'Yo soy una callback'
// const saludo = (callback) => callback();
// console.log(saludo(mensaje));


// const suma = (num1, num2) => num1 + num2;
// const result = suma(7,7); //14

// const pintar = (result) => document.getElementById('demo').innerHTML = result
// pintar(result);

// const pintar = (result) => document.getElementById('demo').innerHTML = result;

// const calculadora = (num1, num2, pintar) => {
//   const resultadoDeSuma = num1 + num2; //15
//   pintar(resultadoDeSuma);
//   return resultadoDeSuma;
// };

// calculadora(8,7,pintar);

                        // Propagación de eventos

// const html = document.querySelector('html');
// const body = document.querySelector('body');
// const ul = document.querySelector('ul');
// const li = document.querySelector('li');


// function showMessage(event){
//   // console.log(event)
//   event.stopPropagation();
//   console.log(this.tagName);
// };

// html.addEventListener('click', showMessage);
// body.addEventListener('click', showMessage);
// ul.addEventListener('click', showMessage);


// for(let index = 0; index < li.length; index++){
//   li[index].addEventListener('click', showMessage);
// }


        // Ejemplos de eventos

// const input = document.getElementById('input');

// input.addEventListener('focus',(event) =>{
//   console.log(event.target.value);
// })

// input.addEventListener('keydown',(event) =>{
//   console.log(event.target.value);
// })

// input.addEventListener('keyup',(event) =>{
//   console.log(event.target.value);
// })

// input.addEventListener('keypress',(event) =>{
//   console.log(event.target.value);
// })

// input.addEventListener('blur',(event) =>{
//   console.log(event.target.value);
// });

// input.addEventListener('change',(event) =>{
//   console.log(event.target.value);
// });

// input.addEventListener('click',(event) =>{
//   console.log(event.target);
// });

// input.addEventListener('submit',(event) =>{
//   // event.preventDefault();
// });


// const myFunc = (e) =>{
//   e.preventDefault();
//   console.log('asdbkahsbds');
// };

// document.getElementById('input').onsubmit(function(e) {
//   e.preventDefault();
//   // do something
// });


