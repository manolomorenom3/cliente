inicio = () => {
  let padre = document.getElementsByTagName("body")[0];
  let nuevo = document.createElement("p");
  var texto = document.createTextNode("nuevo parrafo");
  nuevo.appendChild(texto);
  padre.appendChild(nuevo);
};

document.addEventListener("DOMContentLoaded", inicio);
