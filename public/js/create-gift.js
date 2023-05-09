const giftForm = document.querySelector('#gift-form');
const giftInput = document.querySelector('#gift-input');
const giftList = document.querySelector('#gift-list');
let receiverId = window.location.pathname.split("/").pop();

giftForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const description = giftInput.value;

    const response = await fetch(`/api/receivers/${receiverId}/gifts`, {
        method: 'POST',
        body: JSON.stringify({ description }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        const gift = await response.json();
        giftList.insertAdjacentHTML('beforeend', `<li>${gift.description}</li>`);
        giftInput.value = '';
    } else {
        alert('Failed to post gift')
    }

    window.location.href = `/receivers/${receiverId}`
});

const deleteBtns = document.querySelectorAll('.delete-btn');

deleteBtns.forEach((button) => {
    button.addEventListener('click', async (event) => {
        event.preventDefault();

        const giftId = button.getAttribute('data-id');

        try {
            console.log(receiverId);
            console.log(giftId);
            const response = await fetch(`/api/receivers/${receiverId}/gifts/${giftId}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                button.parentNode.remove();
            } else {
                console.log('Failed to delete gift');
            }
        } catch (err) {
            console.log(err);
            alert('Failed to delete gift');
        }
    });
});
