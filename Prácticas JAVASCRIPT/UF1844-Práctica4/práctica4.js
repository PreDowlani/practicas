const personal = [
	{
		id: 101,
		nombre: 'Santiago Goñi',
		puesto: 'Programador Junior',
		salario: 12000,
		status: 'Para despido',
		activo: true,
		proyectos: ['Fooofle Pixtel'],
	},
	{
		id: 102,
		nombre: 'Caridad Navarrete',
		puesto: 'Programadora Junior',
		salario: 12000,
		status: 'Prueba',
		activo: true,
		proyectos: ['Editor de texto'],
	},
	{
		id: 103,
		nombre: 'Isabel Almedia',
		puesto: 'Programadora Senior',
		salario: 120000,
		status: 'Óptimo',
		activo: true,
		proyectos: ['Fooofle Pixtel', 'Gestión VA'],
	},
	{
		id: 104,
		nombre: 'Cara Lana',
		puesto: 'Gestora de Proyectos',
		salario: 360000,
		status: 'Óptimo',
		activo: true,
		proyectos: ['Fooofle Pixtel', 'Gestión VA', 'R3D3', 'Backend SpaceY'],
	},
	{
		id: 105,
		nombre: 'Alberto Serrano',
		puesto: 'Especialista Front-End',
		salario: 240000,
		status: 'Superior',
		activo: true,
		proyectos: ['Fooofle Pixtel', 'Gestión VA', 'R3D3'],
	},
	{
		id: 106,
		nombre: 'Simón Escrivá',
		puesto: 'Director Ejecutivo',
		salario: 400000,
		status: 'Pobre',
		activo: true,
		proyectos: ['Fooofle Pixtel', 'Gestión VA', 'R3D3', 'Backend SpaceY'],
	},
];


// Ej 1 : Localizar todos los empleados que están en Prueba

localizar = personal.filter((loca) =>{
    return loca.status.includes('Prueba')
})

console.log(`Localizamos todos los empleados que estan en Prueba`)
console.table(localizar);

// Ej2 : Tenemos una empleada en pruebas: Caridad, con id: 102, que queremos pasar a status de Revisión. Localizar a la empleada y hacer la modificación.

cambiarSt = personal.find((cambiar)=> {
    
    return   cambiar.id === 102
})

cambiarSt.status='Revisón'
console.log(`Cambiamos el estado de Caridad`)
console.log(cambiarSt)

// Ej:3 Nos piden si hay algún empleado que cobre 12.000€ anuales. Confirmar si existe/n y crear un listado con el/los empleados que cumplan el requisito.

sueldo = personal.some((money) =>{
    return money.salario === 12000
})

console.log(sueldo)

informe = personal.filter((list) =>{
    return list.salario === 12000
})
console.log(`El sueldo de los empleados que cobran 12000 €`)
console.log(informe)

// Ej:4 Modificar el precio de los Programadores Junior a 14.000€/año, en un gesto de ‘buena voluntad’
//option 1
modificar = informe.filter((edit) => { //son los dos programadores junior del ejercico anterior
    return edit.salario = 14000
})

console.log(`Por buena fe vamos a subirles el sueldo a ${modificar[0].salario} euros anuales`) //para mostrar hay que poner el index[] . lo siguente para mostrar en pantalla

//option 2 

// programadorJunior = personal.filter((junior) =>{
//     return junior.puesto.includes('Junior')
// })
// console.log(programadorJunior)

// editar = programadorJunior.forEach((modif) => {
//     modif.salario = 14000
// })



// Ej: 5 Comprobar si todos los trabajadores están actualmente en activo. En cualquier caso, el Director Ejecutivo está de baja por depresión. Desactivarlo.

activos = personal.every((active) => {
    return active.activo === true;
})

console.log(activos)

bajaDepresion = personal.find((bajaDep) => {
    return bajaDep.puesto === 'Director Ejecutivo'
})

bajaDepresion.activo = false
console.log(`El Director Ejecutivo esta de baja entconces cambiar su estadio activo a : ${bajaDepresion.activo}`)
console.table(bajaDepresion)



// Ej:6 Teniendo en cuenta que, por defecto, El Director Ejecutivo y la Gestora de Proyectos llevan todos los proyectos, nos piden que:    
 
// A: Listemos todos los empleados que trabajan en el proyecto ‘Foofle Pixtel’.

proyecto = personal.filter((proj) => {
    return proj.proyectos.includes('Fooofle Pixtel') && proj.puesto !==('Director Ejecutivo') && proj.puesto !== ('Gestora de Proyectos')
})

console.log(`Listado de empleados que trabajan en el Proyecto FOOOFLE PIXTEL`)
console.table(proyecto)

// B: Asignar a los programadores junior o senior un nuevo proyecto llamado ‘Working Title’.

asignar = personal.filter((add) => {
    return add.puesto.includes('Junior') || add.puesto.includes('Senior')
})

console.log(asignar)

NewProyecto = asignar.forEach((newpr) =>{
    newpr.proyectos.push('Working Title') //no hace falta poner el [] para añadir el string dentro de un array !
})

console.log(`Asignamos a los programadores (Junior y Senior) un proyecto llamado WORKING TITLE`)
console.table(personal);

// C: Eliminar todos los proyectos de Santiago Goñi y desactivarlo.

eliminar =  personal.find((eli) =>{
    eli.nombre === 'Santiago Goñi'
    eli.activo = false
    delete eli.proyectos
    return eli
}) 
console.log(`Hemos eliminado todos los proyectos de Santiago Goñi y lo hemos desactivado`)
console.table(eliminar)

// Ej:7 Por cuestiones de mantenimiento vamos a desactivar a todos los usuarios durante un tiempo. Sin modificar el array principal, implementar la función que realizará la desactivación.


console.table(personal);
nuevoPersonal =[...personal]

desactivar = nuevoPersonal.map((desact) => {
	return desact.activo = false
})

console.log(`Vamos a desactivar a todos los usuarios durante un tiempo`);
console.table(nuevoPersonal)

