import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

const fluxoDeCompra = require('../contextTestFiles/kabum/kabum_function.js');

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
});

Given('que eu esteja no site da Kabum', () => {
    cy.visit('/');
});

When('comprar um produto de minha escolha', () => {
    fluxoDeCompra.preencherBuscaSSD();
    fluxoDeCompra.clicarLupaBuscar();
    fluxoDeCompra.assertSSDLexarNaListaDaBusca();
});

When('adicionar o produto ao carrinho', () => {
    fluxoDeCompra.clicarCarrinhoCompraBusca();
});

Then('devo ver o item adicionado com sucesso', () => {
    fluxoDeCompra.assertProdutoNoCarrinho();
});