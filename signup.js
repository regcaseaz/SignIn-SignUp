document.getElementById("google-btn").addEventListener("click", function() {
    alert("Redirecting to Google sign up...");
    // You can replace the alert with actual redirection logic
    // For example:
    // window.location.href = "https://accounts.google.com/signup";
  });
  
  document.getElementById("facebook-btn").addEventListener("click", function() {
    alert("Redirecting to Facebook sign up...");
    // You can replace the alert with actual redirection logic
    // For example:
    // window.location.href = "https://www.facebook.com/r.php";
  });
  
  document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault();
    // Here you can add your form submission logic, like sending data to server or validating fields
    alert("Form submitted!");
  });
  
  document.getElementById("back-link").addEventListener("click", function() {
    alert("Redirecting to login page...");
    window.location.href = "Login.html";
  });