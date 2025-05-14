// 1. Button Click Event
document.getElementById("changeBtn").addEventListener("click", function() {
  this.textContent = "You clicked me!";
  this.style.backgroundColor = this.style.backgroundColor === "blue" ? "green" : "blue";
});

// 2. Hover Effect
document.getElementById("hoverDiv").addEventListener("mouseover", function() {
  this.style.backgroundColor = "yellow";
});
document.getElementById("hoverDiv").addEventListener("mouseout", function() {
  this.style.backgroundColor = "";
});

// 3. Keypress Detection
document.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    alert("You pressed Enter!");
  }
});

// 4. Image Gallery (Next/Previous)
let currentIndex = 0;
const images = ["Image1.jpg", "Image2.jpg", "Image3.jpg"];

document.getElementById("nextBtn").addEventListener("click", function() {
  currentIndex = (currentIndex + 1) % images.length;
  document.getElementById("currentImage").src = images[currentIndex];
});

document.getElementById("prevBtn").addEventListener("click", function() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  document.getElementById("currentImage").src = images[currentIndex];
});

// 5. Form Validation
document.getElementById("myForm").addEventListener("submit", function(event) {
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  
  // Username Required
  if (username.trim() === "") {
    alert("Username is required!");
    event.preventDefault();
  }

  // Email Format Validation
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    event.preventDefault();
  }

  // Password Length Validation
  if (password.length < 8) {
    alert("Password must be at least 8 characters long.");
    event.preventDefault();
  }
});

// 6. Tab System
function showContent(index) {
  const contents = document.querySelectorAll(".content");
  contents.forEach(function(content, i) {
    content.style.display = i === index ? "block" : "none";
  });
}
