// 1-Modificar el título principal de la página para que se pueda leer: ‘Título nuevo’

titulo = document.getElementById('titulo');
console.log(titulo);
titulo.innerText = 'Título Nuevo'

// 2-Cambiar el tipo de letra de los párrafos a Oxygen

// parrafos = document.querySelectorAll('p');
// todosParrafos = Array.from(parrafos);
// console.log(todosParrafos)

// for(todo of todosParrafos) {
//     todo.style.fontFamily =  'Oxygen', 'Ubuntu', 'Cantarell', 'Open Sans'
// }

// 3-Cambiar desde el DOM el nombre y el enlace al que se dirige el primer elemento del nav.

primerEnl = document.querySelector('li a')
console.log(primerEnl)

primerEnl.href = 'www.google.es';
primerEnl.innerText = 'Estamos Jodidos'

// 4-Crear un estilo en la hoja .css para la letra del párrafo. Modificar tamaño y peso. Aplicar el estilo mediante el DOM.

historia = document.querySelector('.historia p');
console.log(historia)

historia.setAttribute( 'class' ,'estiloP')

// 5-Crear un párrafo nuevo. Añadirle al párrafo una clase ‘nuevo-p’ y un id ‘segundo-p’. Añadirle contenido al párrafo.

segunPar = document.createElement('p')
segunPar.setAttribute('class' ,'nuevo-p');
segunPar.innerText = 'Posteriormente en el presente, Goku está ansioso por querer ir a combatir con otros peleadores del Otro Mundo, cosa que Kaiosama no quiere hacer, más que nada por el temor de que los otros Kaiosamas se burlen de su muerte y de su aureola.';
document.getElementById('cell').appendChild(segunPar);


