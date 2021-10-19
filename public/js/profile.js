const newFormHandler = async (event) => {
    event.preventDefault();

    const items_name = document.querySelector('#project-name').value.trim();
    const item_price = document.querySelector('#project-funding').value.trim();
    const item_description = document.querySelector('#project-desc').value.trim();

    if (items_name && item_price && item_description) {
        const response = await fetch(`/api/items`, {
            method: 'POST',
            body: JSON.stringify({ items_name, item_price, item_description }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/items');
        } else {
            alert('Failed to create items');
        }
    }
};

const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        const response = await fetch(`/api/items/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.replace('/items');
        } else {
            alert('Failed to delete items');
        }
    }
};

document
    .querySelector('.new-project-form')
    .addEventListener('submit', newFormHandler);

document
    .querySelector('.project-list')
    .addEventListener('click', delButtonHandler);
