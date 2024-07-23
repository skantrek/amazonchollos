document.addEventListener("DOMContentLoaded", function() {
    const products = [
        {
            title: 'Producto 1',
            img: 'https://m.media-amazon.com/images/I/61dHymGI3-L._AC_SY695_.jpg',
            link: 'https://amzn.to/4bUKeP4'
        },
        {
            title: 'Producto 2',
            img: 'https://m.media-amazon.com/images/I/61dHymGI3-L._AC_SY695_.jpg',
            link: 'https://amzn.to/4bUKeP4'
        },
        // Agrega más productos según sea necesario
    ];

    const productList = document.getElementById('productList');

    function displayProducts(filteredProducts) {
        productList.innerHTML = ''; // Limpiar resultados anteriores
        filteredProducts.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');
            productDiv.innerHTML = `
                <img src="${product.img}" alt="${product.title}">
                <a href="${product.link}" target="_blank">${product.title}</a>
            `;
            productList.appendChild(productDiv);
        });
    }

    function searchProducts() {
        const query = document.getElementById('searchInput').value.toLowerCase();
        const filteredProducts = products.filter(product => product.title.toLowerCase().includes(query));
        displayProducts(filteredProducts);
    }

    // Mostrar todos los productos al cargar la página
    displayProducts(products);

    // Agregar el evento input al campo de búsqueda
    document.getElementById('searchInput').addEventListener('input', searchProducts);
});
