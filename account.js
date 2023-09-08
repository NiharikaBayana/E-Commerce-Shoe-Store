function getUserData() {
    const userData = localStorage.getItem('user');
    return userData ? JSON.parse(userData) : null;
}

// Display user information on the account page
function displayUserInfo() {
    const userInfoDiv = document.getElementById('user-info');
    const user = getUserData();

    if (user) {
        userInfoDiv.innerHTML = `<p>Welcome, ${user.username}!</p>`;
    } else {
        userInfoDiv.innerHTML = `<p>Please sign in or sign up.</p>`;
    }
}

// Run this function when the account page loads
function init() {
    displayUserInfo();
}

// Call the init function when the page loads
window.onload = init;
