/*
    Author: Shaun Mammano  
    Date: 16 Aug 2026
    Purpose: 3.6
*/

/// STEP 1: Product Data (10 items minimum) 

const products = [ 

  { name: "Bell MX-9 Adventure Helmet", price: 199.99, category: "Helmets" }, 

  { name: "Alpinestars GP Plus R V2 Jacket", price: 349.99, category: "Jackets" }, 

  { name: "Dainese Carbon 4 Gloves", price: 129.99, category: "Gloves" }, 

  { name: "Klim Adventure GTX Boots", price: 299.99, category: "Boots" }, 

  { name: "REV'IT Defender Pants", price: 249.99, category: "Pants" }, 

  { name: "Fox Racing Comp Boots", price: 199.99, category: "Boots" }, 

  { name: "Bell Qualifier DLX Helmet", price: 169.99, category: "Helmets" }, 

  { name: "Alpinestars SMX-1 Air Gloves", price: 69.99, category: "Gloves" }, 

  { name: "Klim Marrakesh Jacket", price: 289.99, category: "Jackets" }, 

  { name: "REV'IT Sand 4 Gloves", price: 109.99, category: "Gloves" } 

]; 

   

const productContainer = document.getElementById("Product Display"); 

  

// STEP 3: Loop through products and display them 

products.forEach(item => { 

  productContainer.innerHTML += ` 

    <div class="product-card"> 

      <h3>${item.name}</h3> 

      <p class="category">${item.category}</p> 

      <p class="price">$${item.price.toFixed(2)}</p> 

      <button class="btn-primary">View Product</button> 

    </div> 

  `; 

}); 

 

  
