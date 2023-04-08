
const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#project-name').value.trim();
  const description = document.querySelector('#project-desc').value.trim();
  if (title && description) {
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({ title, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to create post');
    }
  }

  if (scope.style.display === 'block') {
    scope.style.display = "none";
  } else {
    scope.style.display = "block";
  }
};

var unhide = document.getElementById('btn-new')


unhide.onclick = function() {
  var scope = document.getElementById('new-post')

  if (scope.style.display === 'none') {
    scope.style.display = "block";
  } else {
    scope.style.display = "none";
  }
}


document
  .querySelector('.new-post-form')
  .addEventListener('submit', newFormHandler);