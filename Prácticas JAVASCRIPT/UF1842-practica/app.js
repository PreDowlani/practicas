const trabajadores = [
	1,
	'Irina Sánchez',
	true,
	2,
	'Laura Linares',
	false,
	3,
	'Sofía de Palma',
	true,
	4,
	'Paco Rabinne',
	true,
];

console.log('Estos son todos los trabajadores');
console.table(trabajadores);
// // Ej. 1 - Mostrar los datos de cada usuario en base a su id
// id = 2;
// pos = trabajadores.indexOf(id);
// trabajador = trabajadores.slice(pos, pos + 3);
// console.log(
// 	`id: ${trabajador[0]}, nombre: ${trabajador[1]}, ¿activo?: ${trabajador[2]}`
// );

// // Ej.2 - Eliminar un usuario en base a su id.
// id = 3;
// posEl = trabajadores.indexOf(id);
// nombre = trabajadores[posEl + 1];
// trabajadorEliminado = trabajadores.splice(posEl, 3);
// console.log(`Eliminado el trabajador: ${nombre}`);
// console.table(trabajadores);

// // Ej. 3 - Desactivar un usuario en base a su id
// id = 4;
// posDes = trabajadores.indexOf(id);
// trabajadores[posDes + 2] = !trabajadores[posDes + 2];
// console.table(trabajadores);

// Ej. 4 - Crear un usuario nuevo

// Pedir id y comprobar
do {
	incluido = false; // en principio suponemos que el id no está entre los existentes
	id = parseInt(prompt('Introduzca id de usuario (entre 1 y 1000)'));
	if (id < 1 || id > 1000) {
		alert('El id debe ser un número entre 1 y 1000');
	}
	if (trabajadores.includes(id)) {
		// Nos preguntamos si el id que se ha introducido ya existe
		incluido = true;
		alert('Ese id ya existe. Introduzca uno nuevo');
	}
} while (id < 1 || id > 1000 || incluido === true);

// Pedir  nombre de usuario
nombre = prompt('Nombre de usuario');

// Pedir si usuario está activo y comprobar si la respuesta es si o no
do {
	activo = prompt('El usuario está activo? ¿si o no?');
} while (activo !== 'si' && activo !== 'no');

activo === 'si' ? (activado = true) : (activado = false);

trabajadores.push(id, nombre, activado);
console.table(trabajadores);
