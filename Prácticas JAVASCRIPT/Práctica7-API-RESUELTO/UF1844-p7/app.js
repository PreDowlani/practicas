const productos = `[
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

// Ej. 1
// const mostrar = (listaProductos) => {
//   const datosJS = JSON.parse(listaProductos);
//   return datosJS;
// };

// resultado = mostrar(productos);
// console.log(resultado);

// Ej. 3
const muestraClientes = async () => {
  try {
    const datos = await axios.get(
      "https://62c2b8db876c4700f52c4f1c.mockapi.io/api/v1/clientes"
    );
    return datos;
  } catch (error) {
    console.log("Error en la recuperación de datos" + error);
  }
};

muestraClientes()
  .then((clientes) => {
    // clientes equivale a datos en la función principal (return datos)
    console.log(clientes.data);
  })
  .catch((error) => console.log(error));

// // Ej. 3-b
// const muestraCliente = async (id) => {
//   try {
//     const datos = await axios.get(
//       `https://62c2b8db876c4700f52c4f1c.mockapi.io/api/v1/clientes/${id}`
//     );
//     return datos;
//   } catch (e) {
//     console.log(e);
//   }
// };

// id = 2;
// muestraCliente(id)
//   .then((datos) => {
//     console.log(datos.data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Ej. 3-c
// const addUsu = async (nombre, email, pass) => {
//   try {
//     const add = await axios.post(
//       "https://62c2b8db876c4700f52c4f1c.mockapi.io/api/v1/clientes",
//       {
//         nombre: nombre,
//         email: email,
//         password: pass,
//       }
//     );
//     // console.log(add);
//     return add;
//   } catch (e) {
//     console.log(e);
//   }
// };
// addUsu("Fran Dávila", "franio68@gggg.com", "franio1968")
//   .then((datos) => {
//     console.log(datos);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// Ej. 3-c
// console.log("PUT");
// const modUsu = async (id, nombre, email, pass) => {
//   try {
//     const nuevo = await axios.put(
//       `https://62c2b8db876c4700f52c4f1c.mockapi.io/api/v1/clientes/${id}`,
//       {
//         nombre: nombre,
//         email: email,
//         password: pass,
//       }
//     );
//     console.log(nuevo);
//   } catch (e) {
//     console.log(e);
//   }
// };

// modUsu(4, "Raymond Herman", "raher@hmail.com", "raher5678");

// Ej. 3-d
const borrarUsu = async (id) => {
  try {
    const borrar = await axios.delete(
      `https://62c2b8db876c4700f52c4f1c.mockapi.io/api/v1/clientes/${id}`
    );
    // console.log(borrar);
    return borrar;
  } catch (e) {
    console.log(e);
  }
};

idUsuario = 9;

// Recupera los datos del usuario quequeremos eliminar
borrarUsu(idUsuario)
  .then((datos) => {
    console.log(`Se ha eliminado al usuario`);
    console.log(datos); // Muestra un cliente en específico
  })
  .catch((err) => {
    console.log(err);
  });
