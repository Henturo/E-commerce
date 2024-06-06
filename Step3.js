const products = [
    {id: 1, name: "Resistance Bands", price: 159, rating: 4, image: "https://komodosports.co.uk/media/catalog/product/cache/dda75b2efb715bcfe6c6796316060562/r/e/resistance-bands-full-set-rst-bnd-set-5-1.jpg"},
    {id: 2, name: "Smart Watch", price: 5100, rating: 5, image: "https://img.lazcdn.com/g/p/689fe897428cb84258bb62158845a85f.jpg_720x720q80.jpg"},
    {id: 3, name: "Shorts", price: 199, rating: 4, image: "https://neweracap.ph/__resources/webdata/images/products/15414.JPG"},
    {id: 4, name: "T-Shirt", price: 149, rating: 4, image: "https://neweracap.ph/__resources/webdata/images/products/15416.jpg"},
    {id: 5, name: "Adjustable Dumbbell", price: 2100, rating: 5, image: "https://www.ubuy.com.ph/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNzFTcjVVVk9DRUwuX0FDX1NMMTUwMF8uanBn.jpg"},
    {id: 6, name: "Waist Trainer", price: 259, rating: 4, image: "https://m.media-amazon.com/images/I/61pl6ESHrxS._AC_UY1000_.jpg"},
    {id: 7, name: "Push-Up Board", price: 210, rating: 4, image: "https://ph-live-01.slatic.net/p/1834d4651b103e70da33c4c5d08a57c0.jpg"},
    {id: 8, name: "Sit-Up Bar", price: 180, rating: 4, image: "https://contents.mediadecathlon.com/p1916912/k$76dc1d1da6b3a4c8493ccf130db18cb1/sq/sit-up-bar.jpg?format=auto&f=800x0"},
    {id: 9, name: "Jump Rope", price: 149, rating: 4, image: "https://i5.walmartimages.com/seo/Athletic-Works-Speed-Jump-Rope-with-Light-Weight-Handles-9-Length-Black_64c03392-d085-4649-8a66-a1c13889cef6.c30b4a070760547b109bda47f0d41f91.jpeg"},
    {id: 10, name: "Yoga Roller", price: 299, rating: 4, image: "https://www.freediveacademy.com/member/wp-content/uploads/2018/07/Yoga-Pilates-Fitness-Foam-Roller.jpg"},
];

let cart = [];

document.addEventListener("DOMContentLoaded", () => {
    const productGrid = document.getElementById("product-grid");
    products.forEach(product => {
        const productItem = document.createElement("div");
        productItem.classList.add("product-item");
        productItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <div class="stars">${"★".repeat(product.rating)}</div>
            <div class="price">₱${product.price.toFixed(2)}</div>
            <button class="add-to-cart-btn" onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productGrid.appendChild(productItem);
    });
});

function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    updateCart();
}

function updateCart() {
    const cartCount = document.getElementById("cart-count");
    cartCount.textContent = cart.length;

    const cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = "";
    cart.forEach((item, index) => {
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-details">
                <span class="cart-item-title">${item.name}</span>
                <span class="cart-item-price">₱${item.price.toFixed(2)}</span>
                <button class="remove-btn" onclick="removeFromCart(${index})">Remove</button>
            </div>
        `;
        cartItems.appendChild(cartItem);
    });
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function toggleCartPanel() {
    const cartPanel = document.getElementById("cart-panel");
    cartPanel.classList.toggle("open");
}