async function signup() {
    let data = {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    }
    let signupp = await fetch("http://localhost:3000/register", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    let resp = await signupp.json()

    alert(resp.message)
}