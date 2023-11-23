let tiene = prompt("¿Quieres añadirle topping a tu helado?");
var precioBase = 1.9;
if (tiene == "no") {
  document.write(`Tu helado cuesta ${precioBase}`);
} else if (tiene == "si") {
  let añadido = prompt("¿Que tipo de topping quieres?");

  switch (añadido) {
    case "oreo":
      document.write(`Tu helado cuesta ${precioBase + 1}`);
      break;

    case "kitkat":
      document.write(`Tu helado cuesta ${precioBase + 1.5}`);
      break;

    case "brownie":
      document.write(`Tu helado cuesta ${precioBase + 0.75}`);
      break;

    case "lacasitos":
      document.write(`Tu helado cuesta ${precioBase + 0.95}`);
      break;
    default:
      document.write(
        `No tenemos ese tipo de topping, el helado sin topping cuesta ${precioBase}`
      );
      break;
  }
}
