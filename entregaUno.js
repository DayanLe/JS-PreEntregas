

function carrito() {
    const clases = +(prompt("Ingrese la cantidad de clases a la que se va a inscribir:"));
  
    let total = 0;
    /* bucle */
    for (let i = 1; i <= clases; i++) {
      const precioClase = +(prompt("Ingrese el precio de cada clase:"));
      /* condicionales */
      if (!isNaN(precioClase) && precioClase > 0) {
        total += precioClase;
      } else {
        alert("Ingrese un valor valido.");
        i--;
      }
    }
    alert("Total a pagar: " + total);
  }
  
  carrito();



