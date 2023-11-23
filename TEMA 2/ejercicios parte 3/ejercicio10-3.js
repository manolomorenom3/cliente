let guardar = 0;
for (i = 0; i <= 11; i++) {
  let numAle = Math.floor(Math.random() * 21);
  guardar = guardar + numAle;
}
document.write("La suma total es: " + guardar);
