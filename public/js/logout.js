// Import the FormData class from the 'form-data' package
const FormData = require('form-data');

// Function to handle user logout
const logout = async () => {
  // Create a new FormData object 
  const formData = new FormData();

  // Send a POST request to the API endpoint for user logout
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    body: formData, // Pass the FormData object as the request body
  });

  // Check if the logout request was successful
  if (response.ok) {
    // If successful, redirect the browser to the homepage
    document.location.replace('/');
  } else {
    alert(response.statusText);
  }
};
// Add a click event listener to the logout button
document.querySelector('#logout').addEventListener('click', logout);
