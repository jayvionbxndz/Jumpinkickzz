let cartCount = 0;

function addToCart() {
    cartCount++;

    document.getElementById("cartCount").textContent = cartCount;

    alert("Item added to your cart!");
}