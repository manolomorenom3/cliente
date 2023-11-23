var lista = document.getElementsByTagName("ol")[0];

var texto = prompt("¿Que quieres escribir?");
var pos = prompt("¿En que posición quieres coocar el texto (del 1 al 10)");

if (isNaN(pos) || pos < 1 || pos > 10) {
  pos = prompt("Debe ser un número entre 1 y 10");
}

var li = document.createElement("li");
var nuevo = document.createTextNode(texto);
li.appendChild(nuevo);

if (pos < 10) {
  lista.insertBefore(li, lista.children[pos - 1]);
} else {
  lista.appendChild(li);
}
