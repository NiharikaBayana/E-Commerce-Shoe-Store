// Handle signup form submission
document.querySelector(".signup-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const firstName = document.getElementsByName("first_name")[0].value;
    const lastName = document.getElementsByName("last_name")[0].value;
    const username = document.getElementsByName("username")[0].value;
    const password = document.getElementsByName("password")[0].value;

    const user = {
        firstName: firstName,
        lastName: lastName,
        username: username,
        password: password
    };

    // Store user data in local storage
    localStorage.setItem('user', JSON.stringify(user));

    // Redirect to homepage after successful signup
    window.location.href = "HomePage.html";
});
