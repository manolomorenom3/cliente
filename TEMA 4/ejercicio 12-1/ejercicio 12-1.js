var en1 = document.getElementById("enlace_1");
var en2 = document.getElementById("enlace_2");
var en3 = document.getElementById("enlace_3");

window.onload = function () {
  en1.addEventListener("click", escribir);
  en2.addEventListener("click", escribir);
  en3.addEventListener("click", escribir);
};

escribir = (e) => {
  alert(e.target);
  var trozos = e.target.id.split("_");
  var numero = trozos[1];

  var elemento = document.getElementById("contenidos_" + numero);
  var enlace = document.getElementById("enlace_" + numero);

  if (elemento.style.display == "" || elemento.style.display == "block") {
    elemento.style.display = "none";
    enlace.innerHTML = "Mostrar contenido";
  } else {
    elemento.style.display = "";
    enlace.innerHTML = "Ocultar contenidos";
  }
};
