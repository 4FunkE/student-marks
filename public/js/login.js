//Function to handle login form submission
const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  // Check if email and password are provided
  if (email && password) {
    // Send a POST request to the API endpoint for login
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
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
  const role = document.querySelector('#role-signup').value.trim(); 

  // Check if name, email, and password are provided
  if (name && email && password && role) {
console.log(name + ' ' + email + ' ' + password);
    // Send a POST request to the API endpoint for signup
    const response = await fetch('/api/users/', {
      method: 'POST',
      body: JSON.stringify({ name, email, password,role }),
      headers: { 'Content-Type': 'application/json' },
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
