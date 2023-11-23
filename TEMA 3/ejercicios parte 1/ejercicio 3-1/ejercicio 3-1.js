var boton = document.getElementById("validar");

var arr = document.getElementsByTagName("input");
var contador = 0;

boton.addEventListener("click", () => {
  for (i = 0; i < arr.length; i++) {
    if (arr[i].checked) {
      contador++;
    }
  }
  if (contador < 3) {
    alert("Se han marcado menos de 3 casillas");
  } else {
    alert("Se han marcado 3 casillas o más");
  }
  contador = 0;
});

var caja = document.getElementById("verano");

var marcado = document
  .getElementById("marcar")
  .addEventListener("click", () => {
    caja.checked = true;
  });

var desmarcado = document
  .getElementById("desmarcar")
  .addEventListener("click", () => {
    caja.checked = false;
  });
