let nombre = prompt("Escribe tu nombre");
let apellidos = prompt("Escribe tus apellidos");
let salario = prompt("Escribe tu salario con decimales incluidos");
let edad = prompt("Cual es tu edad");

document.write(nombre + apellidos + " de " + edad + " años, tu salario es: ");
salario = parseInt(salario);
if (salario > 2000) {
  document.write(salario);
} else if (salario < 2000 && salario > 1000) {
  if (edad > 45) {
    document.write(salario + salario * 0.03);
  } else {
    document.write(salario + salario * 0.1);
  }
} else {
  if (edad < 30) {
    document.write("1100");
  } else if (edad > 30 && edad < 45) {
    document.write(salario + salario * 0.03);
  } else {
    document.write(salario + salario * 0.15);
  }
}
