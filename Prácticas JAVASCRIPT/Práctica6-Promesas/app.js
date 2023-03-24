// Lat, Long
// https://www.gps-coordinates.net
// Tokyo: 35.6828387,139.7594549
// Berlin: 52.5170365,13.3888599
// Praga: 50.0874654,14.4212535
// Las Palmas de G.C. : 28.12584114074707,-15.434992790222168
// Viena: 48.239460835879946,16.276373828906145
// Bruselas: 50.84828677289808,4.351149733536177

geoloc = [
	{
		lugar: 'Tokyo',
		posicion: [35.6828387, 139.7594549],
	},
	{
		lugar: 'Berlín',
		posicion: [52.5170365, 13.3888599],
	},
	{
		lugar: 'Praga',
		posicion: [50.0874654, 14.4212535],
	},
	{
		lugar: 'Las Palmas de Gran Canaria',
		posicion: [28.12584114074707, -15.434992790222168],
	},
	{
		lugar: 'Viena',
		posicion: [48.239460835879946, 16.276373828906145],
	},
];

// 1-	Crear una función que muestre todos los datos de la lista utilizando un temporizador (simular 2 segundos de retardo debido a la conexión con el servidor)

    function geo () {
    for(i=0; i<geoloc.length;i++) {
        console.table(geoloc[i])
     }}

function mostrarDatos ()  {
    setTimeout(() => {geo()},2000)
}
mostrarDatos();


// 2-	Crear otra función que inserte datos de otras ciudades en la lista y muestre a continuación la lista completa (simular 3 segundos de retardo)


function nuevos (lugar,posicion) {
     geoloc.push({lugar,posicion})
    
}
nuevos ('Noruega',[526541,54584])
// console.table(geoloc)

function listaCompleta () {
    setTimeout(() => {nuevos},3000)
}

listaCompleta()

// 3-	Repetir los ejercicios 1 y 2 mediante la creación de una promesa. Tener en cuenta la gestión de errores.
//Repetir ej 1 :
const ejercicio1 = () => {
	return new Promise((resolve, reject) => {	
		let error = false;  // si es true sale el error ( reject) , si es false sale lo que aparece en reolve ! 
		setTimeout(() =>{
			if (error) {
			reject ('No se puede mostrar los datos ')
		} else {
			resolve (mostrarDatos());
			console.log('Se van a mostrar los datos')
		}
		},2000)
		
	});
};
ejercicio1()
.then (console.log(`Listado completo`))
.catch((error) => console.log(error));

//Repetir ej :2
nuevos ('España', [2315054,2525])

const ejercicio2 = () => {
	return new Promise((resolve, reject) => {	
		let error = true;  // si es true sale el error ( reject) , si es false sale lo que aparece en reolve ! 
		setTimeout(() =>{
			if (error) {
			reject ('No se puede mostrar los datos ')
		} else {
			resolve (listaCompleta(nuevos));
			console.log('Se van a mostrar los datos')
		}
		},3000)
		
	});
};
ejercicio2();

// 4-	Crear una promesa que solicite una localización y la elimine del array. 
	//Option 1 :
	//  buscarLocalizacion = geoloc.findIndex((buscar) => {
	// 	return  buscar.lugar.includes('Viena');
	// })
	// //  console.log(buscarLocalizacion)

	// //  borrar = geoloc.splice(buscarLocalizacion,1)

	// //  console.table(geoloc)

	//  	 buscarLoca = () => {
	// 	return new Promise ((resolve,reject) => {
	// 		let error = false;
	// 		if ( error) {
	// 			reject ('No se puede eliminar al Lugar elegido')
	// 		} else {
	// 			resolve(geoloc.splice(buscarLocalizacion,1))
	// 		}
	// 	})
	//  }
	//  	buscarLoca();
	

		//option 2 : eliminar el lugar piediendo el prompt
		lugar = prompt('dime un lugar : Tokyo,Berlín,Praga,Las Palmas de Gran Canaria,Viena,Noruega,España');
	 	buscarLocalizacion = geoloc.findIndex((buscar) => {
		return  buscar.lugar.includes(lugar);
	})

		 	 buscarLoca = () => {
		return new Promise ((resolve,reject) => {
			let error = false;
			if ( error) {
				reject ('No se puede eliminar al Lugar elegido')
			} else {
				resolve(geoloc.splice(buscarLocalizacion,1))
			}
		})
	 }
	 	buscarLoca();

		// 5-	Por último, crear una promesa que modifique la localización de alguna de las ciudades incluidas en la fuente de datos.
	 	lugar2 = prompt('Elige el pais que quiere cambiar :Tokyo,Berlín,Praga,Las Palmas de Gran Canaria,Viena,Noruega,España');
		modificar = Number(prompt('Cordenadas que quiera cambiar'));
		modificar2 = Number(prompt('Segunda cordena'));

		function datosModificar ()  {
			for(corde of geoloc) {
				if( corde.lugar === lugar2){
					corde.posicion[0] = modificar
					corde.posicion[1] = modificar2
				} 
			} 
		}
	 	
		modificarLoca =() => {
			return new Promise ((resolve,reject) => {
				let error = false ;
				if (error) {
					reject ('No se puede cambiar las cordenadas')
				} else {
					resolve (datosModificar())
				}
			})
		}

		modificarLoca() // hay que hacer el callback siempre !! 











	







