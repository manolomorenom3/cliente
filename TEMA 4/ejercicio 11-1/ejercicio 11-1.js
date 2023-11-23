var padre = document.getElementById("a");
let estaciones = ["primavera", "verano", "otoño", "invierno"];
let continente = ["Europa", "Asia", "América", "Oceanía", "África"];

var lista = document.createElement("ul");
for (i = 0; i < estaciones.length; i++) {
  var nuevo = document.createElement("li");
  var texto = document.createTextNode(estaciones[i]);
  nuevo.appendChild(texto);
  lista.appendChild(nuevo);
}

var lista2 = document.createElement("ul");
for (i = 0; i < continente.length; i++) {
  var nuevo = document.createElement("li");
  nuevo.innerHTML = continente[i];
  lista2.appendChild(nuevo);
}
padre.appendChild(lista);
padre.appendChild(lista2);
