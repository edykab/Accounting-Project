document.addEventListener("DOMContentLoaded", function () {
  const loginButton = document.getElementById("login-button");
  const registerButton = document.getElementById("register-button");

  // Adds click event listeners to buttons
  if (loginButton) {
    loginButton.addEventListener("click", function () {
      navigateToDashboard();
    });
  }

  if (registerButton) {
    registerButton.addEventListener("click", function () {
      navigateToDashboard();
    });
  }

  // Function to navigate to the dashboard page
  function navigateToDashboard() {
    // Redirects to the dashboard page
    window.location.href = "dashboard.html";
  }
});
