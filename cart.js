        // Function to update the cart display on the page
        function updateCartDisplay() {
            const cartItemsContainer = document.getElementById('cartItems');
            const totalPriceElement = document.getElementById('totalPrice');
            let totalPrice = 0;

            // Get the cart items from localStorage
            let cart = localStorage.getItem('cart');
            if (!cart) {
                cart = [];
            } else {
                cart = JSON.parse(cart);
            }

            cartItemsContainer.innerHTML = '';

            // Iterate through each cart item and add it to the cart display
            cart.forEach(item => {
                const cartItemDiv = document.createElement('div');
                cartItemDiv.className = 'cart-item';

                const image = document.createElement('img');
                image.src = item.imageURL;
                image.alt = item.name;

                const productName = document.createElement('h4');
                productName.textContent = item.name;

                const productPrice = document.createElement('p');
                productPrice.textContent = '₹' + item.price.toFixed(2);

                const quantityContainer = document.createElement('div');
                quantityContainer.className = 'quantity-btns';

                const decreaseBtn = document.createElement('button');
                decreaseBtn.className = 'quantity-btn';
                decreaseBtn.textContent = '-';
                decreaseBtn.addEventListener('click', () => updateQuantity(item.name, -1));

                const quantity = document.createElement('span');
                quantity.textContent = item.quantity;

                const increaseBtn = document.createElement('button');
                increaseBtn.className = 'quantity-btn';
                increaseBtn.textContent = '+';
                increaseBtn.addEventListener('click', () => updateQuantity(item.name, 1));

                const removeBtn = document.createElement('button');
                removeBtn.className = 'quantity-btn remove-btn';
                removeBtn.textContent = 'Remove';
                removeBtn.addEventListener('click', () => removeItemFromCart(item.name));

                quantityContainer.appendChild(decreaseBtn);
                quantityContainer.appendChild(quantity);
                quantityContainer.appendChild(increaseBtn);

                cartItemDiv.appendChild(image);
                cartItemDiv.appendChild(productName);
                cartItemDiv.appendChild(productPrice);
                cartItemDiv.appendChild(quantityContainer);
                cartItemDiv.appendChild(removeBtn);

                cartItemsContainer.appendChild(cartItemDiv);

                totalPrice += item.price * item.quantity;
            });

            totalPriceElement.textContent = totalPrice.toFixed(2);
        }

        // Function to update the quantity of a cart item
        function updateQuantity(productName, change) {
            let cart = localStorage.getItem('cart');
            if (!cart) {
                cart = [];
            } else {
                cart = JSON.parse(cart);
            }

            const itemIndex = cart.findIndex(item => item.name === productName);

            if (itemIndex !== -1) {
                cart[itemIndex].quantity += change;

                // Remove the item from the cart if the quantity becomes 0 or less
                if (cart[itemIndex].quantity <= 0) {
                    cart.splice(itemIndex, 1);
                }

                localStorage.setItem('cart', JSON.stringify(cart));
                updateCartDisplay();
            }
        }

        // Function to remove an item from the cart
        function removeItemFromCart(productName) {
            let cart = localStorage.getItem('cart');
            if (!cart) {
                cart = [];
            } else {
                cart = JSON.parse(cart);
            }

            const itemIndex = cart.findIndex(item => item.name === productName);

            if (itemIndex !== -1) {
                cart.splice(itemIndex, 1);
                localStorage.setItem('cart', JSON.stringify(cart));
                updateCartDisplay();
            }
        }

        // Function to clear the cart
        function clearCart() {
            localStorage.removeItem('cart');
            updateCartDisplay();
        }

        // Add event listener to the "Clear Cart" button
        const clearCartBtn = document.getElementById('clearCartBtn');
        clearCartBtn.addEventListener('click', clearCart);

        // Update the cart display on page load
        updateCartDisplay();
