const listaStartups = [
    "App de delivery de ração por assinatura",
    "Plataforma de IA para otimizar estudos na faculdade",
    "Marketplace de ferramentas para desenvolvedores"
];

function ejecutarLogin() {
    let usuarioDigitado = document.getElementById("usuario").value;
    let senhaDigitada = document.getElementById("senha").value;
    const mensagemErro = document.getElementById("mensagem-erro");

    if (usuarioDigitado === "aluno" && senhaDigitada === "fiap2026") {
        document.getElementById("tela-login").classList.add("oculto");
        document.getElementById("tela-crud").classList.remove("oculto");
        
        renderizarLista();
    } else {
        mensagemErro.innerText = "Usuário ou senha incorretos!";
    }
}

function renderizarLista() {
    const ul = document.getElementById("lista-renderizada");
    ul.innerHTML = "";

    for (let i = 0; i < listaStartups.length; i++) {
        let itemTexto = listaStartups[i];

        const li = document.createElement("li");

        const spanTexto = document.createElement("span");
        spanTexto.innerText = itemTexto;
        li.appendChild(spanTexto);

        const divBotoes = document.createElement("div");
        divBotoes.className = "botoes-item";

        const btnEditar = document.createElement("button");
        btnEditar.innerText = "Editar";
        btnEditar.setAttribute("onclick", "editarItem(" + i + ")");
        divBotoes.appendChild(btnEditar);

        const btnDeletar = document.createElement("button");
        btnDeletar.innerText = "Deletar";
        btnDeletar.className = "btn-deletar";
        btnDeletar.setAttribute("onclick", "removerItem(" + i + ")");
        divBotoes.appendChild(btnDeletar);

        li.appendChild(divBotoes);
        ul.appendChild(li);
    }
}


function adicionarNoFinal() {
    const input = document.getElementById("nova-ideia");
    let valor = input.value.trim();

    if (valor !== "") {
        listaStartups.push(valor); 
        input.value = ""; 
        renderizarLista(); 
    } else {
        alert("Por favor, digite uma ideia válida!");
    }
}

function adicionarNoInicio() {
    const input = document.getElementById("nova-ideia");
    let valor = input.value.trim();

    if (valor !== "") {
        listaStartups.unshift(valor);
        input.value = ""; 
        renderizarLista(); 
    } else {
        alert("Por favor, digite uma ideia válida!");
    }
}

function editarItem(indice) {
    
    let valorAtual = listaStartups[indice];
    let novoValor = prompt("Edite sua ideia de startup:", valorAtual);

    if (novoValor !== null && novoValor.trim() !== "") {
        listaStartups[indice] = novoValor.trim(); 
        renderizarLista();
    }
}

function removerItem(indice) {
    
    let confirmar = confirm("Tem certeza que deseja remover esta ideia?");
    
    if (confirmar) {
        
        listaStartups.splice(indice, 1);
        renderizarLista();
    }
}