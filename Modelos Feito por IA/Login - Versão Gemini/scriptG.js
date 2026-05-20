// ==========================================
        // VARIÁVEIS GLOBAIS E CONTROLE DE ESTADO
        // ==========================================
        let ideias = ["App de entregas ecológicas", "Fintech para microempreendedores"];

        // Elementos globais do DOM para facilitar o acesso pelas funções
        let campoUsuario = document.getElementById("usuario");
        let campoSenha = document.getElementById("senha");
        let mensagemErro = document.getElementById("mensagem-erro");
        
        let divTelaLogin = document.getElementById("tela-login");
        let divTelaSistema = document.getElementById("tela-sistema");
        
        let campoNovaIdeia = document.getElementById("nova-ideia");
        let ulListaIdeias = document.getElementById("lista-ideias");

        // ==========================================
        // FUNÇÃO DE AUTENTICAÇÃO
        // ==========================================
        function validarLogin() {
            let usuarioDigitado = campoUsuario.value;
            let senhaDigitada = campoSenha.value;

            // Validação estrita conforme requisitos do projeto
            if (usuarioDigitado === "aluno" && senhaDigitada === "fiap2026") {
                // Oculta a tela de login e exibe a tela do sistema (Comportamento SPA)
                divTelaLogin.style.display = "none";
                divTelaSistema.style.display = "block";
                
                // Executa a primeira renderização dos dados já existentes no array
                renderizarLista();
            } else {
                // Exibe a mensagem de erro em caso de credenciais inválidas
                mensagemErro.style.display = "block";
            }
        }

        // ==========================================
        // FUNÇÕES DO CRUD (CRIAR, LER, ATUALIZAR, DELETAR)
        // ==========================================

        // FUNÇÃO DE LEITURA (Renderiza o array na interface de forma dinâmica)
        function renderizarLista() {
            // Limpa o conteúdo visual antigo da lista antes de reconstruí-la
            ulListaIdeias.innerHTML = "";

            // Laço de repetição tradicional para varrer o array de strings simples
            for (let i = 0; i < ideias.length; i++) {
                let textoIdeiaAtual = ideias[i];

                // Montagem manual e limpa de strings HTML estruturando botões com o índice do elemento
                let itemHTML = '<li class="item-ideia">' +
                    '<span class="texto-ideia">' + textoIdeiaAtual + '</span>' +
                    '<div class="acoes">' +
                        '<button class="btn-pequeno btn-editar" onclick="atualizarIdeia(' + i + ')">Editar</button>' +
                        '<button class="btn-pequeno btn-excluir" onclick="deletarIdeia(' + i + ')">Excluir</button>' +
                    '</div>' +
                '</li>';

                // Adiciona a estrutura montada dentro do container UL
                ulListaIdeias.innerHTML = ulListaIdeias.innerHTML + itemHTML;
            }
        }

        // FUNÇÃO DE CRIAÇÃO: Adicionar no Início (unshift)
        function adicionarAoInicio() {
            let textoDigitado = campoNovaIdeia.value;

            // Validação simples para evitar adicionar strings vazias
            if (textoDigitado !== "") {
                ideias.unshift(textoDigitado); // Insere no início do array
                campoNovaIdeia.value = "";     // Limpa o campo de texto
                renderizarLista();             // Atualiza a visualização
            }
        }

        // FUNÇÃO DE CRIAÇÃO: Adicionar no Final (push)
        function adicionarAoFinal() {
            let textoDigitado = campoNovaIdeia.value;

            if (textoDigitado !== "") {
                ideias.push(textoDigitado);    // Insere no final do array
                campoNovaIdeia.value = "";     // Limpa o campo de texto
                renderizarLista();             // Atualiza a visualização
            }
        }

        // FUNÇÃO DE ATUALIZAÇÃO (Altera uma string existente no array usando seu índice)
        function atualizarIdeia(indice) {
            // Captura o valor antigo com base no índice numérico
            let valorAntigo = ideias[indice];
            
            // Solicita o novo nome usando um prompt padrão (adequado para nível iniciante)
            let novoTexto = prompt("Altere o nome da ideia de startup:", valorAntigo);

            // Valida se o usuário digitou algo e não cancelou o prompt
            if (novoTexto !== null && novoTexto !== "") {
                ideias[indice] = novoTexto;    // Sobrescreve a posição correspondente do array
                renderizarLista();             // Atualiza a visualização
            }
        }

        // FUNÇÃO DE EXCLUSÃO (Remove um elemento do array usando seu índice)
        function deletarIdeia(indice) {
            // Confirmação simples com o usuário
            let confirmar = confirm("Tem certeza que deseja excluir esta ideia?");

            if (confirmar === true) {
                ideias.splice(indice, 1);     // Remove exatamente 1 elemento a partir da posição "indice"
                renderizarLista();            // Atualiza a visualização
            }
        }