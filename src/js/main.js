function validarLogin(event){
    
    event.preventDefault()
    const userInput = document.getElementById("usuario")
    const passInput = document.getElementById("senha")
    const messageErro = document.querySelector("p[class='errorMessage']")
    messageErro.textContent = ""
    
    const user = "admin"
    const password = "12345"
    
    const usuario = userInput.value
    const senha = passInput.value
    
    if(usuario === user & senha === password){
        window.alert("Login efetuado com sucesso. Redirecioando")
        return document.open("admin.html")
        messageErro.textContent = ""
    } else {
        messageErro.textContent = "Credenciais Inválidas"
    }
}