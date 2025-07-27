let passwordField = document.getElementById("password");

function generatePassword() {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
    let newPassword = "";
    for (let i = 0; i < 12; i++) {
        newPassword += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    passwordField.value = newPassword;
}

function copyPassword() {
    passwordField.select();
    document.execCommand("copy");
}

// Optional: Add event listener instead of inline onclick
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("generate-button").addEventListener("click", generatePassword);
    document.getElementById("copy-image").addEventListener("click", copyPassword);
});
