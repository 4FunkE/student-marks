// Function to handle user logout
const logout = async () => {
  // Send a POST request to the API endpoint for user logout
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  // Check if the logout request was successful
  if (response.ok) {
    // If successful, redirect the browser to the homepage
    document.location.replace('/');
    console.log('logout done.');
  } else {
    alert(response.statusText);
  }
};
// Add a click event listener to the logout button
document.querySelector('#logout').addEventListener('click', logout);
