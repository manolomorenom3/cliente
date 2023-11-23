var palabra = prompt("Dime una palabra");

const array = palabra.split("");

var letra = "";
var alReves = "";
for (i = array.length - 1; i >= 0; i--) {
  letra = array[i];
  alReves = alReves + letra;
}
document.write("La palabra " + palabra + " al revés sería: " + alReves);
