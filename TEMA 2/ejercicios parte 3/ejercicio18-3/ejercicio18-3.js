a = true;
function cambio() {
  if (a) {
    document.body.style.backgroundColor = "blue";
  } else {
    document.body.style.backgroundColor = "orange";
  }
  a = !a;
}

let temporizador = setInterval(cambio, 1000);
function detener() {
  clearInterval(temporizador);
}
