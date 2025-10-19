// Parallax Effect
    // Selecionando elementos do DOM
    const rightElements = document.querySelector("img[class='rightElements']")
    const leftElements = document.querySelector("img[class='leftElements']")
    const sunElement = document.querySelector("img[class='sunElement']")
    const textMain = document.querySelector("h1[class='mainTitle']")
    const ajuMap = document.querySelector("img[class='mapaAju']")

    // Pegando a posição inicial do scroll, usando let pois irá variar
    let scrollPosition = window.scrollY

    // Adicionando um evento de scroll na janela
    window.addEventListener('scroll', () => {
        scrollPosition = window.scrollY

    // Movendo os elementos com base na posição do scroll
        rightElements.style.left = scrollPosition * 0.5 + 'px'
        leftElements.style.left = -scrollPosition * 0.5 + 'px'
        sunElement.style.left = scrollPosition * 0.5 + 'px'
        textMain.style.marginTop = scrollPosition * 0.5 + 'px'
        })

// Funcionalidade Gerais
    
    // Variáveis Globais
    let listaAdmin = []

    // Validação Login - login.html
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

    // Validação Formulário - main.html

    function formulario(event){
        event.preventDefault()

        // Variáveis do formulário
        const nome = document.querySelector("input[name='nome']").value
        const email = document.querySelector("input[name='email']").value
        const telefone = document.querySelector("input[name='telefone']").value
        const idade = document.querySelector("input[name='idade']").value
        const data = document.querySelector("input[name='data']").value
        const hora = document.querySelector("input[name='hora']").value
        const especialidade = document.querySelector("select[name='especialidade']").value

        // Objeto para armazenar no LocalStorage
        const agendamento = {
            nome,
            email,
            telefone,
            idade,
            data,
            hora,
            especialidade,
        }

        // Armazenar no LocalStorage
        localStorage.setItem("novoAgendamento", JSON.stringify(agendamento))
        alert("Cadastro Realizado!!")

        // Criando uma lista para melhor gerenciamento dos dados do formulário
        listaAdmin = Object.values(agendamento)
    }
    
    // Lista Formulário - admin.html
    function admin(event){
        
    }