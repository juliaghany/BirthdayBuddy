const personSelection = document.querySelector("#person-list");

fetch("/api/receiver")
.then(res => res.json())
.then(data => {
    console.log(data)
    
    for(i = 0; i < data.length; i++) {
        const newOption = document.createElement("option");
        newOption.textContent = data[i].name;
        newOption.setAttribute("value", data[i].id)

        personSelection.append(newOption)
    }
})


const form = document.querySelector("#new-gift-form");

form.addEventListener("submit", (event) => {

    event.preventDefault();

    const description = document.querySelector("#description").value
    const receiver_id = document.querySelector("#person-list").value

    console.log({
        description,
        receiver_id
    })

    // fetch("/api/gift", {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify({
    //         description,
    //         receiver_id
    //     })
    // })
    // .then(res => res.json())
    // .then(data => {
    //     console.log(data)
    // })
})