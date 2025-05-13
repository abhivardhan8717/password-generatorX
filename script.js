function generatePassword() {
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+{}[]";
  let password = "";
  for (let i = 0; i < 12; i++) {
    password += chars[Math.floor(Math.random() * chars.length)];
  }
  document.getElementById("password").value = password;
}

function copyPassword() {
  const passwordInput = document.getElementById("password");
  const tooltipText = document.getElementById("tooltip-text");

  passwordInput.select();
  passwordInput.setSelectionRange(0, 99999); // For mobile
  navigator.clipboard.writeText(passwordInput.value).then(() => {
    tooltipText.textContent = "Copied!";
    setTimeout(() => {
      tooltipText.textContent = "Copy";
    }, 1500);
  });
}
