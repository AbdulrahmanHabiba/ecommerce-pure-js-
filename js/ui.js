// showToast: Display a toast notification at the top of the page
// Usage: showToast('Message text', 'success') or showToast('Error text', 'error')
const showToast = (message, type = 'success') => {
    // Remove any existing toast
    const oldToast = document.querySelector('.custom-toast');
    if (oldToast) oldToast.remove();

    // Create toast element
    const toast = document.createElement('div');
    toast.className = `custom-toast ${type}`;
    toast.textContent = message;

    // Add to body
    document.body.appendChild(toast);

    // Remove after 2.5 seconds
    setTimeout(() => {
        toast.remove();
    }, 2500);
};
