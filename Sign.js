document.addEventListener('DOMContentLoaded', function () {
  const container = document.querySelector(".container");
  const loginButton = document.querySelector("#login-button");

  // Check if the user is logged in
  if (localStorage.getItem('loggedIn') === 'true') {
    // User is logged in, hide the login and register links
    document.querySelector('.menu-bar').style.display = 'none';
    // Show the login button instead
    loginButton.style.display = 'inline-block';
  }

  loginButton.addEventListener("click", () => {
    // Redirect to the login page
    window.location.href = "login.html";
  });
});
