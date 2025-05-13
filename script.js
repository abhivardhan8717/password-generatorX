// Function to generate a random password
function generatePassword() {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
    let password = "";
    for (let i = 0; i < 12; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    document.getElementById("password").value = password;
}

// Copy password to clipboard and animate the icon
document.getElementById("copyBtn").addEventListener("click", function () {
    const passwordField = document.getElementById("password");
    passwordField.select();
    passwordField.setSelectionRange(0, 99999); // For mobile support

    // Copy to clipboard
    document.execCommand("copy");

    // Show feedback message
    const feedback = document.getElementById("copyFeedback");
    feedback.style.display = "block";
    setTimeout(() => {
        feedback.style.display = "none";
    }, 1500);

    // Animate the copy icon
    const icon = document.getElementById("copyBtn");
    icon.style.transform = "scale(1.4)";
    setTimeout(() => {
        icon.style.transform = "scale(1)";
    }, 300);
});
