document.getElementById('searchBar').addEventListener('keyup', function() {
    let query = this.value.toLowerCase();
    let products = document.querySelectorAll('.product');

    products.forEach(function(product) {
        let productName = product.getAttribute('data-name').toLowerCase();
        if (productName.includes(query)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
});
