# Relatório de Uso de Inteligência Artificial

## 1. IAs Consultadas
 ChatGPT (OpenAI)
 Claude (Anthropic)
 Gemini (Google) - *Escolhida como base*

## 2. Prompt Utilizado
> "Crie uma aplicação web simples (HTML, CSS e JavaScript puro) com uma tela de login (usuário: 'aluno', senha: 'fiap2026'). Após o login, oculte o formulário e exiba um CRUD de uma lista de 'Ideias de Startups'. Requisitos estritos: Use apenas um array de strings simples para os dados (sem objetos). Toda a lógica deve estar em funções nomeadas. O código deve ser simples, nível primeiro semestre de faculdade, sem recursos avançados. Permita adicionar ao início e ao final da lista, editar e remover."

## 3. Análise das Respostas das IAs
 **ChatGPT:** Gerou um código funcional, mas utilizou objetos (`{ id: 1, nome: "Ideia" }`) dentro do array para gerenciar o CRUD, o que viola o requisito de usar apenas um array de strings.
 **Claude:** Utilizou recursos modernos de CSS e funções anônimas (Arrow Functions) que fogem do escopo do material didático atual do primeiro semestre.
 **Gemini:** Seguiu estritamente as regras de restrição. Utilizou apenas um array de strings, funções nomeadas tradicionais (`function nome()`), e separou o HTML e CSS de forma clara e simples.

## 4. Justificativa da Escolha
A solução do Gemini foi escolhida por ser a única que respeitou 100% as restrições pedagógicas do projeto: uso exclusivo de array de strings simples, funções nomeadas para toda a lógica e uma estrutura de manipulação de DOM perfeitamente alinhada com o conteúdo de primeiro semestre.