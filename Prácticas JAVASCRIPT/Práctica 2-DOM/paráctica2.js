// Crear un botón suscribirme tipo YouTube. Una vez pulsado cambiará a suscrito (tipo Youtube)

const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    if(btn.textContent === 'Suscribir'){
        btn.textContent = 'Suscrito';
        btn.style.backgroungColor = 'grey';
    } else {
        btn.textContent = 'Suscribir';
        btn.style.backgroundColor = 'red';
    }
})


 

// Crear un div con contenido (no mucho) en la página de tal manera que al pasar el ratón sobre este aparezca otro div donde se amplía información sobre el contenido.

nuevoDiv = document.createElement('div');
nuevoDiv.innerText='Nuevo Div';
contenidoDiv = document.createElement('p');
contenidoDiv.innerText = ('Crear un div con contenido (no mucho) en la página de tal manera que al pasar el ratón sobre este aparezca otro div donde se amplía información sobre el contenido');
nuevoDiv.append(contenidoDiv);
document.body.appendChild(nuevoDiv);


nuevoDiv.addEventListener('mouseenter', () => {
otroDiv = document.createElement('div-invisible');
otroDiv.innerText ='Hay que mostrar informacion invisble ,,, si no aparece estamos jodidos !! ';
nuevoDiv.appendChild(otroDiv)
});

nuevoDiv.addEventListener('mouseout', () => {
    otroDiv.style.visibility='hidden';
    otroDiv.innerText='';
})

// Crear una caja de texto con un botón Añadir Producto. Crear una lista vacía. 
// A medida que se introducen productos en la caja de texto y se pulsa el botón Añadir Producto, se irán añadiendo los productos a la lista. 

cajaDeTexto  = document.createElement('div');
cajaDeTexto.id = 'caja de texto';
contenidoCaja = document.createElement('input');
cajaDeTexto.appendChild(contenidoCaja);
document.body.appendChild(cajaDeTexto);

añadir = document.querySelector('.ej3')
cajaDeTexto.appendChild(añadir);
























//EJ 4 ALGUN MOMENTO ABRA QUE USAR EL FOREACH



