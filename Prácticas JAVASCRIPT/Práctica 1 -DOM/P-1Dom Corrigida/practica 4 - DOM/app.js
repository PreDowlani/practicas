// Ej. 1
document.querySelector("title").textContent = "Título Nuevo";
document.querySelector("h1").textContent = "Práctica 1 - DOM";

// Ej.2
const parrafos = document.querySelectorAll("p");
parrafos.forEach((element) => {
  element.style.fontFamily = "Oxygen";
});

// Ej.3
const eltoNavegacion = document.querySelector(".navbar li a");
eltoNavegacion.setAttribute("href", "https://www.rottentomatoes.com");
eltoNavegacion.textContent = "Rotten Tomatoes";

// Ej.4
const estiloParrafos = document.querySelectorAll("p");
estiloParrafos.forEach((element) => {
  element.setAttribute("class", "nuevaclass");
  // Opcionalmente: element.className = 'nuevaclass';
});

// Ej.5
const nuevoParr = document.createElement("p");
nuevoParr.className = "nuevo-p";
nuevoParr.id = "segundo-p";
nuevoParr.textContent =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit.Rationtempora eos impedit laborum exercitationem quas voluptas saepe eum.Repellendus, beatae.";
document.body.appendChild(nuevoParr);

// Ej.6
const parrNoCont = document.querySelector(".nuevo-p");
parrNoCont.innerHTML = "";

// Ej.7
const parrEsconde = document.querySelector(".nuevo-p");
// parrEsconde.innerHTML =
// 	'Acabamos de eliminar el elemento para luego volver a añadir nuevo contenido';
// parrEsconde.style.display = 'none';
nuevoParr.append("Más cositas nuevas");
parrEsconde.style.display = "none";

// Ej.8
const listaProductos = ["Oro", "Plata", "Cobre", "Gofio"];
const ulElement = document.querySelector("#minerales");
listaProductos.forEach((producto) => {
  const itemElement = document.createElement("li");
  itemElement.innerText = producto;
  ulElement.appendChild(itemElement);
});
