inicio = () => {
  var cuerpo = document.getElementById("cuerpoTabla");

  let arr = [
    {
      id: 1,
      nombre: "fanta",
      precio: 1.5,
      codigo: 6546,
    },
    {
      id: 2,
      nombre: "pescado",
      precio: 9,
      codigo: 9275,
    },
    {
      id: 3,
      nombre: "galleta",
      precio: 1.7,
      codigo: 1034,
    },
  ];

  for (i = 0; i < arr.length; i++) {
    var tr = document.createElement("tr");
    tr.setAttribute("id", "arr.id");

    var itd = document.createElement("td");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");

    var inp = document.createElement("input");
    var nombre = document.createTextNode(arr[i].nombre);
    var precio = document.createTextNode(arr[i].precio);
    var codigo = document.createTextNode(arr[i].codigo);

    inp.setAttribute("type", "checkbox");
    inp.setAttribute("id", "checkbox" + arr.id);
    inp.setAttribute("name", "marcar");

    itd.appendChild(inp);
    td1.appendChild(nombre);
    td2.appendChild(precio);
    td3.appendChild(codigo);

    tr.appendChild(itd);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);

    cuerpo.appendChild(tr);
  }
};
window.addEventListener("DOMContentLoaded", inicio);
