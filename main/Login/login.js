async function logar(email, senha){
    const status = false
    const login = {
        email: email.value,
        senha: senha.value
    }
 
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body:JSON.stringify(login),
    }
    fetch("http://localhost:8080/login", options)
    .then(async data =>{
        if (!data.ok){
            throw Error(data.status);  
        }

        const req = await data.json();
        const token = req.token;

        console.log(token)

        window.localStorage.setItem('token', JSON.stringify(token))

    }).then(()=>{
        window.location.href = "../Admin/Admin.html"
    })
    .catch(error => console.log(error))
    
}
