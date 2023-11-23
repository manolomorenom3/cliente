inicio = () => {
  document.getElementById("boton").addEventListener("click", nuevo);
};
nuevo = () => {
  var lista = document.getElementById("lista");
  var nuevo = document.createElement("li");
  var texto = document.createTextNode("Buenas");
  nuevo.appendChild(texto);
  lista.appendChild(nuevo);
};

window.addEventListener("DOMContentLoaded", inicio);
