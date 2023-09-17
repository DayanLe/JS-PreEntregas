
//? Carrito de compras


// Entrada - Salida
const productos = [
    { id: 1, tipo: "Vestido", precio: 80000, marca: "H&M" },
    { id: 2, tipo: "Top", precio: 50000, marca: "Zara" },
    { id: 3, tipo: "Medias Veladas", precio: 80000, marca: "Bershka" },
    { id: 4, tipo: "Chaqueta", precio: 250000, marca: "Pull & Bear" },
    { id: 5, tipo: "Tenis", precio: 120000, marca: "adidas" }
];


// Mostrar los productos en la página
const mostrarProductos = () => {
    const listaProductos = document.getElementById("lista-productos");
    listaProductos.innerHTML = "";
    productos.forEach(producto => {
        const li = document.createElement("li");
        li.textContent = `${producto.tipo} - ${producto.marca} - $${producto.precio}`;
        const btnAgregar = document.createElement("button");
        btnAgregar.textContent = "Agregar al carrito";
        btnAgregar.addEventListener("click", () => agregarAlCarrito(producto));
        li.appendChild(btnAgregar);
        listaProductos.appendChild(li);
    });
}


// Agregar producto al carrito
const agregarAlCarrito = (producto) => {
    carrito.push(producto);
    mostrarCarrito();
    mostrarTotal();
}


// Carrito de compras
const mostrarCarrito = () => {
    const listaCarrito = document.getElementById("lista-carrito");
    listaCarrito.innerHTML = "";
    carrito.forEach(producto => {
        const li = document.createElement("li");
        li.textContent = `${producto.tipo} - ${producto.marca} - $${producto.precio}`;
        listaCarrito.appendChild(li);
    });
}


// Mostrar el total
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
}

iniciar();


// Array para almacenar los productos en el carrito
const carrito = [];
while (true) {
    const usuario = prompt("¿Qué deseas hacer? (agregar/ver/salir)");

    if (usuario === null || usuario.toLowerCase() === "salir") {
        break;
    } else if (usuario.toLowerCase() === "agregar") {
        const productoId = +(prompt("Ingresa el ID del producto que deseas agregar: (Numero del 1 al 5)"));
        const productoEncontrado = productos.find(producto => producto.id === productoId);

        if (productoEncontrado) {
            agregarAlCarrito(productoEncontrado);
            alert(`${productoEncontrado.tipo} - ${productoEncontrado.marca} se ha agregado al carrito.`);
        } else {
            alert("Producto no encontrado. Introduce un ID válido.");
        }
    } else if (usuario.toLowerCase() === "ver") {
        mostrarCarrito();
        alert(`Total en el carrito: $${document.getElementById("total").textContent}`);
    } else {
        alert("Acción no válida. Por favor, ingresa 'agregar', 'ver' o 'salir'.");
    }
}