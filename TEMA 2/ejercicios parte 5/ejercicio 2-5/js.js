const arr = [];

for (i = 0; i < 3; i++) {
  let elemento = arr.push(prompt("Escribeme algo"));
}

if (arr.includes(null)) {
  let vacio = arr.indexOf(null);
  arr.splice(vacio, 1, "");
}

let filtro = arr.filter((e) => e.startsWith("C"));

if (filtro.length == 0) {
  console.log("No hay palabtras con c");
} else {
  console.log(filtro);
}
