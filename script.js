function searchProducts() {
    const query = document.getElementById('searchInput').value;
    const productList = document.getElementById('productList');
    productList.innerHTML = ''; // Limpiar resultados anteriores

    // Ejemplo de productos. En una aplicación real, obtendrás estos datos de una API aa
    const products = [
        {
            title: 'Producto 1',
            img: 'https://m.media-amazon.com/images/I/61dHymGI3-L._AC_SY695_.jpg',
            link: 'https://www.amazon.com/producto1'
        },
        {
            title: 'Producto 2',
            img: 'https://m.media-amazon.com/images/I/61dHymGI3-L._AC_SY695_.jpg',
            link: 'https://www.amazon.com/producto2'
        }
    ];

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <img src="${product.img}" alt="${product.title}">
            <a href="${product.link}" target="_blank">${product.title}</a>
        `;
        productList.appendChild(productDiv);
    });
}
