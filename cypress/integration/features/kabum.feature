Feature: Fluxo de Compra
Eu como um usuário, gostaria de validar se o produto foi adicionado no carrinho com sucesso

Background: Entrar no site da Kabum
Given que eu esteja no site da Kabum

Scenario: Validar se o produto foi adicionado no carrinho com sucesso
When comprar um produto de minha escolha
And adicionar o produto ao carrinho
Then devo ver o item adicionado com sucesso