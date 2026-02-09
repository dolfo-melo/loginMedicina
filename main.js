// Parallax Effect
    // Selecionando elementos do DOM
    const sunElement = document.querySelector("img[class='sunElement']")
    const textMain = document.querySelector("h1[class='mainTitle']")
    const ajuMap = document.querySelector("img[class='mapaAju']")

    // Pegando a posição inicial do scroll, usando let pois irá variar
    let scrollPosition = window.scrollY

    // Adicionando um evento de scroll na janela
    window.addEventListener('scroll', () => {
        scrollPosition = window.scrollY

    // Movendo os elementos com base na posição do scroll
        sunElement.style.left = scrollPosition * 0.5 + 'px'
        textMain.style.marginTop = scrollPosition * 0.5 + 'px'
        })

// Funcionalidade Gerais

    // Validação Login - login.html
    function validarLogin(event){
    event.preventDefault()

    const usuario = document.getElementById("usuario")
    const senha = document.getElementById("senha")
    const messageErro = document.querySelector(".errorMessage")
    messageErro.textContent = ""
    
    const user = "admin"
    const password = "12345"
    
    if(user === usuario.value && password === senha.value){
        messageErro.textContent = ""
        window.alert("Login efetuado com sucesso. Redirecioando")
<<<<<<< HEAD
        window.location.href = "lista.html"
        
    } else {
        userInput.focus()
        userInput.value = "" 
        passInput.value = "" 
        messageErro.textContent = "Credenciais Inválidas"
=======
        window.location.href = 'lista.html'

    } else {
        messageErro.innerHTML = "Credenciais Inválidas"
        usuario.focus()
        usuario.value = "" 
        senha.value = "" 
>>>>>>> 0973f8d6222384685faec3fed3d187bb616be566
    }
    }

    // Validação Formulário - main.html

    function formulario(event){
        event.preventDefault()

        // Variáveis do formulário
        const formContent = document.querySelector(".formContent")
        const nome = document.querySelector("input[name='nome']").value
        const email = document.querySelector("input[name='email']").value
        const telefone = document.querySelector("input[name='telefone']").value
        const idade = document.querySelector("input[name='idade']").value
        const data = document.querySelector("input[name='data']").value
        const hora = document.querySelector("input[name='hora']").value
        const especialidade = document.querySelector("select[name='especialidade']").value

        // Armazenando dados do localStorage em um Objeto
        agendamentos = {
            nome,
            email,
            telefone,
            idade,
            data,
            hora,
            especialidade,
        }

        // Armazenar no LocalStorage
        localStorage.setItem("novoAgendamento", JSON.stringify(agendamentos))
        alert("Cadastro Realizado!!")
        // listaAgendamento(agendamentos) - Implementação Inválida
        formContent.reset()
    }
    
    // Lista Formulário - admin.html
    /* function listaAgendamento(agendamentos){
        const showBtn = document.querySelector(".showBtn")
        const listAgend = document.querySelector(".agendamento")
        const listNome =  document.querySelectorAll(".listNome")
        const listEmail =  document.querySelectorAll(".listEmail")
        const listIdade =  document.querySelectorAll(".listIdade")
        const listTelefone =  document.querySelectorAll(".listTelefone")
        const listData =  document.querySelectorAll(".listData")
        const listHora =  document.querySelectorAll(".listHora")
        const listEspecialidade =  document.querySelectorAll(".listEspecialidade")

        
        showBtn.style.display = "none"
        listAgend.style.display = "flex"
        listAgend.style.height = "60%"
        listAgend.style.marginBottom = "30px"
        listAgend.style.marginTop = "0"
<<<<<<< HEAD
        listText.textContent = listaAdmin
    }
=======
        listNome.innerHTML = `Nome: ${agendamentos.nome}` 
        listEmail.innerHTML = `E-mail: ${agendamentos.email}` 
        listTelefone.innerHTML = `Telefone: ${agendamentos.telefone}` 
        listIdade.innerHTML = `Idade: ${agendamentos.idade}` 
        listData.innerHTML = `Data: ${agendamentos.data}` 
        listHora.innerHTML = `Hora: ${agendamentos.hora}` 
        listEspecialidade.innerHTML = `Especialidade: ${agendamentos.especialidade}` 
    }

    // Função para voltar ao início do documento
    function voltarAgendamento(event){
        document.location.href = "lista.html"
    } */
>>>>>>> 0973f8d6222384685faec3fed3d187bb616be566
