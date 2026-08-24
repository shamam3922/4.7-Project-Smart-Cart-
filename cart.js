// ---------------------------
// Persistent Cart + Inventory
// ---------------------------
let cart = JSON.parse(localStorage.getItem("cart")) || {};
let inventory = JSON.parse(localStorage.getItem("inventory")) || {};

// Save functions
function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}
function saveInventory() {
    localStorage.setItem("inventory", JSON.stringify(inventory));
}

// ---------------------------
// Initialize Inventory
// ---------------------------
function initInventory() {
    const products = document.querySelectorAll(".product");

    products.forEach(p => {
        const id = p.dataset.id;
        const stock = parseInt(p.dataset.stock, 10);

        if (!(id in inventory)) {
            inventory[id] = stock;
        }

        const button = p.querySelector(".add-to-cart-btn");
        updateProductButtonState(button, id);
    });

    saveInventory();
}

// ---------------------------
// Add Item to Cart
// ---------------------------
function addToCart(productElement) {
    const id = productElement.dataset.id;
    const name = productElement.dataset.name;
    const price = parseFloat(productElement.dataset.price);

    if (inventory[id] <= 0) return; // Out of stock

    if (!cart[id]) {
        cart[id] = { name, price, quantity: 0 };
    }

    cart[id].quantity += 1;
    inventory[id] -= 1;

    saveCart();
    saveInventory();
    renderCart();
    immediateFeedback(productElement);
    updateProductButtonState(productElement.querySelector(".add-to-cart-btn
