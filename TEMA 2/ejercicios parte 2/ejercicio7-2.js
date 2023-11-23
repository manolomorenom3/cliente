let numero = parseInt(prompt("escribe un numero"));
if (numero % 2 == 1) {
  for (i = 0; i < 50; i++) {
    numero = numero + 2;
    document.write(numero + "<br>");
  }
} else {
  numero = numero + 1;
  for (i = 0; i < 50; i++) {
    document.write(numero + "<br>");
    numero = numero + 2;
  }
}
