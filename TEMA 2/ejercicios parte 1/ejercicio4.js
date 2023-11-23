var texto = "Hola Mundo;";
document.write(texto.indexOf("Mundo"));
if (texto.includes("Mundo")) {
  texto = "Hola Universo";
}
console.log(texto);
console.log(texto.toUpperCase());
console.log(texto.toLowerCase());
var nombre = "Manuel";
var apellido = "Moreno";
console.log(nombre + apellido);
var cadena = "Cliente";
console.log(cadena.substring(0, 3));
console.log(cadena.substring(cadena.indexOf("ente")));
