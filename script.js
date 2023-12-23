const usernameField = document.getElementById("username");
const passwordField = document.getElementById("password");
const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = usernameField.value.trim();
  const password = passwordField.value;

  // Validate email format


  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(username)) {
    alert("Please enter a valid email address.");
    return;
  }

  // Validate password complexity
  if (!/[A-Z]/.test(password) || !/\d/.test(password) || /[^a-zA-Z0-9@]/.test(password)) {
    alert("Password must contain an uppercase letter, a number, and no special characters other than @.");
    return;
  }

  if (password === 'SmartServTest@123') {
    // Redirect to the dashboard page
    window.location.href = 'dashboard.html';
  } else {
    alert('Incorrect password. Please try again.');
  }
});

function forgotPassword() {
  // Create a mailto link with the subject and body pre-populated
  const mailtoLink = 'mailto:support@smartserv.io?subject=Password Reset&body=Dear Support,%0D%0A%0D%0AI have forgotten my password and would like to request a password reset.%0D%0A%0D%0AThank you.%0D%0A';

  // Open the default email client with the pre-populated mailto link
  window.location.href = mailtoLink;
}
