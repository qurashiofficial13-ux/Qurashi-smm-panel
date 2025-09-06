// assets/app.js

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            // 👇 Yahan apna email & password set karo
            const adminEmail = "akkiller612@gmail.com";
            const adminPassword = "123456"; 

            if (email === adminEmail && password === adminPassword) {
                // Redirect to dashboard page
                window.location.href = "dashboard.html";
            } else {
                alert("Invalid email or password ❌");
            }
        });
    }
});
