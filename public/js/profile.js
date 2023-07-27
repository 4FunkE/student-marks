const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#teacher-name').value.trim();
  // const needed_funding = document.querySelector('#project-funding').value.trim();
  const description = document.querySelector('#rating-desc').value.trim();
  const selectedValue = localStorage.getItem('selectedValue');
  console.log("Retrieved value from localStorage:", selectedValue);
  console.log(name, selectedValue, description);
  

  
  if (name && selectedValue && description) {
    const response = await fetch(`/api/ratings`, {
      method: 'POST',
      body: JSON.stringify({ name, selectedValue, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    console.log(response);

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create rating');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/ratings/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete rating');
    }
  }
};

document
  .querySelector('.new-rating-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.rating-list')
  .addEventListener('click', delButtonHandler);
