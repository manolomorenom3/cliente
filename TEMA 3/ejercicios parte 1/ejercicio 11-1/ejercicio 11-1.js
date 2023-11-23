var boton = document.getElementById("validar");
var nombre = document.getElementById("nombre");
var apellidos = document.getElementById("apellido");
boton.addEventListener("click", () => {
  if (
    !nombre.value.startsWith("A") ||
    !nombre.value.startsWith("E") ||
    !nombre.value.startsWith("I") ||
    !nombre.value.startsWith("O") ||
    !nombre.value.startsWith("U")
  ) {
    document.getElementById("errNombre").innerHTML =
      "<p style='color: red;'> El nombre no es válido</p>";
  } else {
    document.getElementById("errNombre").innerHTML = "";
  }

  if (apellidos.value.split(" ")) {
    document.getElementById("errApellido").innerHTML =
      "<p style='color: red;'> El apellido no es válido";
  } else {
    document.getElementById("errApellido").innerHTML = "";
  }
});
