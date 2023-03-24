 const practica7 =`[
    {
      "id":1,
      "marca": "Ray-Ban",
      "modelo": "Aviator",
      "precio": 125,
      "fechaventa": "12/10/2023"
    },
    {
      "id":2,
      "marca": "Emporio Armani",
      "modelo": "Flexi",
      "precio": 200,
      "fechaventa": "11/11/2022"
    },
    {
      "id":3,
      "marca": "Ray-Ban",
      "modelo": "Wayfarer",
      "precio": 145,
      "fechaventa": "9/9/2022"
    },
    {
      "id":4,
      "marca": "Guess",
      "modelo": "GU7741",
      "precio": 99,
      "fechaventa": "20/10/2023"
    },
    {
      "id":5,
      "marca": "Maui Jim",
      "modelo": "Red Sands",
      "precio": 218,
      "fechaventa": "12/10/2023"
    }
  ]`;
  
//   1-	Dado un array de objetos que represente los datos de un producto (id, marca, modelo, precio, fechaventa)  en formato JSON, crear una función que en base a los datos del ejercicio anterior muestre los datos de todos los productos en pantalla (en formato para JS)

//para  pasar de JS a JSON.parse().
// para pasar de JSON a JS -> JSON.stringfy()

// const ejercicio1 = JSON.parse(practica7);
// console.log(ejercicio1)

function mostrar(ejer) {
    return console.table(JSON.parse(ejer))
}
mostrar(practica7);

// 2-	Usar POSTMAN o Thunder Client para realizar las siguientes operaciones en la API de 
// -	Listar un usuario determinado
// -	Crear un usuario con todos los datos
// -	Modificar los datos de un usuario
// -	Eliminar un usuario

// Esta en el WORD ! 

// 3-	Utilizando MockAPI realizar las siguientes operaciones
// a.	Crear una BDD simulada denominada clientes con los siguientes datos: nombre, email, password
// b.	Mediante el uso de Axios, mostrar los datos de cualquier usuario.

// const mostrarDatos = async () => {
//     try {
//         datos = await axios.get('https://640099d39f8449102994a6c5.mockapi.io/api/d-w/Clientes');
//         return datos
//     } catch(error) {
//         console.log('Error' + error)
//     }
// };

// mostrarDatos()
// .then((datos) => {console.log(datos.data)}) // SE PUEDE PONER CUALQUIER NOMBRE , NO HACER FALTA PONER DATOS ! 
// .catch((err) => {console.log(err)})


// b : Mediante el uso de Axios, mostrar los datos de cualquier usuario

const mostrarCliente = async () => {
  try {
      datosCliente = await axios.get(`https://640099d39f8449102994a6c5.mockapi.io/api/d-w/clientes/${id3}`);
      return datosCliente
  } catch(error) {
      console.log('Error' + error)
  }
};

id3 = 5;
mostrarCliente(id3)
.then((muestra) => {console.log(muestra.data)}) // SE PUEDE PONER CUALQUIER NOMBRE , NO HACER FALTA PONER DATOS ! 
.catch((err) => {console.log(err)})

// c.	De la misma manera añadir un nuevo cliente a la BDD.

const crear = async () => {
    try {
        const nuevocliente = {
            nombre : 'Peter Parker',
            email : 'peterSpidey@marvel.com',
            password : 'ElHombreAraña',
            id : 54
        }
        const nuevosDatos = await axios.post(`https://640099d39f8449102994a6c5.mockapi.io/api/d-w/Clientes`,

          nuevocliente
        );
        return nuevosDatos;
    } catch (er){ () =>
        console.log('Errorrrrr ' + er)
    }
};


crear() 
.then((nuevosDatos)=> {console.log(nuevosDatos.data)})
.catch((errr)=> {console.log('Error' + errr)})

// d.	Modificar la password de un cliente en base a su id.

id = Number(prompt('Id que quiere modificar'));

const modificar = async () => {
	try {
		const datos2 = await axios.put(
			`https://640099d39f8449102994a6c5.mockapi.io/api/d-w/Clientes/${id}`,
      {
        password : 'pepeloco201251'
      } );
		return datos2
	} catch (error) {
		console.log('Error: ' + error);
	}
};

modificar()
	.then((datos2) => {
		console.log('Usuario modificado')
    console.log(datos2.data)
	})
	.catch((err) => {
		console.log(err);
	});


// e.	Eliminar cualquier usuario en función de su id.

id2 = Number(prompt('Id que quiere eliminar'))

const elimianr = async () => {
  try {
    const datos3 = await axios.delete(`https://640099d39f8449102994a6c5.mockapi.io/api/d-w/Clientes/${id2}`)
    return datos3
  } catch (err) {
    console.log('Error !! No se puede eliminar ' + err);
  }
}

elimianr()
.then((datos3) => {
  console.log( 'Usuario Eliminado ')
  console.log(datos3)
})
.catch((error) => {
  console.log(error)
});



