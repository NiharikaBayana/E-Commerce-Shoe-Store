document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("order-form");
    const placeOrderBtn = document.getElementById("place-order-btn");

    placeOrderBtn.addEventListener("click", function (event) {
        event.preventDefault(); // Prevents the form from submitting normally

        const name = document.getElementById("name").value;
        const address = document.getElementById("address").value;
        const phone = document.getElementById("phone").value;

        if (name && address && phone) {
            // All fields are filled, redirect to the next page
            window.location.href = "orderplaced.html";
        } else {
            alert("Please fill in all the details before placing the order.");
        }
    });
});
