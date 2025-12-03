const form=document.getElementById("contact-form");
const nameInput=document.getElementById("name");
const emailInput=document.getElementById("email");
const messageInput=document.getElementById("message");
const feedback=document.getElementById("feedback");

function isValidEmail(email){ return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); }

form.addEventListener("submit", function(e){
  e.preventDefault();
  if(nameInput.value.trim()==="" || emailInput.value.trim()==="" || messageInput.value.trim()===""){
    feedback.textContent="Please fill in all fields.";
    feedback.style.color="red"; return;
  }
  if(!isValidEmail(emailInput.value)){
    feedback.textContent="Please enter a valid email address.";
    feedback.style.color="red"; return;
  }
  feedback.textContent="Thank you! Your message has been sent.";
  feedback.style.color="green";
  form.reset();
});