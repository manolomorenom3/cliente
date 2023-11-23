let input = document.getElementById("nombre");

input.addEventListener("blur", () => {
  input.value = input.value.toUpperCase();
  input.select();
});

let sonido = document.getElementById("audio");

let empezar = document
  .getElementById("reproducir")
  .addEventListener("click", () => {
    audio.play();
  });
let parar = document.getElementById("detener").addEventListener("click", () => {
  audio.pause();
});
