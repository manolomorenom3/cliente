let dia = prompt("Dime el dia de tu nacimiento");
let mes = prompt("Dime el mes de tu nacimiento");
let año = prompt("Dime el año de tu nacimiento");

let fechaNacim = new Date(año, mes, dia);
let fechaActual = new Date();
document.write(
  Math.trunc((fechaActual - fechaNacim) / 60 / 60 / 24 / 1000 / 365)
);
