// Handle login form submission
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementsByName("username")[0].value;
    const password = document.getElementsByName("password")[0].value;

    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedUser.username === username && storedUser.password === password) {
        // Redirect to homepage after successful login
        window.location.href = "HomePage.html";
    } else {
        alert("Invalid username or password. Please try again.");
    }
});
