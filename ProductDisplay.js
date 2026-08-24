/*
    Author: Shaun Mammano  
    Date: 16 Aug 2026
    Purpose: Smart Cart – Product Display
*/

// ===============================
// Product List
// ===============================

const products = [
  { id: "helmet1", name: "Rider Pro Helmet", price: 129.99, image: "images/helmet1.jpg" },
  { id: "jacket1", name: "Forge Leather Jacket", price: 199.99, image: "images/jacket1.jpg" },
  { id: "gloves1", name: "MotoGrip Gloves", price: 49.99, image: "images/gloves1.jpg" },
  { id: "boots1", name: "TrailMaster Boots", price: 159.99, image: "images/boots1.jpg" }
];

// ===============================
// Render Products
// ===============================

function renderProducts() {
  const container = document.getElementById("product-grid");
  if (!container) return;

  products.forEach(p => {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
      <img src="${p.image}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>$${p.price.toFixed(2)}</p>

      <button 
        class="add-to-cart-btn"
        data-id="${p.id}"
        data-name="${p.name}"
        data-price="${p.price}"
      >
        Add to Cart
      </button>
    `;

    container.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", renderProducts);



 

  
