// Get current user from localStorage
const currentUser = JSON.parse(localStorage.getItem("currentUser"));

const userInfo = document.querySelector("#userInfo");
const user = document.querySelector("#user");
const links = document.querySelector("#links");

if (currentUser) {
    if (links) links.remove();
    if (user) user.style.display = 'block';
    if (userInfo) userInfo.style.display = "flex";
    if (user) user.innerHTML = `Welcome ${currentUser.userName || currentUser.email}`;
}

const logOutBtn = document.querySelector("#logOut");
if (logOutBtn) {
    logOutBtn.addEventListener("click", () => {
        localStorage.removeItem("currentUser");
        showToast("Logged out successfully!", "success");
        setTimeout(() => {
            window.location = "index.html";
        }, 1200);
    });
}