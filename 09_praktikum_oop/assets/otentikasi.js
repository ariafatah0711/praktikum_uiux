formElement = document.getElementById("loginForm");

formElement.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const messageElement = document.getElementById("message");

  setTimeout(() => {
    messageElement.textContent = "";
  }, 500);

  if (username === "aria" && password === "aria123") {
    // alert("Login successful!");
    messageElement.textContent = "Login successful!";
    document.body.innerHTML = "<h1>Welcome, Aria!</h1>";
  } else {
    // alert("Invalid username or password.");
    messageElement.textContent = "Invalid username or password.";
  }
});
