async function getData() {
    const url = "http://localhost:3333"
    const response = await fetch(`${url}/birds`)

    await response.json()
        .then(data => {
            console.log(data)
            return data;
        });
}