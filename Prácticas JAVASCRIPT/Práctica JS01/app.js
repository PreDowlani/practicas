// //Ej 1 : Crear dos variables y calcular su suma

// let a = 10;
// let b = 5;
// c= (a+b);
// console.log(c);

// //Ej 2 – Pedir por consola tiempo en minutos y convertirlos en segundos

// minuto = prompt('convertir en segundos');
// segundos = parseInt (minuto)*60;
// console.log(segundos);

// // // Ej 3 – Calcular el área de un triángulo conociendo su base y su altura (pedir por consola)

// base = prompt('base del triangulo');
// altura = prompt('altura del triangulo')
// areaDelTriangulo = parseFloat(base*altura)/2;
// console.log( 'El area es  ' + areaDelTriangulo);

// // // Ej 4 – Convertir la edad de cada uno en días (pedir por consola)

// edad = prompt ('edad');
// edadEnDias = parseInt (edad*365);
// console.log('La edad en dias total son : ' + edadEnDias);

// // // Ej 5 – Calcular el perímetro de un rectángulo y asignarlo a una variable (pedir por consola el valor del lado del rectángulo)

// lado1 = prompt ('datos del lado 1  ');
// lado2 = prompt ('datos del lado2');
// perimetro = parseInt((lado1*2) +  (lado2*2));
// console.log('El perímetro del Rectángulo es : ' + perimetro);

// // Ej 6 – Asignar a dos variables nuestro nombre y apellidos. Crear una variable que contenga el nombre completo. Mostrarla nuestro nombre completo acompañado de un mensaje descriptivo.

// nombre = 'Pre  '
// apellido = 'Dowlani'
// completo = nombre + apellido ;
// console.log('Mi nombre es ' + completo);

// // Ej 7 – Estás contando el número de puntos de un partido de baloncesto. Ya sabes cuales han sido los aciertos de 2 puntos y los de 3. Representar en una variable la puntuación final del partido.

// doble = prompt ('cuantos dobles ?');
// triple = prompt ('cuantos triples');
// puntosTotal = parseInt(doble*2 + triple*3);
// console.log('El partido de baloncesto acabó con : ' + puntosTotal + ' puntos');

//  doble = false
//  triple = false

// if (doble || triple ) {
//     console.log('o ha hecho dobles o triples')
// } else {
//     console.log(' o no hay hecho ninguno')
// }





//Ej 8 – En un equipo de futbol sabemos cuales son los partidos ganados, empatados y perdidos durante 20 jornadas. Calcular la puntuación actual del equipo.

// partidosGanados = prompt('Cuantos partidos han ganado?');
// partidosPerdidos = prompt('Cuantos partidos han perdido?');
// partidosEmpatados = prompt('Cuantos partidos han empatados?');

// puntuacionTotal = ((partidosGanados*3) + (partidosPerdidos*0) + (partidosEmpatados*1))
// console.log('El Madrid termina la jornada 20 con = ' + puntuacionTotal + 'puntos');


// if (partidosGanados <= 10) {
//     console.log('han ganado pocos partidos') 
// } else if (partidosGanados > 10) {
//     console.log('vas x buen camino ')
// } else {
//     console.log('eres malo has perdido ')
// }


// // Ej 9 – Escribe un código que admita un número positivo y lo convierta en negativo.

// numero = prompt('escriba un numero');
// console.log(numero);
// numero2 = numero*(-1);
// console.log(numero2);

// pedir a cosola pasar de farenhit a kelvin y a grados 

// K = (y °F + 459,67) x 5/9

// fahrenheit = prompt ('cuantos grados fahrenheit hay ? ')
// const kelvin = 273.15
// const celsius = 0.5556
// gradosCelsius = (fahrenheit-32)*celsius
// gradosKelvin = (fahrenheit-32 ) *5/9 + kelvin;
// console.log(gradosKelvin);
// console.log(gradosCelsius);




// //se introduce precio de un producto , la cantidad , el precio y el descuento(fijo) aplicado 
// //tiene que mostrar las 3 cosas 

// precio = prompt ('¿cuanto quiere pagar ?');
// unidades = prompt ('¿cuantas unidades?');
// const descuento = 0.7
// precioFinal = (precio*unidades*descuento) ;
// console.log('el precio final es : ' + precioFinal + '€');






// una nave va a 30% de la velocidad de la luz , cuanto tarda en llega a un planeta que esta a 10.000 de años luz 
//  velocidad luz : 3·10^8 m/s  ----  año luz : 9,46 × 1012  . ¿Cuánto tiempo tardará en llegar al destino?

// const velocidadLuz = 3*10**8
// console.log(velocidadLuz);
// nave = (velocidadLuz*0.7)
// console.log(nave);
// const añoLuz = 9.46*10**12
// console.log(añoLuz);
// planeta = (10.000 * añoLuz);
// console.log(planeta);
// tiempoTotal = (nave*planeta);
// console.log(tiempoTotal);


// culpable = prompt ( '¿ eres culpable ?');
// if (culpable === 'si') {
//     carcel=true
// } else if (culpable==='no') {
//     carcel = false
// } 


// if (carcel === true) {
//     console.log('vas a la carcel')
// } else {
//     console.log('vas a casa')
// }

// helado dependiento del topping lo que cuesta 
// precio sin topping : 1.90 / topping oreo : 1  / kitkat : 1.50 / brownie :0.75
// programa dice en pantalla conn el topping selecionado ! 

heladoSolo = 1.90
precio = 0
precioTotal = 0


helado = prompt('¿quiere topping');
if (helado === 'si') {
    topping = true
} else if (helado === 'no') {
    topping = false
}

if (topping== 'oreo') {
    precio=1
}else if ( topping == 'kitkat') {
        precio = 1.50
} else if ( topping == 'brownie') {
        precio = 0.75
}

precioTotal = heladoSolo + precio ;
console.log(precioTotal);

