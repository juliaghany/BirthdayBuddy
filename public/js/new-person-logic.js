const receiverFormHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#name').value.trim();
    const birthday = document.querySelector('#birth-date').value.trim();

    if (name && birthday) {
        const response = await fetch('/api/receivers', {
            method: 'POST',
            body: JSON.stringify({ name, birthday }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.reload()
        } else {
            alert('Something went wrong!');
        }
    }
};

document.querySelector('#new-person-form').addEventListener('submit', receiverFormHandler)