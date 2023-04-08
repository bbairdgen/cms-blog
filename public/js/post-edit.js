const editPost = async (event) => {
    event.preventDefault();
    let title = document.getElementById("project-name").value
    let description = document.getElementById("project-desc").value
    const response = await fetch(`/api/posts/${event.target.value}`, {
        method: 'PUT',
        body: JSON.stringify({ title, description }),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (response.ok) {
        document.location.replace('/dashboard')
    } else {
        alert('Failed to edit post.')
    }

}

const delButtonHandler = async (event) => {
    event.preventDefault()
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to delete post');
      }
    }
  };

document
.querySelector('.btn-submit')
.addEventListener('click', editPost)

document
  .querySelector('.btn-delete')
  .addEventListener('click', delButtonHandler);