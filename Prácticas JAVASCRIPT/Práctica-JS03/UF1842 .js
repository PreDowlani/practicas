// // Dado el siguiente array:

miAlfabeto = ['A', 'B', 'C', 'D','E','F', 'G'];

// // -	Manda a consola la longitud del array
long = miAlfabeto.length;
console.log('La longitud del array es : '+ long);


// // -	Crea un condicional que indique si la longitud es menor que 4.
if (long > 4 ) {
    console.log('la longitud es mayor que 4')
} else  {
    console.log('la longitud es menor que 4')
}


// // Ejercicio 2
// // Crea un array planetas con todos los planetas del Sistema Solar.

const planetas = ['Urano', 'Tierra', 'Marte', 'Neptuno', 'Venus', 'Mercurio', 'Júpiter', 'Saturno'];
sistemaSolar = planetas.length;
console.log(sistemaSolar);

// // -	Escribe en consola cada uno de ellos por separado
for (i=0;i<planetas.length;i++) {
    console.log(planetas[i]);
}

// //Elimina a Marte :

newplanetas = [...planetas];
console.log(newplanetas);

newplanetas.splice(2,1);
console.log(newplanetas);
console.table(newplanetas);

// // Ejercicio 3
// // Utilizar métodos de Arrays y spread operator

// // Crea un array productos a partir de dos productos médicos pedidos al usuario.	
pregunta = prompt('introduzca un producto');
pregunta2 = prompt('introduzca otro producto');

const productoFinal = [pregunta, pregunta2];
console.log(productoFinal);

// //Añadir dos productos más al final del array

productoFinal.push('Vendajes' , 'Mascarillas');
console.log(productoFinal);

// //Añadir dos productos más al principio del array

productoFinal.unshift('Termómetro', 'Oxímetro');
console.log(productoFinal);

// //Spred Operator
newproductoFinal = [...productoFinal];
console.log(newproductoFinal);

// //añadir dos productos más al final 
newproductoFinal = [...newproductoFinal,'Laringoscopio' , 'Ecógrafo'];
console.log(newproductoFinal);

// //añadir dos productos más al principio 
newproductoFinal = ['Zueco Sanitario', 'Bata Quirúrgico', ...newproductoFinal];
console.log(newproductoFinal);

// // Ejercicio 4

// // Dado el array:
const numeros = ['1', '2', '3', '4', '5'];

// // Convertir cada String del array en entero y mostrarlo en pantalla.

for (i=0;i<numeros.length;i++) {
    console.log( Number(numeros[i]));
}


// // Ejercicio 5
// // Comprobar si un array cualquiera creado por el desarrollador contiene un número determinado que se pedirá por consola al usuario (positivo, negativo, entero o decimal). 

const array = [1,3,2,25,15,21.03,55.02,-325,-3,-5,-11,-235,4.06,5.5,95.3,-21.25];

preguntaUsuario = prompt('Introduzca cualquier número (positivio,negativo,entero o decimal');
preguntaUsuario = Number(preguntaUsuario);

comprobar = array.includes(Number(preguntaUsuario)) ;
console.log(comprobar);


// // Ejercicio 6

const numerosEj6 = [20,15,1.50,22,2.3,-35,36,-3.6,-50,12.35]

numerosLong = numerosEj6.length ;
console.log(numerosLong);

// // Sumar el primer y último elemento de un array de números.
numerosTotal = numerosEj6[0] + numerosEj6[numerosEj6.length-1]; //este es la suma del primero y el ultimo
console.log(numerosTotal);

// // Sumar todos los elementos de un array de números (enteros y decimales, negativos y positivos).

suma = 0;

for (i=0;i<numerosEj6.length;i++) {
    suma = suma + numerosEj6[i];
}
console.log(suma.toFixed(2));
    

// // Ejercicio 7
// // Escribir un programa que, dado un número del 1 al 7 muestre en consola el día de la semana correspondiente.

semana = ['Lunes','Martes','Miércoles','Jueves','Viernes','Sábado','Domingo'];
console.log(semana);

preguntaSemana = prompt('Introduzca un número de 1 al 7');
preguntaSemana = parseInt(preguntaSemana);

console.log(semana[preguntaSemana-1]);

// // Ejercicio 8

// // Crea un array con el nombre de 5 películas que te gusten
peliculas = ['Dogs','American Pie','Gladiator','Spiderman','Avengers'];
console.log(peliculas);

// // - Pídele a un usuario que te indique la posición de la película que quiere eliminar
eliminar = prompt('Eliga la posicion de la pelicula que quiera eliminar (entre 1-5) '+ peliculas);
eliminar = parseInt(eliminar);

// // - Eliminar la película en esa posición

newpeliculas = [...peliculas];
newpeliculas.splice(eliminar-1,1);
console.log(newpeliculas);

// // - Pídele al usuario que te indique una película que quiera añadir, y en qué posición.

add = prompt('Añada su película favorita ');
addNum = prompt('¿En qué posición quiere ? (Entre 1-5)');
addNum = Number(addNum);


newpeliculas.splice(addNum-1,0, add);
console.log(newpeliculas);

// // - Añadir película.

añadirPeli = prompt('Añadir otra peli');

newpeliculas.push(añadirPeli);
console.log(newpeliculas);


// Ejercicio 9

// Dada la siguiente lista de números enteros:
const listaNumeros = [1, 16, 22, 43, 55, 7, 14, 8, 9];
nuevaListaNumeros = [...listaNumeros];

nuevaListaP = [];
nuevaListaIM = [];

for (i=0;i<nuevaListaNumeros.length;i++) {
    if (nuevaListaNumeros[i]%2 ===0) {
        nuevaListaP.push(nuevaListaNumeros[i]);
    } else {
        nuevaListaIM.push(nuevaListaNumeros[i]);
    }
}

// El programa deberá decidir previamente si cada número es par o impar.
console.log(nuevaListaP);
console.log(nuevaListaIM);


// Ejercicio 10
// Escribir un programa que muestre todos los números negativos de un array.

numerosTotal = [25,-3,26.52,-253,-45,3265,10.35,-15,10]

nuemrosNeg = [];
nuemrosPos = [];

for (i=0;i<numerosTotal.length;i++) {
    if (numerosTotal[i]<0) {
     nuemrosNeg.push(numerosTotal[i])
    } else {
        nuemrosPos.push(numerosTotal[i]);
    }
}

console.log('los numeros negativos son  ' + nuemrosNeg);
console.log('los numeros positivos son  ' + nuemrosPos);









