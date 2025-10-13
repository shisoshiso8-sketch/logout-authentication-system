// Simple hardcoded "database" for demo
const USER_CREDENTIALS = {
    username: "user123",
    password: "pass123"
  };
  
  document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Get form inputs
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");
  
    // Check credentials
    if (username === USER_CREDENTIALS.username && password === USER_CREDENTIALS.password) {
      message.style.color = "green";
      message.textContent = "Login successful! Welcome.";
      // You could redirect here, or show hidden content
    } else {
      message.style.color = "#d32f2f";
      message.textContent = "Invalid username or password.";
    }
  });