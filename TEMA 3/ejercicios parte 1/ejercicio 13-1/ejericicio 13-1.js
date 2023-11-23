inicio = () => {
  document.getElementById("enviar").addEventListener("click", validar);
};

validar = () => {
  var nombre = document.getElementById("nombre");
  var nombreOK = false;
  var apellidos = document.getElementById("apellidos");
  var apellidosOK = false;
  var edad = document.getElementById("edad");
  var edadOK = false;
  var provincia = document.getElementById("provincia");
  var provinciaOK = false;

  var resultado = document.getElementById("resultado");

  if (nombre.value == "") {
    resultado.innerHTML =
      "<p style='color: red;'> El nombre no puede estar vacio</p>";
  } else {
    nombreOK = true;
  }

  if (apellidos.value == "") {
    resultado.innerHTML =
      "<p style='color: red;'> El apellido no puede estar vacio</p>";
  } else {
    apellidosOK = true;
  }

  if (isNaN(edad.value)) {
    resultado.innerHTML =
      "<p style='color: red;'>La edad debe ser un número</p>";
  } else if (edad.value == "") {
    resultado.innerHTML =
      "<p style='color: red;'>La edad no puede estar vacia</p>";
  } else if (edad.value < 0 || edad.value > 105) {
    resultado.innerHTML =
      "<p style='color: red;'>La edad no puede ser menor que 0 o mayor que 105</p>";
  } else {
    edadOK = true;
  }

  if (provincia.value == 0) {
    resultado.innerHTML =
      "<p style='color: red;'>Debe selecionar una provincia </p>";
  } else {
    provinciaOK = true;
  }

  if (nombreOK && apellidosOK && edadOK && provinciaOK) {
    confirm("¿Desea enviar el formulario?");
  }
};

window.addEventListener("DOMContentLoaded", inicio);
