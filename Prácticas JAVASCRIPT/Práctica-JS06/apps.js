// 1- Crear un array de objetos con los datos de 4 clientes inventados. Directamente en el programa (sin pedirlo por el prompt)

const empresaAdf = [ {
    nombre : 'Mario',
    clasificación : 'VIP',
    carteras: 'IBEX',
    ganancias : 5000,
    activo : true
},
{
    nombre : 'Luigi',
    clasificación : 'Medio',
    carteras: 'S&P',
    ganancias : 4000,
    activo : false
},
{
    nombre : 'Bowser',
    clasificación : 'Bajo',
    carteras: 'NIKKEI',
    ganancias : 1000,
    activo : false
},
{
    nombre : 'Yoshi',
    clasificación : 'Alto',
    carteras: 'NASDAQ',
    ganancias : 2500,
    activo : true
}
];
console.table(empresaAdf);

// 2- Cambiar la cartera de cualquier cliente según lo solicita el usuario (simularlo)
newEmpresaAdf = [...empresaAdf];

cliente = prompt('Eligia el cliente');
console.log(`Usted a elegido a ${cliente}`);
cartera = prompt('Por qué cartera quiere cambiar ? (NASDAQ, NIKKEI, S&P, IBEX)');
console.log(`Usted desea cambiar su cartera por : ${cartera}`);

for(i=0; i<newEmpresaAdf.length; i++) {
    if(newEmpresaAdf[i].nombre.includes(cliente)) {
        newEmpresaAdf[i].carteras = cartera;
    }
}
console.table(newEmpresaAdf);

// 3- Eliminar cualquier cliente que pida el usuario (simularlo)

cliente2 = prompt('Eliga el usuario que desea eliminar : Mario, Luigi, Bowser, Yoshi');
console.log(`Usted a elegido a eliminar a : ${cliente2}`);

for (i=0; i<newEmpresaAdf.length; i++) {
    if (newEmpresaAdf[i].nombre.includes(cliente2)) {
        newEmpresaAdf.splice([i],1);
    }
}
console.table(newEmpresaAdf);

// 4- Añadir cliente nuevo (simularlo)

nombre = prompt('Indique su nombre');
clasificación = prompt('Su calificación : Bajo, Medio, Alto, VIP');
carteras = prompt('Eliga su cartera : IBEX, S&P, NIKKEI, NASDAQ');
ganancias = Number(prompt('Indique sus ganancias'));
activo = true; //lo añadimos por defecto.

nuevoUsuario = {nombre,clasificación,carteras,ganancias,activo};
console.table(nuevoUsuario);

newEmpresaAdf = [...empresaAdf,nuevoUsuario];
console.table(newEmpresaAdf);

//5- Mostrar todos los clientes con ganancias (cartera positiva)

for (i=0; i<newEmpresaAdf.length; i++) {
    console.log (`las ganancias de los clientes : ${newEmpresaAdf[i].ganancias}`);
 }