// Function to handle user logout
const logout = async () => {
  // Create a new FormData object
  const formData = new FormData();
  
  try {
  // Send a POST request to the API endpoint for user logout
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    body: formData,
  });

  // Check if the logout request was successful
  if (response.ok) {
    // If successful, redirect the browser to the homepage
    document.location.replace('/');
    console.log("logout done.")
  } else {
    alert(response.statusText);
  }
} catch (error) {
  // Handle any errors that might occur during the fetch operation
  alert('An error occurred while logging out. Please try again.');
}
};
// Add a click event listener to the logout button
document.querySelector('#logout').addEventListener('click', logout);
