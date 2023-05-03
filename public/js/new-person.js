const form = document.querySelector("#new-person-form");

form.addEventListener("submit", (event) => {

    event.preventDefault();

    // get the name
    const name = document.querySelector("#name").value
    // get the birthday
    const birth_date = document.querySelector("#birth-date").value

    // submit both name and birthday to the backend using fetch post
    fetch("/api/receiver", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name,
            birth_date
        })
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
})