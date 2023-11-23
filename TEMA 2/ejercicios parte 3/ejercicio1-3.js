let fechaActual = new Date();
let cumple = new Date(2003, 4, 17);
document.write(fechaActual.toLocaleDateString() + "<br>");
document.write(cumple + "<br>");
document.write(fechaActual.getFullYear() + "<br>");
document.write(cumple.getFullYear() + "<br>");
fechaActual.setFullYear(2022);
document.write(fechaActual + "<br>");
document.write(fechaActual.toLocaleDateString());
