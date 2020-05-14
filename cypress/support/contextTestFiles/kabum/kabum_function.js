const elementosKabum = require('../kabum/kabum_element.js');
const massaDeDadosKabum = require('../kabum/kabum_data.js');

module.exports = {
    preencherBuscaSSD: function () {
        cy.get(elementosKabum.elementCampoBusca).clear().type(massaDeDadosKabum.buscarSSDLenar)
    },

    clicarLupaBuscar: function () {
        cy.get(elementosKabum.elemenBotaoBuscar).should('be.visible').click({ force: true })
    },

    assertSSDLexarNaListaDaBusca: function () {        
        cy.get(elementosKabum.elemenTituloSSD).should('have.text', massaDeDadosKabum.assertNomeCompletoSSDLexar)
    },

    clicarCarrinhoCompraBusca: function () {
        cy.get(elementosKabum.elemenCarrinhoCompraBusca).should('be.visible').click({ force: true })
    },

    assertProdutoNoCarrinho: function () { 
        cy.get(elementosKabum.elemenTituloAdicionadoNoCarrinho).should('have.text', massaDeDadosKabum.assertProdutoCarrinho)
    },
    
}