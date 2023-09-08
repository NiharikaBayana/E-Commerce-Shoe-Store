        // Function to add a product to the cart
        function addToCart(productName, price, imageURL) {
            // Create a cart item object
            const cartItem = {
                name: productName,
                price: price,
                quantity: 1,
                imageURL: imageURL
            };
    
            // Check if the cart exists in localStorage
            let cart = localStorage.getItem('cart');
            if (!cart) {
                // If the cart doesn't exist, create an empty array to store cart items
                cart = [];
            } else {
                // Parse the existing cart items from localStorage
                cart = JSON.parse(cart);
            }
    
            // Check if the product already exists in the cart
            const existingItem = cart.find(item => item.name === productName);
            if (existingItem) {
                // If the product exists, increase the quantity
                existingItem.quantity++;
            } else {
                // If the product doesn't exist, add it to the cart
                cart.push(cartItem);
            }
    
            // Save the updated cart back to localStorage
            localStorage.setItem('cart', JSON.stringify(cart));
    
            // Update the cart display on the page
            updateCartDisplay();
        }
    
        // Function to update the cart display on the page
        function updateCartDisplay() {
            const cartItemsContainer = document.getElementById('cartItems');
            cartItemsContainer.innerHTML = '';
    
            // Get the cart items from localStorage
            let cart = localStorage.getItem('cart');
            if (!cart) {
                cart = [];
            } else {
                cart = JSON.parse(cart);
            }
    
            // Iterate through each cart item and add it to the cart display
            cart.forEach(item => {
                const productDiv = document.createElement('div');
                productDiv.className = 'cart-product';
    
                const image = document.createElement('img');
                image.src = item.imageURL;
                image.alt = item.name;
    
                const productName = document.createElement('h4');
                productName.textContent = item.name;
    
                const productPrice = document.createElement('p');
                productPrice.textContent = `$${item.price.toFixed(2)}`;
    
                const quantity = document.createElement('p');
                quantity.textContent = `Quantity: ${item.quantity}`;
    
                productDiv.appendChild(image);
                productDiv.appendChild(productName);
                productDiv.appendChild(productPrice);
                productDiv.appendChild(quantity);
    
                cartItemsContainer.appendChild(productDiv);
            });
        }
    
        
        // Add event listeners to the "Add to Cart" buttons
        const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
        addToCartButtons.forEach(button => {
            button.addEventListener('click', () => {
                const productName = button.getAttribute('data-product');
                const price = parseFloat(button.getAttribute('data-price'));
                const imageURL = button.parentElement.querySelector('img').src;
                addToCart(productName, price, imageURL);
            });
        });
    
        // Update the cart display on page load
        updateCartDisplay();
    
    
    
        function searchProducts() {
      const searchInput = document.querySelector('.search-box').value.toLowerCase();
      const products = document.querySelectorAll('.product');
      let noProductsFound = true;
    
      products.forEach((product) => {
        const productName = product.querySelector('h3').textContent.toLowerCase();
    
        if (productName.includes(searchInput)) {
          product.style.display = 'block';
        } else {
          product.style.display = 'none';
        }
      });
      const noProductsMessage = document.getElementById('noProductsMessage');
      noProductsMessage.style.display = noProductsFound ? 'block' : 'none';
    }
    
    // After the searchProducts function definition, add this line:
    searchProducts();
    