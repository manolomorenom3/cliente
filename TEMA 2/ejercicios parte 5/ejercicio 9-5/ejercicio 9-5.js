let factura = {
  numero: 3,
  cliente: "Pepelu",
  divisa: "€",
  subtotal: 100,
  IVA: 21,
  total: function (subtotal, IVA) {
    return subtotal + subtotal * (IVA / 100);
  },
};
document.write(
  "La factura " +
    factura.numero +
    " tiene un importe de " +
    factura.subtotal +
    ", " +
    factura.IVA +
    " total: " +
    factura.total(factura.subtotal, factura.IVA)
);
