let nota = prompt("Escribe un número del 1 al 10");

while (nota < 0 || nota > 10) {
  nota = prompt("nota no válida, escriba un número del 1 al 10");
}

if (nota < 5) {
  document.write("has suspendido");
} else {
  document.write("has aprobado");
}
