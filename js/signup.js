async function signup() {
    let data = {
        email: document.getElementById("InputEmail1").value,
        password: document.getElementById("InputPassword1").value
    }
    let signupp = await fetch("https://nodejs-passwordreset.herokuapp.com/signup", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    let resp = await signupp.json()

    alert("Account Created Go to Login page")
}