// =====================================================
//  script.js — StartupLab FIAP 2026
// =====================================================

// ==========================================================
// VARIÁVEIS GLOBAIS
// ==========================================================
let ideias = ["App de entregas verdes", "Fintech de moedas estudantis"];
let usuarioCorreto = "aluno";
let senhaCorreta   = "fiap2026";
let logado         = false;

// ==========================================================
// AUTENTICAÇÃO
// ==========================================================

// Valida o login ao clicar em "Entrar"
function validarLogin() {
  let campoUsuario = document.getElementById("campo-usuario");
  let campoSenha   = document.getElementById("campo-senha");
  let mensagemErro = document.getElementById("mensagem-erro");

  let usuarioDigitado = campoUsuario.value;
  let senhaDigitada   = campoSenha.value;

  if (usuarioDigitado === usuarioCorreto && senhaDigitada === senhaCorreta) {
    logado = true;
    mensagemErro.style.display = "none";
    mostrarSistema();
  } else {
    mensagemErro.style.display = "block";
  }
}

// Exibe o sistema e esconde o login
function mostrarSistema() {
  document.getElementById("tela-login").style.display   = "none";
  document.getElementById("tela-sistema").style.display = "block";
  renderizarLista();
}

// Volta para a tela de login
function fazerLogout() {
  logado = false;
  document.getElementById("campo-usuario").value = "";
  document.getElementById("campo-senha").value   = "";
  document.getElementById("tela-sistema").style.display = "none";
  document.getElementById("tela-login").style.display   = "block";
}

// Permite pressionar Enter para logar
document.getElementById("campo-senha").onkeydown = function(evento) {
  if (evento.key === "Enter") {
    validarLogin();
  }
};

// ==========================================================
// CRUD — CRIAR
// ==========================================================

// Lê o campo de texto e retorna o valor limpo
function obterTextoDoInput() {
  let campoIdeia = document.getElementById("campo-ideia");
  let texto = campoIdeia.value.trim();
  return texto;
}

// Adiciona ideia ao FINAL do array (push)
function adicionarAoFinal() {
  let texto = obterTextoDoInput();

  if (texto === "") {
    alert("Por favor, digite uma ideia antes de adicionar.");
    return;
  }

  ideias.push(texto);
  document.getElementById("campo-ideia").value = "";
  renderizarLista();
}

// Adiciona ideia ao INÍCIO do array (unshift)
function adicionarAoInicio() {
  let texto = obterTextoDoInput();

  if (texto === "") {
    alert("Por favor, digite uma ideia antes de adicionar.");
    return;
  }

  ideias.unshift(texto);
  document.getElementById("campo-ideia").value = "";
  renderizarLista();
}

// ==========================================================
// CRUD — LER (renderizar lista)
// ==========================================================

// Exibe todas as ideias do array na tela
function renderizarLista() {
  let ul       = document.getElementById("lista-ideias");
  let contador = document.getElementById("contador");

  // Limpa a lista antes de redesenhar
  ul.innerHTML = "";

  // Atualiza o contador
  contador.textContent = ideias.length;

  // Se o array estiver vazio, mostra mensagem
  if (ideias.length === 0) {
    ul.innerHTML = '<li class="lista-vazia"><strong>💡</strong>Nenhuma ideia cadastrada ainda.<br/>Adicione sua primeira startup acima!</li>';
    return;
  }

  // Cria um <li> para cada posição do array
  let i = 0;
  while (i < ideias.length) {
    let li = document.createElement("li");
    li.className = "ideia-item";

    // Índice
    let spanIndice = document.createElement("span");
    spanIndice.className   = "ideia-indice";
    spanIndice.textContent = "[" + i + "]";

    // Texto da ideia
    let spanTexto = document.createElement("span");
    spanTexto.className   = "ideia-texto";
    spanTexto.textContent = ideias[i];

    // Botão Editar
    let btnEditar = document.createElement("button");
    btnEditar.className   = "btn-editar";
    btnEditar.textContent = "editar";
    btnEditar.setAttribute("data-indice", i);
    btnEditar.onclick = function() {
      let indice = parseInt(this.getAttribute("data-indice"));
      editarIdeia(indice);
    };

    // Botão Deletar
    let btnDeletar = document.createElement("button");
    btnDeletar.className   = "btn-deletar";
    btnDeletar.textContent = "deletar";
    btnDeletar.setAttribute("data-indice", i);
    btnDeletar.onclick = function() {
      let indice = parseInt(this.getAttribute("data-indice"));
      deletarIdeia(indice);
    };

    // Monta o item
    li.appendChild(spanIndice);
    li.appendChild(spanTexto);
    li.appendChild(btnEditar);
    li.appendChild(btnDeletar);

    ul.appendChild(li);
    i++;
  }
}

// ==========================================================
// CRUD — ATUALIZAR
// ==========================================================

// Edita o texto de uma ideia pelo índice
function editarIdeia(indice) {
  let textoAtual = ideias[indice];
  let novoTexto  = prompt("Edite a ideia na posição [" + indice + "]:", textoAtual);

  // Se o usuário cancelou, não faz nada
  if (novoTexto === null) {
    return;
  }

  novoTexto = novoTexto.trim();

  if (novoTexto === "") {
    alert("A ideia não pode ficar em branco.");
    return;
  }

  ideias[indice] = novoTexto;
  renderizarLista();
}

// ==========================================================
// CRUD — DELETAR
// ==========================================================

// Remove uma ideia pelo índice usando splice
function deletarIdeia(indice) {
  let confirmar = confirm("Tem certeza que deseja deletar a ideia:\n\"" + ideias[indice] + "\"?");

  if (confirmar === true) {
    ideias.splice(indice, 1);
    renderizarLista();
  }
}