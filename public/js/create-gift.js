const giftForm = document.querySelector('#gift-form');
const giftInput = document.querySelector('#gift-input');
const giftList = document.querySelector('#gift-list');
const receiver_id = window.location.pathname.split("/").pop();

giftForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const description = giftInput.value;

    const response = await fetch(`/api/gifts`, {
        method: 'POST',
        body: JSON.stringify({ description, receiver_id }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        const gift = await response.json();
        giftList.insertAdjacentHTML('beforeend', `<li class="list-group-item list-item" data-id="${gift.id}"><button class="delete-gift delete-btn delete is-large"></button> ${gift.description} </li>`);
        giftInput.value = '';

    }
});

giftList.addEventListener('click', async (event) => {
    if (event.target.classList.contains('delete-gift')) {
        event.preventDefault();

        const button = event.target;
        const li = button.parentNode;
        const giftId = li.getAttribute('data-id');

        try {
            const response = await fetch(`/api/gifts/${giftId}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                li.remove();
            } else {
                console.log('Failed to delete gift');
            }
        } catch (err) {
            console.log(err);
            alert('Failed to delete gift');
        }
    }
});

