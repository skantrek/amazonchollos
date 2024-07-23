document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const query = document.getElementById('search-input').value;
    searchProducts(query);
});

function searchProducts(query) {
    // Aquí iría la lógica para buscar productos de Amazon usando su API
    console.log('Buscando productos para:', query);
    // Simulación de resultados de búsqueda
    const products = [
        { name: 'Producto 1', price: '$10' },
        { name: 'Producto 2', price: '$20' },
        { name: 'Producto 3', price: '$30' }
    ];
    displayProducts(products);
}

function displayProducts(products) {
    const productsContainer = document.getElementById('products');
    productsContainer.innerHTML = '';
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product';
        productElement.innerHTML = `<h2>${product.name}</h2><p>${product.price}</p>`;
        productsContainer.appendChild(productElement);
    });
}

