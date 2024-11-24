// Simulate user authentication
const users = [];

document.getElementById("registerForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("regUsername").value;
    const password = document.getElementById("regPassword").value;

    users.push({ username, password });
    alert("Registered successfully!");
});

document.getElementById("loginForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const userExists = users.some(user => user.username === username && user.password === password);

    if (userExists) {
        alert("Login successful!");
        window.location.href = "products.html";
    } else {
        alert("Invalid credentials!");
    }
});
