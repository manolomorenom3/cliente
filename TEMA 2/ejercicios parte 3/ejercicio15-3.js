let confirmar = confirm("Quieres abrir una nueva ventana?");
let nuevaVentana = window.open(
  "",
  "segundaPag",
  "toolbar = yes, height = 200, width = 80,scrollbars = yes, resizable= yes, top = 500, left = 500"
);

nuevaVentana.document.write("<h1>Hola</h1>");
