async function signIn(){
    let data = {
        email:document.getElementById("InputEmail1").value,
        password:document.getElementById("InputPassword1").value
    }
    let login = await fetch("http://localhost:3000/signin",{
        method:"POST",
        body:JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    let resp = await login.json()
    if(resp.token){
        localStorage.setItem("tokens",resp.token)
        
        location.href ="/loggeddIn.html"
    }else{
        alert(resp.message)
    }

}