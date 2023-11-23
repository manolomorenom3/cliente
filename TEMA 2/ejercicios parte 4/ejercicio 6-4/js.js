var nuevaVentana = () => {
  var fecha = new Date(2023, 9, 21);
  alert(fecha.getDay());
  if (fecha.getDay() == 0 || fecha.getDay() == 6) {
    alert("if");
    var nueva = window.open("", "segundaPag", "height = 400, width = 400");
    nueva.document.write('<p><img src="suuuuu.png"</p>');
  } else {
    var nueva = window.open("", "segundaPag", "height = 400, width = 400");
    nueva.document.write('<p><img src="llorando.jpg"</p>');
  }
};
