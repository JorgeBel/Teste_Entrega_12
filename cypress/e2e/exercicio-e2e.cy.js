/// <reference types="cypress" />
const { faker } = require('@faker-js/faker');
const localidade = require ('./localidade.json')


context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')

    });

    it('Deve adicionar o produto ao carrinho e fazer checkout até o final da compra!', () => {
        var quantidade = 2
        let nomeFaker = faker.name.firstName()
        let sobrenomeFaker = faker.name.lastName()
        let emailFaker = faker.internet.email(nomeFaker)

        cy.get('[class="product-block grid"]')
            .contains("Abominable Hoodie").click()
        cy.get('.button-variable-item-S').click()
        cy.get('.button-variable-item-Red').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()




        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        cy.get('.woocommerce-message').should('contain', quantidade + ' × “Abominable Hoodie” foram adicionados no seu carrinho.')
        


        cy.get('#primary-menu > .menu-item-629 > a').click()
        cy.get('.post-2664 > .product-block > .caption > .meta > .infor > .name > a').click()
        cy.get('.button-variable-item-XS').click()
        cy.get('.button-variable-item-Orange').click()
        cy.get('.input-text').clear().type("4").click()
        cy.get('.single_add_to_cart_button').click()



        cy.get('.woocommerce-message > .button').click()
        cy.get('.cart_item > .product-name').should('contain', "Beaumont Summit Kit")
        

        cy.get('.checkout-button').click()

        cy.addDados
        cy.get('#billing_first_name').type(nomeFaker)
        cy.get('#billing_last_name').type(sobrenomeFaker)
        cy.get('#billing_company').type("Ebac")
        cy.get('#select2-billing_country-container').click().type("Colômbia" + "{enter}")
        cy.get('#billing_address_1').type("Estrada Casa Grande")
        cy.get('#billing_address_2').type("Condomínio")
        cy.get('#billing_city').type(localidade.cidade)
        cy.get('#billing_state').type(localidade.estado)
        cy.get('#billing_postcode').type("37640000")
        cy.get('#billing_phone').type("999999999")
        cy.get('#billing_email').type(emailFaker)
        cy.get('#payment_method_cod').click()
        cy.get('#terms').click()
        cy.get('#place_order').click()
        cy.get('.woocommerce-notice').should('contain', "Obrigado. Seu pedido foi recebido.")


    });


});

///

