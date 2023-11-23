const arr = [2, 3, 4, 5, 0];
let suma = 0;

arr.forEach((num) => {
  suma = suma + num;
});
console.log(suma);

console.log(suma / 5);

const nuevo = arr.map((el) => el * 3);

nuevo.forEach((num) => {
  console.log(num);
});

arr.forEach((e, num) => {
  arr[num] = e * 3;
});
console.log(arr);
