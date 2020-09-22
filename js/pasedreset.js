async function resett(){
    let data = {
        email:document.getElementById("InputEmail1").value
    }
    let resett = await fetch("https://nodejs-passwordreset.herokuapp.com/forgot_password",{
        method:"POST",
        body:JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    let resp = await resett.json()
    alert(resp.message)
}