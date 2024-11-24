// Get cart items from localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to display cart items
function displayCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceContainer = document.getElementById('total-price');
    cartItemsContainer.innerHTML = ''; // Clear previous items

    let totalPrice = 0;

    cart.forEach(item => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('cart-item');
        productDiv.innerHTML = `
            <img src="${item.image}" alt="${item.name}" width="100">
            <h4>${item.name}</h4>
            <p>Price: $${item.price}</p>
            <button class="remove-btn" data-id="${item.id}">Remove</button>
        `;
        cartItemsContainer.appendChild(productDiv);
        totalPrice += item.price;
    });

    totalPriceContainer.textContent = totalPrice.toFixed(2);
}

// Function to handle removing items from cart
function removeItemFromCart(event) {
    const productId = event.target.getAttribute('data-id');
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart)); // Save updated cart
    displayCartItems(); // Refresh cart display
}

// Listen for remove buttons
document.getElementById('cart-items').addEventListener('click', (event) => {
    if (event.target.classList.contains('remove-btn')) {
        removeItemFromCart(event);
    }
});

// Function to proceed to checkout (stubbed for now)
document.getElementById('checkout-btn').addEventListener('click', () => {
    if (cart.length === 0) {
        alert('Your cart is empty!');
    } else {
        // Redirect to checkout page (add your checkout logic here)
        alert('Proceeding to checkout...');
    }
});

// Initialize the cart display
displayCartItems();
