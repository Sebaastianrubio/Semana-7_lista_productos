// Lista inicial de productos
const productos = [
    {nombre:"CAMISETAS",precio:20.99, descripcion:"Camisetas cómodas y de buena calidad."},
    {nombre: "CHAQUETAS ",precio: 59.99, descripcion:"Chaquetas,buenas bonitas y baratas."},
    {nombre: "PANTALONES",precio: 15.50, descripcion: "Pantalones para hombre y mujer."
    }
];

// Función para renderizar productos en la lista <ul>
function renderizarProductos() {
    const lista = document.getElementById("lista-productos");
    lista.innerHTML = ""; // Limpiar contenido previo

    productos.forEach((producto) => {
        const li = document.createElement("li");
        li.innerHTML = `
        item.textContent=${"productos.nombre"} -${"producto.precio"} -${"producto.descripcion"}
            <strong>${producto.nombre}</strong> - $${producto.precio.toFixed(2)}<br>
            <em>${producto.descripcion}</em>
        `;
        lista.appendChild(li);
    });
}

// Función para agregar un nuevo producto
function agregarProducto() {
    const nuevo = {
        nombre: "Nuevo producto",
        precio: 15.00,
        descripcion: "Descripción del nuevo producto agregado."
    };
        
    productos.push(nuevo);
    renderizarProductos(); // Volver a renderizar
}

// Ejecutar al cargar la página
window.onload = renderizarProductos;
