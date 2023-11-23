let numero = prompt("dame un número entre 0 y 23");

while (numero < 0 || numero > 23) {
  numero = prompt("número no válido, escriba un número entre 0 al 23");
}

if (numero >= 6 && numero <= 11) {
  document.write("Buenos días");
} else if (numero >= 12 && numero <= 20) {
  document.write("Buenas tardes");
} else {
  document.write("Buenas noches");
}
