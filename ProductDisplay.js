/*
    Author: Shaun Mammano  
    Date: 16 Aug 2026
    Purpose: 3.6
*/

// ===============================
// Product List
// ===============================

const products = [
    {
        name: "Rider Pro Helmet",
        price: "$129.99",
        image: "images/helmet1.jpg",
        link: "product-helmet1.html"
    },
    {
        name: "Forge Leather Jacket",
        price: "$199.99",
        image: "images/jacket1.jpg",
        link: "product-jacket1.html"
    },
    {
        name: "MotoGrip Gloves",
        price: "$49.99",
        image: "images/gloves1.jpg",
        link: "product-gloves1.html"
    },
    {
        name: "TrailMaster Boots",
        price: "$159.99",
        image: "images/boots1.jpg",
        link: "product-boots1.html"
    }
];

// ===============================
// Render Products to Page
// ===============================

function renderProducts() {
    const container = document.getElementById("product-grid");

    // If page doesn't have a product grid, stop quietly
    if (!container) {
        console.warn("No #product-grid found on this page.");
        return;
    }

    // Build product cards
    let html = "";
    products.forEach(product => {
        html += `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p class="price">${product.price}</p>
                <a href="${product.link}" class="btn">View Details</a>
            </div>
        `;
    });

    container.innerHTML = html;
}

// ===============================
// Run When Page Loads
// ===============================

document.addEventListener("DOMContentLoaded", renderProducts);

 

  
