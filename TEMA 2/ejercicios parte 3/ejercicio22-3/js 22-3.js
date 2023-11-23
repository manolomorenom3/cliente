function abrir() {
  window.open("nuevo.html", "segundaPag", "height = 300, width = 300");
}
function mostrar() {
  var nombre = formulario.nombre.value;
  var apellido = formulario.apellidoPrimero.value;
  var apellidoSeg = formulario.apellidoSegundo.value;
  var fecha = new Date(formulario.fecha.value);

  //document.write(nombre);
  window.opener.document.getElementById("p").innerHTML =
    nombre + apellido + apellidoSeg;
}
