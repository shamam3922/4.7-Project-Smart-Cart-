/*
    Author: Shaun Mammano  
    Date: 16 Aug 2026
    Purpose: 3.6
*/

// ===============================
// Product List
// ===============================

const products = [
  { name: "Rider Pro Helmet", price: "$129.99", image: "images/helmet1.jpg", link: "product-helmet1.html", category: "helmets" },
  { name: "Forge Leather Jacket", price: "$199.99", image: "images/jacket1.jpg", link: "product-jacket1.html", category: "jackets" },
  { name: "MotoGrip Gloves", price: "$49.99", image: "images/gloves1.jpg", link: "product-gloves1.html", category: "gloves" },
  { name: "TrailMaster Boots", price: "$159.99", image: "images/boots1.jpg", link: "product-boots1.html", category: "boots" }
];

function renderProducts() {
  const container = document.getElementById("product-grid");
  if (!container) return;

  const page = window.location.pathname;
  let category = "";

  if (page.includes("helmets")) category = "helmets";
  else if (page.includes("jackets")) category = "jackets";
  else if (page.includes("gloves")) category = "gloves";
  else if (page.includes("boots")) category = "boots";
  else category = "all";

  const filtered = category === "all"
    ? products
    : products.filter(p => p.category === category);

  filtered.forEach(p => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${p.image}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>${p.price}</p>
      <a href="${p.link}">View Details</a>
    `;
    container.appendChild(card);
  });
}

renderProducts();


 

  
