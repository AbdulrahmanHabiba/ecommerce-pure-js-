// Select input fields and sign-in button
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const signInBtn = document.querySelector("#signIn");

// Focus on email input on page load
window.onload = () => {
    emailInput.focus();
};

// Helper: Get users array from localStorage or return empty array
const getUsers = () => JSON.parse(localStorage.getItem("users")) || [];

// Helper: Set current user in localStorage
const setCurrentUser = user => {
    localStorage.setItem("currentUser", JSON.stringify(user));
};

// Sign-in button click event
signInBtn.addEventListener("click", e => {
    e.preventDefault();
    // Validate input fields
    if (emailInput.value === "" || passwordInput.value === "") {
        showToast("Please fill in all fields.", "error");
        return;
    }
    const users = getUsers();
    // Find user with matching email and password
    const foundUser = users.find(
        u => u.email.trim().toLowerCase() === emailInput.value.trim().toLowerCase() &&
             u.password === passwordInput.value
    );
    if (foundUser) {
        setCurrentUser(foundUser);
        showToast("Login successful!", "success");
        setTimeout(() => {
            window.location = "index.html";
        }, 1200);
    } else {
        showToast("Invalid email or password.", "error");
    }
});



