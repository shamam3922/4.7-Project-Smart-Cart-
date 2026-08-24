// ===============================
// SMART CART SYSTEM – Moto Forge
// ===============================

// Load or initialize inventory
function initInventory() {
    const defaultInventory = [
        { id: 1, name: "Rogue Helmet", price: 129.99, stock: 5 },
        { id: 2, name: "Viper Gloves", price: 49.99, stock: 8 },
        { id: 3, name: "Titan Jacket", price: 199.99, stock: 3 },
        { id: 4, name: "Trail Boots", price: 159.99, stock: 4 }
    ];

    const saved = localStorage.getItem("inventory");
    const inventory = saved ? JSON.parse(saved) : defaultInventory;

    localStorage.setItem("inventory", JSON.stringify(inventory));
    return inventory;
}

let inventory = initInventory();
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function saveInventory() {
    localStorage.setItem("inventory", JSON.stringify(inventory));
}

// ===============================
// ADD TO CART
// ===============================
function addToCart(id) {
    const product = inventory.find(p => p.id === id);

    if (!product || product.stock <= 0) {
        alert("Out of Stock");
        return;
    }

    const cartItem = cart.find(item => item.id === id);

    if (cartItem) {
        cartItem.quantity++;
    } else {
        cart.push({ id: id, quantity: 1 });
    }

    product.stock--;
    saveCart();
    saveInventory();
    renderCart();
    showAddFeedback(product.name);
    renderProducts(); // update buttons
}

// ===============================
// REMOVE ITEM
// ===============================
function removeFromCart(id) {
    const cartItem = cart.find(item => item.id === id);
    const product = inventory.find(p => p.id === id);

    if (cartItem) {
        product.stock += cartItem.quantity;
        cart = cart.filter(item => item.id !== id);
        saveCart();
        saveInventory();
        renderCart();
        renderProducts();
    }
}

// ===============================
// UPDATE QUANTITY
// ===============================
function updateQuantity(id, newQty) {
    newQty = parseInt(newQty);
    const cartItem = cart.find(item => item.id === id);
    const product = inventory.find(p => p.id === id);

    if (!cartItem) return;

    const diff = newQty - cartItem.quantity;

    if (diff > 0 && product.stock >= diff) {
        cartItem.quantity = newQty;
        product.stock -= diff;
    } else if (diff < 0) {
        cartItem.quantity = newQty;
        product.stock += Math.abs(diff);
    }

    saveCart();
    saveInventory();
    renderCart();
    renderProducts();
}

// ===============================
// CLEAR CART
// ===============================
function clearCart() {
    cart.forEach(item => {
        const product = inventory.find(p => p.id === item.id);
        product.stock += item.quantity;
    });

    cart = [];
    saveCart();
    saveInventory();
    renderCart();
    renderProducts();
}

// ===============================
// CHECKOUT
// ===============================
function checkout() {
    if (cart.length
