let temporizador = setInterval(escribir, 2000);

function escribir() {
  console.log("En un lugar de la Mancha");
}

function para() {
  clearInterval(temporizador);
}

function segundos() {
  function pasar() {
    console.log("han pasado 3 segundos");
  }
  let tiempo = setTimeout(pasar, 3000);
}

function abrir() {
  let nuevo = window.open("", "segundaPag", "height = 300, width = 300");

  function seg() {
    let hora = new Date();
    nuevo.document.write(hora.toLocaleTimeString() + "<br>");
  }
  function pararTiempo() {
    clearInterval(primero);
  }
  function cerrarVentana() {
    nuevo.close();
  }
  let cerrar = setTimeout(cerrarVentana, 10000);
  let primero = setInterval(seg, 1000);
  let paraHora = setTimeout(pararTiempo, 5000);
}
