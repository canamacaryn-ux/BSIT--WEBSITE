// Select form and thank you message elements
const form = document.getElementById('contactForm');
const thankYouMsg = document.getElementById('thankYou');

// Listen for form submit
form.addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent page refresh

  // Optional: Get user input values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Display thank you message
  thankYouMsg.textContent = `Thank you, ${name}! Your message has been sent.`;
  thankYouMsg.style.display = 'block';

  // Reset the form fields
  form.reset();
});
