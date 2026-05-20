# Relatório de Uso de Inteligência Artificial

## 1. IAs Consultadas
 ChatGPT (OpenAI)
 Claude (Anthropic)
 Gemini (Google) 

## 2. Prompt Utilizado
> "Estou desenvolvendo um projeto prático para a faculdade (nível primeiro semestre) e preciso criar uma aplicação web simples em página única (SPA) utilizando apenas HTML5, CSS3 e JavaScript puro (Vanilla JS). O objetivo é demonstrar conceitos básicos de manipulação de funções, condicionais e estruturas de dados simples.

Requisitos da Aplicação:

- Tela de Autenticação:
- Uma interface de login simples com campos de usuário e senha.
- Validação estrita via JavaScript: usuário deve ser igual a 'aluno' e a senha idêntica a 'fiap2026'.
- Ao autenticar com sucesso, a tela de login deve ser ocultada e a área restrita do sistema deve aparecer na mesma página (sem redirecionar para outro arquivo HTML).
- Área do Sistema (CRUD de Ideias de Startups):
- Estrutura de Dados Estrita: Você deve gerenciar os dados utilizando apenas um array de strings simples (Ex: let ideias = ["App de entregas", "Fintech de moedas"];). É proibido o uso de arrays de objetos.

Operações Obrigatórias:

- Criar: Permitir que o usuário digite uma nova ideia e escolha se quer adicioná-la ao início do array (usando unshift) ou ao final do array (usando push).
- Ler: Exibir a lista atualizada de strings na tela toda vez que o array for modificado.
- Atualizar: Um botão ou comando simples para editar o texto de uma ideia existente com base na posição dela.
- Deletar: Um botão para remover uma ideia específica da lista.
- Arquitetura do Código (Padrão de Primeiro Semestre):
- Sem recursos avançados: Não utilize Arrow Functions (=>), métodos complexos de alta ordem (map, filter, reduce), try/catch, async/await ou módulos (import/export).

Organização: Toda a lógica deve ser construída obrigatoriamente dentro de funções nomeadas tradicionais (Ex: function validarLogin(), function adicionarAoInicio(), function renderizarLista()).

As variáveis globais e de controle de estado devem ser declaradas de forma explícita no topo do script usando let.

Estilização (CSS):

Um layout limpo, organizado e centralizado na tela. Pode usar um visual moderno (como um modo escuro simples), mas utilizando propriedades básicas de layout (como Flexbox ou margens tradicionais) e seletores simples de ID e classe.

Por favor, forneça o código completo estruturado em um único arquivo HTML com o <style> e o <script> embutidos ou dividido em três arquivos separados (HTML, CSS e JS), garantindo que a lógica pareça o trabalho de um aluno que está aprendendo os fundamentos de programação de computadores."


## 3. Análise das Respostas das IAs
 **ChatGPT:** Gerou um codigo funcional mas não funcionou a aba de CRUD, o login não acessa a outra pagina igual a versão original feita por mim
 **Claude:** Gerou um codigo funcional e pratico funcionou a aba de CRUD, o login esta perfeito deixou o css visualmente mais bonita do que as outras, ele teve o melhor desempenho das tres.
 **Gemini:** Gerou um codigo funcional, mas não funciona a aba de CRUD, igual o ChatGpt, o login não acessa a outra paginal igual no Claude e na versão original, mas o css esta bem feito
