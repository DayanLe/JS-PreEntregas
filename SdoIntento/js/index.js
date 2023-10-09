/* import Atropos from 'atropos';

const myAtropos = Atropos({
    el: '.my-atropos',
}); */



function redirect() {
    window.location.href="https://calendly.com/dayanlenisc/polesport";
}

const clases = [
    {id: "clase1", tipo: "Pole Sport", precio: 100000},
    {id: "clase2", tipo: "Flex", precio: 80000},
    {id: "clase3", tipo: "Exotic Dance", precio: 120000},
    {id: "clase4", tipo: "Acrotelas", precio: 90000},
    {id: "clase5", tipo: "Twerk", precio: 50000},
    {id: "clase6", tipo: "Pole Kids", precio: 100000}
];

const carrito = [];

// Función para mostrar los productos en la página
const mostrarProductos = () => {
    const listaProductos = document.querySelector(".card_padre");
    listaProductos.innerHTML = "";
    clases.forEach((clase, index) => {
        const div = document.createElement("div");
        div.classList.add("box");
        div.innerHTML = `
            <img src="./assets/pole/Pole${index + 1}.jpeg" alt="">
            <h4>${clase.tipo}</h4>
            <p>$${clase.precio}</p>
            <button type="button" class="comprar-btn" onclick="agregarAlCarrito(${index})">Comprar</button>
        `;
        listaProductos.appendChild(div);
    });
}

// Función para agregar producto al carrito
/* const agregarAlCarrito = (index) => {
    const producto = clases[index];
    carrito.push(producto);
    mostrarCarrito();
    mostrarTotal();
} */

/* const agregarAlCarrito = (producto) => {
    carrito.push(producto);
    guardarCarritoEnLocalStorage(); // Guarda el carrito en localStorage
    mostrarCarrito();
    mostrarTotal();
} */

const agregarAlCarrito = (index) => {
    const producto = clases[index];
    carrito.push(producto);
    guardarCarritoEnLocalStorage(); // Guarda el carrito en localStorage
    mostrarCarrito();
    mostrarTotal();
}

// Función para mostrar el carrito
const mostrarCarrito = () => {
    const listaCarrito = document.getElementById("lista-carrito");
    listaCarrito.innerHTML = "";
    carrito.forEach(producto => {
        const li = document.createElement("li");
        li.textContent = `${producto.tipo} - $${producto.precio}`;
        listaCarrito.appendChild(li);
    });
}

// Función para mostrar el total
const mostrarTotal = () => {
    let total = 0;
    carrito.forEach(producto => {
        total += producto.precio;
    });
    document.getElementById("total").textContent = total;
}

// Función para inicializar la página
const iniciar = () => {
    mostrarProductos();
   /*  cargarCarritoDesdeLocalStorage(); */
}

iniciar();

// Función para eliminar todo el carrito
const eliminarTodo = () => {
    carrito.length = 0; // Esto vacía el arreglo del carrito
    guardarCarritoEnLocalStorage();
    mostrarCarrito();
    mostrarTotal();
}


// Función para eliminar el producto anterior del carrito
const eliminarAnterior = () => {
    if (carrito.length > 0) {
        carrito.pop(); // Esto elimina el último elemento del arreglo (el anterior)
        guardarCarritoEnLocalStorage();
        mostrarCarrito();
        mostrarTotal();
    }
}

// Función para seguir comprando (puedes redirigir al usuario a la página de productos, por ejemplo)
const seguirComprando = () => {
    // Puedes redirigir al usuario a la página de productos o realizar otras acciones según tus necesidades.
    alert("Puedes seguir comprando aquí.");
}


// Función para cargar el carrito desde localStorage si existe
const cargarCarritoDesdeLocalStorage = () => {
    const carritoGuardado = localStorage.getItem("carrito");
    if (carritoGuardado) {
        carrito = JSON.parse(carritoGuardado);
        mostrarCarrito();
        mostrarTotal();
    }
}

// Función para guardar el carrito en localStorage
const guardarCarritoEnLocalStorage = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}



