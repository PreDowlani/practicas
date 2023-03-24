const tareas = [
	{
		hora: '01:00',
		tarea: 'Planchar',
		prioridad: 'urgente',
	},
	{
		hora: '08:00',
		tarea: 'Desayuno',
		prioridad: 'alta',
	},
	{
		hora: '08:30',
		tarea: 'Revisar llamadas',
		prioridad: 'alta',
	},
	{
		hora: '10:00',
		tarea: 'Reunión con plantilla',
		prioridad: 'media',
	},
	{
		hora: '12:00',
		tarea: 'Llamar a Hacienda',
		prioridad: 'baja',
	},
	{
		hora: '14:00',
		tarea: 'Almuerzo',
		prioridad: 'media',
	},
	{
		hora: '16:00',
		tarea: 'Cita con abogado',
		prioridad: 'media',
	},
	{
		hora: '18:00',
		tarea: 'Café',
		prioridad: 'alta',
	},
	{
		hora: '18:30',
		tarea: 'Reunión proyecto ',
		prioridad: 'alta',
	},
	{
		hora: '19:00',
		tarea: 'Agenda de mañana',
		prioridad: 'media',
	},
	{
		hora: '20:10',
		tarea: 'Supermercado',
		prioridad: 'media',
	},
];

// Ej1 : Crear una función que devuelva todas las tareas con prioridad alta.

alta = tareas.filter(function(prior) {
    return prior.prioridad === 'alta'  // si es solo un igual (=alta) todas se convierten en alta
})
console.log(alta)

// EJ:2 Crear una función que añada a cada tarea la propiedad tipo (personal o trabajo).Ahora extraer de la lista todas las tareas personales. A continuación, extraer las que son propias del trabajo.
//opcion 1 :
añadir = tareas.forEach(function(añade) {
        random = Math.floor(Math.random()*2);
    if (random === 0) {
        random = 'personal'
    } else {
        random = 'trabajo'
    }

    return añade.tipo = random;
})
console.log(tareas)

//opption 2
//  function random () {
//     aleatorio = Math.floor(Math.random()*2)
//     if (aleatorio === 0) {
//     aleatorio = 'personal'
//     } else {
//         aleatorio = 'trabajo'
//     } return aleatorio
    
//  }
//  console.log(random());

//  añadir = tareas.forEach(function(añade) {
//     return añade.tipo = random()
//  });

//  console.log(tareas);

//EXTRAER PERSONAL
extraerP =  tareas.filter(function(splitP) {
    return splitP.tipo === 'personal'
})

console.log(extraerP);

//EXTRAER TRABAJO
extraerT = tareas.filter(function(splitT) {
    return splitT.tipo === 'trabajo'
})

console.log(extraerT);


// Ej:3 ¿Existe alguna tarea que tenga prioridad baja? Comprobarlo. Si existe, extraer la/s tarea.

priorBaja1 = tareas.some(function(baja1) {
    return baja1.prioridad === 'baja'
})
console.log(`Existe alguna tarea que tenga la prioridad baja ? : ${priorBaja1}`) 

priorBaja = tareas.filter(function(baja) {
    return baja.prioridad === 'baja'
})

console.log(priorBaja)

// Ej4 : ¿Cuántas tareas son reuniones? Extraerlas. Basándonos en el resultado, crear una función que muestre en consola un mensaje que nos informe: “Tiene una reunión a las: hora de la reunión”

reuniones = tareas.filter(function(reun) {
    return reun.tarea.includes('Reunión')
})

console.log(reuniones)

informe = reuniones.forEach(function(inf) {
    console.log(`Tiene un reunión a las ${inf.hora}`)
});

// Ej :5 Crear una lista (array) con todas las tareas que estén programadas para después de las 12:00.

tareasTarde = tareas.filter(function(tarde) {
    return tarde.hora > '12:00'
})

console.log(tareasTarde)


