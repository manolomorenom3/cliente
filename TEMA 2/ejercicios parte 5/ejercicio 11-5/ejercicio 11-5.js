let obj = {};

function isEmpty(parametro) {
  var text;
  for (let prop in parametro) {
    text = `${prop} tiene el valor ${parametro[prop]}`;
  }
  if (isEmpty(text)) {
    document.write("esta vacio");
  } else {
    document.write(text);
  }
}
isEmpty(obj);
