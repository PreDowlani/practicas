// En el siguiente Array localizar el numero 124 mostrar su datos e imprimirlos

numero = [123,'pepe',true,124,'juan',false,125,'maria',true];
console.log(numero);
console.log(numero[4]);

long = numero.length ; //se cuenta todo hasta el final
console.log(long);


for (i=0;i<long;i=i+3) { // aqui el i=i+3 salta de 3 en tres 
    if (numero[i]=== 124){ ;
    console.log(numero[i]);
    console.log(numero[i+1]); // este seria justo lo siguiente de 124 -> juan
    console.log(numero[i+2]); // este seria 2 mas que 124 -> false
    }

}

// mostrar de la forma 
usuario = prompt('Introduzca numero de usuario a localizar : entre 123 y 125');
usuario = parseInt(usuario);
if (usuario<123 || usuario>125){
    console.log('numero de usuario incorrecto');
}else {
for (i=0;i<long;i=i+3) {
    if(numero[i]===124) {
    if(numero[i+2]===true)    {estaActivo='activado'} else
    {estaActivo = 'desactivado'};
    console.log('En la posicion ' + numero[i] + ' tenemos a ' + numero[i+1] + ' .Este usuario está  '+ estaActivo);
    }
}
}
