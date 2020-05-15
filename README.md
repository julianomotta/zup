##### Desafio Zup - Automação Web
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

##### Pré-Condições:

1. Instalar o nodejs em sua máquina: https://nodejs.org/en/download/
2. Instalar o visual code em sua máquina: https://code.visualstudio.com/download
3. Ter o git instalado na máquina.

##### Passos para executar o projeto

Passo 1

- Criar uma pasta no C:\ com o nome que desejar e clonar o projeto;
ou
- Fazer o dowload do mesmo e descompactar no C:\;

Passo 2
- Abrir o prompt de comando ou git bash na pasta raiz onde contém o cypress e rodar o comando "npm install" para que os arquivos "node_modules" sejam criados.

Passo 3
- Abra um novo terminal no VS-Code e execute o comando "npm run cypress:open" para que o cypress instale as dependência e abra a parte gráfica do teste para executar. 

Passo 4
- Clique em cima da .feature kabum ou clique no botão executar todos. E pronto, o cypress irá executar os testes.

#################################### Cenários de Teste

##### Feature: SUCESSO Fluxo de Compra - Declarativo

Eu como um usuário, gostaria de validar se o produto foi adicionado no carrinho com sucesso

Background: Entrar no site da Kabum

Given que eu esteja no site da Kabum

Scenario: Validar se o produto foi adicionado no carrinho com sucesso

When comprar um produto de minha escolha

And adicionar o produto ao carrinho

Then devo ver o item adicionado com sucesso

##### Feature: FALHA - Imperativo

Scenario: Fluxo de Compra com Produto Indisponivel

Dado que estou acessando o site https://www.kabum.com.br/

Quando pesquiso por Placa de Vídeo VGA NVIDIA EVGA GEFORCE GTX 1070 na barra da página inicial

E clico botão Buscar

E navego a página de detalhes do produto

E clico no botão de avise-me quando chegar

Então preencho meu e-mail na pop-up que abrir
