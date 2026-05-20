let usuarioCorreto = "aluno";
let senhaCorreta = "fiap2026";
let jogos = [
    "Cuphead",
    "Hollow Knight",
    "Celeste"
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
    let campoJogo = document.getElementById("novoJogo");
    let texto = campoJogo.value;
    if(texto !== ""){
        jogos.push(texto);
        campoJogo.value = "";
        renderizarLista();
    }
}

function adicionarNoInicio(){
    let campoJogo = document.getElementById("novoJogo");
    let texto = campoJogo.value;
    if(texto !== ""){
        jogos.unshift(texto);
        campoJogo.value = "";
        renderizarLista();

    }

}

function renderizarLista(){
    let lista = document.getElementById("listaJogos");
    lista.innerHTML = "";
    let i = 0;
    while(i < jogos.length){
        lista.innerHTML +=
        "<li>" +
            "<strong>Jogo " + i + ":</strong> " + jogos[i] +
            "<div class='acoes'>" +
                "<button class='btn-editar' onclick='editarJogo(" + i + ")'>Editar</button>" +
                "<button class='btn-remover' onclick='removerJogo(" + i + ")'>Remover</button>" +
            "</div>" +
        "</li>";
        i++;
    }
}

function editarJogo(posicao){
    let novoJogo = prompt(
        "Digite o novo jogo:",
        jogos[posicao]
    );
    if(novoJogo !== null && novoJogo !== ""){
        jogos[posicao] = novoJogo;
        renderizarLista();
    }
}

function removerJogo(posicao){
    jogos.splice(posicao, 1);
    renderizarLista();
}