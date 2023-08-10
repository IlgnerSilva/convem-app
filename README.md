# Projeto "Teste prático": Aplicação "Convem"

Este é um projeto simples que consiste em uma aplicação Angular que interage com um backend Node.js para exibir uma pergunta e confirmar a participação em um time. A aplicação exibe a pergunta "Você quer se juntar ao time da Convem?", permite ao usuário fornecer uma resposta e, em seguida, realiza uma chamada a uma API Node.js para processar a resposta e exibir uma mensagem correspondente.

## Funcionalidades

- Exibição da pergunta: "Você quer se juntar ao time da Convem?"
- Campo de entrada para resposta.
- Botão para confirmar a resposta.
- Integração com um backend Node.js para processar a resposta e fornecer feedback.

## Tecnologias Utilizadas

- Angular (angular.io) - Framework de desenvolvimento web front-end.
- Node.js - Ambiente de tempo de execução JavaScript para o servidor.
- Express - Framework para criação de aplicativos web em Node.js.
- HttpClient - Módulo do Angular para fazer solicitações HTTP.

## Como Executar o Projeto

### Pré-requisitos

- Node.js e npm instalados globalmente.
- Angular CLI instalado globalmente (`npm install -g @angular/cli`).

### Configuração

1. Clone o repositório ou faça o download do projeto.
2. Navegue para o diretório raiz do projeto no terminal.

#### Frontend (Angular)

1. Navegue para a pasta "frontend" (`cd frontend`).
2. Instale as dependências do projeto com o comando `npm install`.
3. Inicie o servidor de desenvolvimento com `npm start`.
4. Abra seu navegador e acesse `http://localhost:4200` para ver a aplicação em execução.

#### Backend (Node.js)

1. Navegue para a pasta "backend" (`cd backend`).
2. Instale as dependências do projeto com o comando `npm install`.
3. Inicie o servidor backend com `npm start`.
4. O servidor estará disponível em `http://localhost:3000`.

### Uso da Aplicação

1. Acesse `http://localhost:4200` no navegador.
2. Responda à pergunta com "SIM" ou qualquer outra resposta.
3. Clique no botão "Confirmar".
4. A aplicação se comunicará com o backend e exibirá uma mensagem de sucesso ou erro com base na resposta.
