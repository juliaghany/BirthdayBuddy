const giftFormEl = document.querySelector('#gift-form');
const giftListEl = document.querySelector('#gift-list');

function handleFormSubmit(event) {
    event.preventDefault();

    const giftItem = document.querySelector('input[name="gift-input"]').value;

    if (!giftItem) {
        console.log('No gift item filled out in form!');
        return;
    }

    const giftListItemEl = document.createElement('li');
    giftListItemEl.textContent = giftItem;

    const deleteBtnEl = document.createElement('button');
    deleteBtnEl.className = 'btn btn-danger btn-small delete-item-btn';
    deleteBtnEl.textContent = 'Remove';
    giftListItemEl.appendChild(deleteBtnEl);

    giftListEl.appendChild(giftListItemEl);

    document.querySelector('input[name="gift-input"]').value = '';
}

function handleRemoveItem(event) {
    const btnClicked = event.target;

    btnClicked.parentNode.remove();
}

giftListEl.addEventListener('click', function (event) {
    if (event.target.classList.contains('delete-item-btn')) {
        handleRemoveItem(event);
    }
});

giftFormEl.addEventListener('submit', handleFormSubmit);




