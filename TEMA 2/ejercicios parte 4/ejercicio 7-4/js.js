function abrir() {
  var nueva = window.open("", "segundaPag", "height = 300, width = 700");
  var numero = nueva.prompt("dime un numero del 1 al 20");
  do {
    if (numero < 1 || numero > 20) {
      nuemro = nueva.prompt(
        "el número no puede ser menor de 20 o menor que 1, escribe otro número"
      );
    }
  } while (numero > 20 && numero < 1);
  nueva.close();

  for (i = 1; i <= numero; i++) {
    document.write("<li>" + i + "</li>");
  }
}
