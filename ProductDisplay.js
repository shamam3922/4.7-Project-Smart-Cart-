// ===============================
// PRODUCT LIST
// ===============================
const products = [
    {
        id: "helmet01",
        name: "Rider Pro Helmet",
        price: 129.99,
        image: "images/helmet.jpg"
    },
    {
        id: "jacket01",
        name: "Forge Leather Jacket",
        price: 199.99,
        image: "images/jacket.jpg"
    },
    {
        id: "gloves01",
        name: "MotoGrip Gloves",
        price: 49.99,
        image: "images/gloves.jpg"
    },
    {
        id: "boots01",
        name: "TrailMaster Boots",
        price: 149.99,
        image: "images/boots.jpg"
    }
];

// ===============================
// RENDER PRODUCT GRID
// ===============================
function renderProducts() {
    const grid = document.getElementById("product-grid");
    grid.innerHTML = ""; // Clear before rendering

    products.forEach(product => {
        const card = document.createElement("div");
        card.classList.add("product-card");

        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-img">
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart('${product.id}')">Add to Cart</button>
        `;

        grid.appendChild(card);
    });
}

// Render products on page load
document.addEventListener("DOMContentLoaded", renderProducts);
