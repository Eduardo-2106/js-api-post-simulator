# Simulador de Postagem com API Externa

Uma aplicação web interativa desenvolvida para simular a criação, envio e renderização em tempo real de publicações de blog. O projeto consome uma API REST fictícia utilizando requisições assíncronas, validando o ciclo completo de envio de dados (*Request*) e tratamento do retorno do servidor (*Response*).

Este projeto foi desenvolvido como um desafio prático durante o curso **DEVStart - HTML, CSS e JavaScript**, com o objetivo central de consolidar o entendimento sobre o protocolo HTTP e a manipulação dinâmica de elementos via JavaScript.

---

## Funcionalidades Técnicas

- **Envio Assíncrono de Dados (HTTP POST):** Captura os dados inseridos no formulário (Título e Conteúdo) e realiza um disparo assíncrono para a API REST pública [JSONPlaceholder](https://jsonplaceholder.typicode.com/) simulando a persistência de um novo post.
- **Manipulação Dinâmica do DOM:** Após o retorno positivo do servidor, o JavaScript processa a resposta JSON e renderiza instantaneamente o conteúdo na tela, limpando o formulário para uma nova interação.
- **Tratamento de Exceções e Resiliência (Error Handling):** Implementação de blocos estruturados de captura de erros (`try/catch`) capaz de monitorar falhas de conexão ou respostas inválidas da API, alertando o usuário de forma amigável na interface técnica.
- **Interface Limpa e Semântica:** Formatação visual desenvolvida com foco em legibilidade e acessibilidade, utilizando elementos nativos de formulário estruturados de forma semântica.

## Tecnologias Utilizadas

O desenvolvimento priorizou o uso de JavaScript Baunilha (*Vanilla JS*) para aprofundamento nos conceitos base da linguagem web:

- **HTML5:** Estrutura semântica utilizando tags adequadas como `<header>`, `<main>`, `<section>`, `<form>`, `<textarea>` e `<label>`.
- **CSS3:** Estilização customizada contendo reset global de caixa (`box-sizing`), efeitos visuais de transição suave (`transition`) no botão e formatação adaptada para exibição de blocos de texto estilizados (`white-space: pre-wrap`).
- **JavaScript (ES6+):** 
  - Seletores de escopo (`querySelector`).
  - Interceptação de eventos nativos do navegador (`addEventListener`, `preventDefault`).
  - Programação Assíncrona avançada (`async/await` combinada com a API `fetch`).
  - Formatação e transporte de dados via estrutura estrutural JSON (`JSON.stringify` e `response.json`).

## Estrutura do Repositório

O repositório mantém uma arquitetura simplificada e direta:
```bash
devstart-post-manager/
├── README.md 
├── index.html   # Estrutura e marcação semântica do formulário e saída de dados
├── style.css    # Identidade visual e estilização customizada dos componentes
└── script.js    # Lógica de negócio, consumo da API REST e manipulação de interface
