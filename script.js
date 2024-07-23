<script>
    const products = [
        { name: "ZAPATO CON RUEDAS", description: "link: https://amzn.to/4eXxEBn", price: "$10" },
        { name: "Producto 2", description: "Descripción del Producto 2", price: "$20" },
        { name: "Producto 3", description: "Descripción del Producto 3", price: "$30" },
        // Añade más productos aquí
    ];

    function searchProducts() {
        const query = document.getElementById("search-input").value.toLowerCase();
        const resultsContainer = document.getElementById("search-results");
        resultsContainer.innerHTML = "";

        const results = products.filter(product => product.name.toLowerCase().includes(query));

        if (results.length > 0) {
            results.forEach(product => {
                const resultItem = document.createElement("div");
                resultItem.className = "result-item";
                resultItem.innerHTML = `<strong>${product.name}</strong><br>${product.description}<br>${product.price}`;
                resultsContainer.appendChild(resultItem);
            });
        } else {
            resultsContainer.innerHTML = "<p>No se encontraron productos.</p>";
        }
    }
</script>

