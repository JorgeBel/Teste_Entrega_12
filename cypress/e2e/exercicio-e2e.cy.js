/// <reference types="cypress" />
import EnderecoPage from "../support/page-ob/exercicio.page"


context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

   
    describe('Funcionalidade de produtos', () => {
        
        beforeEach(() => {
            cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    
        });
    
    it('Deve adicionar o produto ao carrinho e fazer checkout!', () => {
        
        cy.addProdutos('Abominable Hoodie', 'XS', 'Blue', 4)
        cy.get('.button-variable-item-XS').click()

        ///

        cy.get('.dropdown-toggle > .text-skin > .icon-basket').click()
        cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .checkout').click()
        EnderecoPage.editarNewCadastro("Flávio", "Caio", "Ebac", "Colômbia",
        "Estrada das rosas", "Apartamento",
        "São Paulo", "São Paulo", "37640000",
        "999999999", "alunoebac@gmail.com")

        });
    });
});

///

