// Select input fields and signup button
const userName = document.querySelector("#userName");
const password = document.querySelector("#password");
const email = document.querySelector("#email");
const signUPBtn = document.querySelector("#signUP");

// Focus on username input on page load
window.onload = () => {
    userName.focus();
};

// Helper: Get users array from localStorage or return empty array
const getUsers = () => JSON.parse(localStorage.getItem("users")) || [];

// Helper: Save users array to localStorage
const saveUsers = users => {
    localStorage.setItem("users", JSON.stringify(users));
};

// Signup button click event
signUPBtn.addEventListener("click", e => {
    e.preventDefault();
    // Validate input fields
    if (userName.value === "" || password.value === "" || email.value === "") {
        showToast("Please fill in all fields.", "error");
        return;
    }
    const users = getUsers();
    // Check for duplicate email
    const userExists = users.some(
        u =>  u.email.trim().toLowerCase() === email.value.trim().toLowerCase()
    );
    if (userExists) {
        showToast("ُEmail already exists.", "error");
        return;
    }
    // Create new user object
    const newUser = {
        userName: userName.value.trim(),
        password: password.value, // In real apps, never store plain passwords!
        email: email.value.trim()
    };
    users.push(newUser);
    saveUsers(users);
    showToast("Registration successful!", "success");
    setTimeout(() => {
        window.location = "login.html";
    }, 1200);
});