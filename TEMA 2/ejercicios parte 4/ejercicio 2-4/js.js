var n;

do {
  n = prompt("introduzca un numero mayor de 0");
} while (n < 1 || isNaN(n));

let fact = (n) => {
  for (i = n; i > 0; i--) {
    if (i > 1) {
      n = n * (i - 1);
    }
  }
  return n;
};
document.write("El factorial de tu numero es: " + fact(n));
