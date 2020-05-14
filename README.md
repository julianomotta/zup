#################################### Desafio Zup - automação Web
Desafio Zup - Juliano

Utilizando as ferramentas que preferir crie um teste automatizado que faça o fluxo de ponta
a ponta de um cliente que:

1- Entre em um grande portal de comércio online
(Exemplo: Americanas, Submarino, Magazine Luiza)
2- Faça uma busca por um produto
3- Valide o retorno da busca
4- Escolha um produto na lista
5- Adicione o carrinho
6- Valide o produto no carrinho

#################################### Passos de instalação cypress:

https://docs.cypress.io/guides/getting-started/installing-cypress.html#Installing
https://www.concrete.com.br/2019/01/24/cypress-com-cucumber-nos-testes-e2e/

cypress run --reporter mochawesome

Instalação Cypress:
https://docs.cypress.io/pt-br/guides/getting-started/installing-cypress.html#npm-install

#################################### Passos para executar o projeto:

Passo 0
- Instalar o nodejs em sua máquina: https://nodejs.org/en/download/
- Instalar o visual code em sua máquina: https://code.visualstudio.com/download

Passo 1
- Criar uma pasta no C:\ com o nome que desejar;

Passo 2
- Abrir o prompt de comando "cmd" e ir até a pasta criada;
ou
- Digitar cmd na pasta onde será aberto o terminal. //o mesmo é aberto com a url certa

Passo 3
- Executar os passos abaixo no prompt:

1- npm init //preencher os campos, se quiser pode deixar tudo vazio. (Obs.: digitar "yes" no final.)
2- npm install cypress --save-dev

3- Inserir o trecho abaixo no arquivo package.json:
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "cypress": "cypress run",
    "cypress:open": "cypress open",
    "cypress:run": "cypress run --spec=cypress/integration/test/*/"
  },

//Dentro do VS ou pelo cmd 
4- rodar o comando: npm run cypress:open //dessa forma a pasta cypress será criada.

5- npm install cypress-cucumber-preprocessor  -–save-dev //instala as dependencias do cucumber
   
6- npm audit fix //corrigi possiveis erros

7- No arquivo cypress/plugins/index.js adicionar o seguinte trecho de código:
const cucumber = require('cypress-cucumber-preprocessor').default
 module.exports = (on, config) => {
 on('file:preprocessor', cucumber())
}

