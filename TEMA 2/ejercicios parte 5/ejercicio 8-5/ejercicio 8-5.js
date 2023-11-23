const arr = [1, 3, 2, 5, 7, 4];

console.log(arr);

const pares = arr.filter((num) => num % 2 === 0);
const impar = arr.filter((num) => num % 2 === 1);

document.write("Los números pares son: " + pares + "<br>");
document.write("Los números impares son: " + impar);
