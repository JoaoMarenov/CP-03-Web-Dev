let usuarioCorreto = "aluno";
let senhaCorreta = "fiap2026";
let ideias = [
    "App de entregas",
    "Fintech de moedas",
    "Sistema de reciclagem"
];
function validarLogin(){
  let usuario = document.getElementById("usuario").value;
  let senha = document.getElementById("senha").value;
  let mensagem = document.getElementById("mensagemLogin");
    if(usuario === usuarioCorreto && senha === senhaCorreta){

        document.getElementById("telaLogin").classList.add("hidden");
        document.getElementById("telaSistema").classList.remove("hidden");
        renderizarLista();
    }else{
        mensagem.innerHTML = "Usuário ou senha inválidos";
    }
}

function adicionarNoFinal(){
    let campoIdeia = document.getElementById("novaIdeia");
    let texto = campoIdeia.value;
    if(texto !== ""){
        ideias.push(texto);
        campoIdeia.value = "";
        renderizarLista();
    }
}

function adicionarNoInicio(){
    let campoIdeia = document.getElementById("novaIdeia");
    let texto = campoIdeia.value;
    if(texto !== ""){
        ideias.unshift(texto);
        campoIdeia.value = "";
        renderizarLista();

    }

}

function renderizarLista(){
    let lista = document.getElementById("listaIdeias");
    lista.innerHTML = "";
    let i = 0;
    while(i < ideias.length){
        lista.innerHTML +=
        "<li>" +
            "<strong>Ideia " + i + ":</strong> " + ideias[i] +
            "<div class='acoes'>" +
                "<button class='btn-editar' onclick='editarIdeia(" + i + ")'>Editar</button>" +
                "<button class='btn-remover' onclick='removerIdeia(" + i + ")'>Remover</button>" +
            "</div>" +
        "</li>";
        i++;
    }
}

function editarIdeia(posicao){
    let novoTexto = prompt(
        "Digite o novo texto:",
        ideias[posicao]
    );
    if(novoTexto !== null && novoTexto !== ""){
        ideias[posicao] = novoTexto;
        renderizarLista();
    }
}

function removerIdeia(posicao){
    ideias.splice(posicao, 1);
    renderizarLista();
}