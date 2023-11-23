let dia = prompt("Dime el dia de tu cumpleaños");
let mes = prompt("Dime el mes de tu cumpleaños");

for (año = 2023; año < 2100; año++) {
  let fechaCumple = new Date(año, mes, dia);
  if (fechaCumple.getDay() == 0) {
    document.write(fechaCumple.getFullYear() + "<br>");
  }
}
