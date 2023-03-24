// EJ 1 :Desarrollar una función que recibe 3 parámetros referidos a un producto: nombre, precio y descuento. La función devolverá por pantalla el nombre del producto y el precio con el descuento aplicado.

nombre = 'Portatil';
precio = 100;
descuento = 0.3;

function descuentoAplicado (nombre,precio,descuento) {
    return ('El '+ nombre + ' con descuento le saldrá ' + (precio-(precio*descuento)));
}

resultado = descuentoAplicado(nombre,precio,descuento); 
console.log(resultado);

// EJ 2 :Crear una función a la que se le pasan los parámetros correspondientes a nombre, contraseña y departamento.
// La función deberá crear un array con dichos parámetros cuando se la llama.


function crearArray (nombre2,contraseña,departamento) { 
    trabajo = []
    trabajo.push(nombre2,contraseña,departamento);
    return trabajo;
}
    nombre2 = 'Pepe' ;
    contraseña = 'pepeloco25' ;
    departamento = 15 ;
 
    resultado2 = crearArray(nombre2,contraseña,departamento);
    console.log(resultado2);


    //EJ: 3 Hacer el mismo apartado anterior, con la diferencia de que ahora la función devolverá un objeto.

    function crearObjeto (nombre3,contraseña3,departamento3) {
        objeto = {nombre: nombre3, 
            contraseña: contraseña3, 
            departamento: departamento3};

        return objeto
    }
    nombre3 = 'Pepe' ;
    contraseña3 = 'pepeloco25' ;
    departamento3 = 15 ;

    resultado3 = crearObjeto(nombre3,contraseña3,departamento3);
    console.log(resultado3);

    // EJ:4 Un array contiene todos los tweets que ha enviado una persona en las últimas 24 horas. Mediante una función debemos mostrar un mensaje que indique si ha enviado más de 5 tweets en ese período

    tweets = ['bajas los impuestos','la vivienda está cara','ayuda de los 200 euros','netflix sube de precio','los sueldos bajan','los politicos ganan mas dinero','las fucinones cuestan mucho'];

    function masdeCino (tweets) {
         
        if(tweets.length >= 5){
            console.log(`Se ha enviado mas de 5 tweets`)
        }
    } 
    
    masdeCino(tweets);

    // EJ:5 Desarrollar una función a la que se le pasa un String con varios nombres separados por una coma (,). La función deberá devolver un array que contenga cada nombre por separado.

    
    variosNombres = 'Goku,Gohan,Piccolo,Vegeta,Krilin,Yamcha';

    function separarPorComas(variosNombres) {
       return variosNombres.split(","); //split te crea un Array !! 
        
    } 
    console.log(separarPorComas(variosNombres));

    // Ej : 6 Crear una función que convierte un array de números en otro array similar con los números cambiados de signo (+/-)

    numeros = [2,25,1,5,13,5,28,63];
    
    function CambioSigno(numeros) {
        numerosCambiados = [] 
        for(numb of numeros) {
            numerosCambiados.push(numb*(-1));
        } return numerosCambiados
    }
    console.log(CambioSigno(numeros))
    console.log(numeros)

    // EJ : 7 Crear una función “tirar dado” a la que se le pasa un número cualquiera entre 1 y 100 y devuelve cualquier número al azar en ese rango
    
    numeroAzar = Number(prompt('Eliga un numero entre 1 a 100'));

    function rangoDado(numeroAzar) {
        newNumber = Math.floor(Math.random()* numeroAzar + 1)
        return newNumber
    }
    console.log(rangoDado(numeroAzar));


    // EJ : 8 Crear un array de objetos, siendo cada objeto una tarea que contenga: hora, tarea y prioridad (urgente, alta, media, baja).	
    // Crear ahora una función que reciba el array y la hora del día y devuelva un mensaje indicando si la tarea ya está vencida.

    curoJavaScript = [ {
        hora : '09:00',
        tarea : 'funciones',
        prioridad : 'urgente'
    },
{
    hora : '11:30',
    tarea : 'desayunar',
    prioridad : 'alta'
},
{
    hora : '12:30',
    tarea : 'ejercicios',
    prioridad : 'baja'
}]

pregunta  = prompt('Eliga una hora (ej: 14:25)');
console.log(`Ha selecionado la hora ${pregunta}`)

function tareas(curoJavaScript) {
    for(curso of curoJavaScript) {
        if (curso.hora < pregunta) {
            console.log(`Tarea vencida`)
        } else {
            console.log(`Tarea pendiente a realizar`)
        }
    }

}
 tareas(curoJavaScript);
    
// EJ : 9   Crear una función para validar una contraseña. 
// La función aceptará dos parámetros: contraseña y nombre de usuario.
// Deberá validar que: 
// 1-	La clave contenga al menos 8 caracteres
// 2-	No contenga espacios
// 3-	No sea igual al nombre
// Si todo es correcto devolverá true y si no false.

usuario = prompt('Nombre del usuario');
password = prompt('crear contraseña');

//option 1 :
// function email(password) {
    
//     if (password.length < 8){

//         if (password.includes(' ')){
//             return false; 
//         } 
//         if (password === usaurio) {
//             return false
//         } 
//     } 
        
//     else {
//     } return true
// }

// console.log(email(password));

// option 2 :

function comprobar(password) {
    if (password.length < 8 || password.includes(" ") || password === nombre) {
      return false;
    } else {
      return true;
    }
  }

  console.log(comprobar(password));


    
    


    
    
 
    
    
    
 





