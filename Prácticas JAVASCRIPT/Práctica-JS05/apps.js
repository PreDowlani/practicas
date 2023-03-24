// EJ: 1 Dada la regla del 50/30/20: 50% de los ingresos para las necesidades, 30% para caprichos y 20% para ahorro (todo después de impuestos).
// Tenemos un array con las ganancias después de impuestos de tus clientes. 
// Crear un objeto por cada cliente (poner nombre del cliente) donde se especifique cada uno de los elementos 50/30/20 con sus valores.

const clientes = [ {
    nombre : 'Juan Cuesta',
    ingresos : 1500,
    necesidades : 1500/2,
    caprichos : 1500*0.3,
    ahorro : 1500*0.2
},
{
    nombre : 'Emilio Delgado',
    ingresos : 800,
    necesidades : 800/2,
    caprichos : 800*0.3,
    ahorro : 800*0.2
},
{
    nombre : 'Vicenta Benito',
    ingresos : 1300,
    necesidades : 1300/2,
    caprichos : 1300*0.3,
    ahorro : 1300*0.2
},
{
    nombre : 'Mariano Delgado',
    ingresos : 650,
    necesidades : 650/2,
    caprichos : 650*0.3,
    ahorro : 650*0.2
}

]
console.log(clientes);

// EJ:2 Crear dos Arrays. Uno tendrá el nombre de trabajadores de una empresa. El otro, la ocupación de cada uno.
// Crear un array de objetos que contengan: nombre de trabajador/ocupación para cada uno de ellos

const trabajadores = ['Aída Garcia','Luisma Garcia','Maruricio Colmenero','Jose María ']

const ocupación = ['Camarera de Pisos','Barrendero','Camarero','Panadero']
console.log(trabajadores);
console.log(ocupación);

//opcion 1
const empresa = [];

for(i=0;i<trabajadores.length; i++) {
    empresa.push(trabajadores[i], ocupación[i]);
}
console.table(empresa);
//opcion 2
newEmpresa = [trabajadores,ocupación];
console.table(newEmpresa);


// Ej : 3 Crear un array de objetos, donde cada objeto contendrá los siguientes valores:
// id (identificativo)
// nombre
// suscripcion (tipo de suscripción: básica, plus, premium)
// credito (cantidad de dinero en cuenta) 
// activo: verdadero o falso

// El array lo crearemos directamente en el programa e introduciremos datos ficticios. Con 4 objetos será suficiente.
const youTv = [{
    id:1,
    nombre:'Peter Parker',
    suscripcion:'plus',
    credito:250000,
    activo:true
},
{
    id:2,
    nombre:'Steve Rogers',
    suscripcion:'basico',
    credito:100000,
    activo:false
},
{
    id:3,
    nombre:'Tony Stark',
    suscripcion:'premuim',
    credito:350000,
    activo:true
},
{
    id:4,
    nombre:'Natasha Romanoff',
    suscripcion:'premium',
    credito:280000,
    activo:false
}
]
console.log(youTv);

// El programa será capaz de mostrar cualquier usuario en base a su id.

usuarioId = Number(prompt('Mostrar usuario en base a su id (1-4)'));
console.log('Ha elegido en usuario con el id: '+ usuarioId);


for (i=0; i<youTv.length;i++){
    console.log(youTv[usuarioId-1]);
    break;
}

// También podrá cambiar la suscripción y el crédito del usuario.

usuarioId2 = Number(prompt('Eliga un usuario que quiere Modificar en base a su id (1-4)'));
console.log(usuarioId2);
suscrip = prompt('¿Que suscripcion quiere cambiar? (básico , plus, premuim');
credit = Number(prompt('¿Con cuanto crédito ?'));
console.log(`Ha elegido la suscripcion ${suscrip}`);
console.log(`Por un crédito de ${credit}`);

youTv[usuarioId2-1].suscripcion = suscrip;
youTv[usuarioId2-1].credito = credit;
console.log(youTv);

// Además de ello, debe ser capaz de eliminar un usuario en base a su nombre.

newYouTv = [...youTv];
console.log(newYouTv);

// opcion 1
nombreEliminar2 = Number(prompt('Que usuario quiere eliminar? Eliga por id (1-4) : 1-Peter, 2-Steve, 3-Tony, 4-Natasha'));
console.log(`Ha elegido elimnar al usuario ${nombreEliminar2}`);

for(i=0; i<newYouTv.length; i++){
    if(newYouTv[i].id === nombreEliminar2) {
        newYouTv.splice([i],1);
    }
}
console.table(newYouTv);

// opcion 2
// nombreEliminar2 = Number(prompt('Que usuario quiere eliminar? Eliga un número : 1-Peter, 2-Steve, 3-Tony, 4-Natasha'));
// console.log(`Ha elegido elimnar al usuario ${nombreEliminar2}`);

// newYouTv.splice(nombreEliminar2-1,1);
// console.log(newYouTv);



// opcion 3
// nombreEliminar = Number(prompt('Que usuario quiere eliminar : Peter, Steve, Tony, Natasha'));
// console.log(`Ha elegido elimnar al usuario ${nombreEliminar}`);

// if (nombreEliminar === 'Peter') {
//     newYouTv.splice([0]);
//     // console.log(newYouTv);
// } else if ( nombreEliminar === 'Steve') {
//     newYouTv.splice([1])
//     // console.log(newYouTv);
// } else if (nombreEliminar === 'Tony') {
//     newYouTv.splice([2]);
// } else if (nombreEliminar === 'Natasha') {
//     newYouTv.splice([3]);
// } else {
//     console.log(`Ha elegido usuario incorrecto`);
// }
// console.log(newYouTv);

// Por otro lado, debe tener la capacidad de desactivar a un usuario.

usuarioDes = prompt('Qué usuario quiere desactivar ?(Peter, Steve, Tony, Natasha )');
console.log(`Ustede a elegido desactivar a : ${usuarioDes}`);


for (i=0; i<newYouTv.length; i++) {
    if(newYouTv[i].nombre.includes(usuarioDes)){
        newYouTv[i].activo = false;
    }
}
console.table(newYouTv);

// Por último, el programa debe saber crear un usuario completo.

id = Number(prompt('Eliga un número id de 5 a 100'));
console.log(id);


nombre = prompt('Escriba su nombre');
console.log(nombre);

suscripcion = prompt('Que suscripcion desea : basico, plus, premium ?');
console.log(`Ha elegido : ${suscripcion}`);

credito = Number(prompt('Con cuánto crédito?'));
console.log(`Ha añadido : ${credito}`);

//todos los clientes nuevos por predeterminación salen como desactivos 
activo = false;

nuevoUsuario = {
    id,nombre,suscripcion,credito,activo
}
console.log(nuevoUsuario);

newYouTv =[...newYouTv,nuevoUsuario];

console.table(newYouTv);






    












