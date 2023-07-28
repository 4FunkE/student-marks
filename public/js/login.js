// Import the FormData class from the 'form-data' package
const FormData = require('form-data');

//Function to handle login form submission
const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  // Check if email and password are provided
  if (email && password) {
    // Create a new FormData object
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);

    // Send a POST request to the API endpoint for login
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: FormData,
    });

    //Check if the response is successful
    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/profile');
    } else {
      alert(response.statusText);
    }
  }
};

//Function to handle sinup form submission
const signupFormHandler = async (event) => {
  event.preventDefault();

  //collect values from the signup form
  const name = document.querySelector('#name-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  // Check if name, email, and password are provided
  if (name && email && password) {
    // Create a new FormData object
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('password', password);

    // Send a POST request to the API endpoint for signup
    const response = await fetch('/api/users', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      // If response is not successful, display the error message from the response
      alert(response.statusText);
    }
  }
};

// Attach loginFormHandler to the submit event of the login form
// Attach signupFormHandler to the submit event of the signup form
document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);
