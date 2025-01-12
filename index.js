const createAccountBtn = document.getElementById('create-account');
const loginLink = document.getElementById('login');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');

createAccountBtn.addEventListener('click', (event) => {
  event.preventDefault(); // Prevents the form submission
  if (password.value !== confirmPassword.value) {
    alert("Passwords do not match!");
    return;
  }
  alert("This is not a real service!");
});

loginLink.addEventListener('click', (event) => {  
  event.preventDefault(); // Prevents the default link behavior
  alert("This is not a real service!");
});