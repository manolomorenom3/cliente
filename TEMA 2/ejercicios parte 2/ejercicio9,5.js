let numero = prompt("Escribe un numero positivo");
if (isNaN(numero)) {
  numero = prompt("Debes darme un numero positivo");
}
var ast = "*";
var nuevo = "*";
for (i = 0; i < numero; i++) {
  document.write(nuevo + "<br>");
  nuevo = ast + nuevo;
}
