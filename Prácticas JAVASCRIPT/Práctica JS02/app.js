//  1-	Crear un programa que solicite la edad del usuario y le responda si es o no mayor de edad.

edad = prompt('¿cuantos años tiene ? ');
edad = parseInt (edad);
console.log(edad);

if (edad >=18) {
    console.log('usted es mayor de edad')
} else {
    console.log('usted es menor de edad')
}

// 2-	Un programa deberá tomar dos números pedidos al usuario e indicar cuál de los dos es mayor.

numero1 = prompt ('choose a number');
numero2 = prompt ('choose another number')

if ( numero1 > numero2) {
    console.log('el primer numero es mayor que el segundo')
} else {
    console.log('el segundo numero es mayor que el primero')
}

// 3-	Crear un programa que pida un número y muestre en consola si es par o impar. Pista: Utilizar el operador %

numero = prompt ('introduzca un numero')
numero = parseFloat (numero % 2);
console.log(numero);

if (numero === 1) {
    console.log('su numero es impar')
} else {
    console.log('su numero es par')
}

// 4-	El programador cuenta con los precios de 3 helados diferentes y de tres topping diferentes (nueces, nubes y chocolate). Crear un programa en el que se le pregunte al usuario que helado quiere y en función de este aplique un precio de topping según el helado (topping para helado de vainilla, turrón o chocolate, por ejemplo). A continuación, mostrará en consola el precio del helado + el topping

hVan = 1.20
hTur = 1.50
hChoc = 1.90
tNueces = 1.20
tNubes = 0.80
tChocolate = 1.80

vainilla = (hVan + tNueces)
turron = (hTur + tNubes)
chocolate = (hChoc + tChocolate)


pregunta = prompt ( '¿que helado quiere? vainilla , turron o chocolate');


if ( pregunta === 'vainilla') {
    console.log('con topping de nueces su precio sera : '+ vainilla ) 
} else if ( pregunta === 'turron') {
    console.log('con topping de nueces su precio sera : ' + turron)
} else if ( pregunta === 'chocolate' ) {
    console.log('con topping de nueces su precio sera : '+ chocolate)
} else {
    console.log('no tenemos helado')
}

// 5-	En una aplicación web para colecciones de libros un programa debe comprobar si un usuario está en el sistema o no. Si lo está, mostrará el mensaje “Comprobación rutinaria”. Si no lo está le pedirá que entre en el sistema.
// No es necesario pedir nada por prompt.

usuarioHaEntrado = Math.random ()*1
usuarioHaEntrado = Math.round ( usuarioHaEntrado)

usuarioHaEntrado? console.log('comprobación rutinaria') : console.log('entre en el sistema')

// 6-	En una aplicación web para la gestión de valores se ofrecen 3 tipos de suscripciones : básico, plus y premium. Crear un programa que solicite el tipo de suscripción que desea y mostrarle en pantalla el mensaje: “Debe pagar … euros mensuales por la suscripción …”

basico = 4.95
plus = 6.95
premium = 9.95

susB = basico
susP = plus
susPre = premium

const suscripcion = prompt ('¿que suscripcion desea : básico , plus o premium ?')

switch (suscripcion) {
    case 'basico' :
        console.log('Debe pagar : '+ susB + '€');
        break ;
    case 'plus' :
        console.log('Debe pagar : ' + susP + '€');
        break;
    case 'premium' :
        console.log('Debe pagar : ' + susPre + '€');
        break;
    default :
    console.log('no hay mas opciones');
    break;         
}

// 7-	El usuario de una cuenta quiere entrar en esta. Hacer un programa que verifique que ha pagado su cuota mensual. Mostrar los mensajes necesarios.
// Nota: ¿Cómo simular si ha pagado la cuota? Con el método random()

usuario = Math.random()*1;
usuario = Math.round (usuario);
console.log(usuario)

if (usuario) {
    console.log('El ussuario ha pagado la cuota mensual')
} else {
    console.log('El usuario debe pagar la cuota mensual')
}

// 8-	En una empresa de desarrollo web quieren crear una aplicación para la gestión de criptomonedas. Elegir 3 criptomonedas al azar. La aplicación será capaz de convertir valores de criptomonedas. Ejemplo: de Bitcoin a Ethereum.
// Nota: Con 3 ejemplos de conversión es suficiente.

bitcoin = 21.503
ethereum = 1511,38
dogeCoin = 0.1347
liteCoin = 90.13

bitEth = bitcoin/ethereum
bitDogc = bitcoin/dogeCoin
bitLite = bitcoin/liteCoin


monedas = prompt ('¿cuántas monedas de bitcoin quiere cambiar ?')
monedas = parseInt (monedas);


const cripto = prompt ('¿que cripto quiere cambiar ? (litecoin , ethereum , dogecoin)')

switch (cripto) {
    case 'litecoin' :
        console.log('el valor de LiteCoin es : '+ liteCoin  );
        console.log('su valor de Bitcoin a litecoin : ' + monedas*bitLite);
        break;
    case 'ethereum' :
        console.log('el valor de Ethereum es : '+ ethereum);
        console.log('su cambio de bitcoin a ethereum es : ' + monedas*bitEth);
        break;
    case 'dogecoin' :
        console.log('el valor de Dogecoin es : ' + dogeCoin);
        console.log('sucambio de bitcoin a dogecoin es : ' + monedas*bitDogc);
        break;
    default :
    console.log('No hay mas informacion de otras criptomonedas');
    break;
}

