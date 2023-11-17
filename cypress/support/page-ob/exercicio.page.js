class EnderecoPage {

    editarNewCadastro(nome, sobrenome, empresa, pais, rua, casa, cidade, estado, cep, tel, email) {

        
        cy.get('#billing_first_name').type(nome)
        cy.get('#billing_last_name').type(sobrenome)
        cy.get('#billing_company').type(empresa)
        cy.get('#select2-billing_country-container').click().type(pais + "{enter}")
        cy.get('#billing_address_1').type(rua)
        cy.get('#billing_address_2').type(casa)
        cy.get('#billing_city').type(cidade)
        cy.get('#billing_state').type(estado)
        cy.get('#billing_postcode').type(cep)
        cy.get('#billing_phone').type(tel)
        cy.get('#billing_email').type(email)
        cy.get('#payment_method_cod').click()
        cy.get('#terms').click()
        cy.get('#place_order').click()
        cy.get('.woocommerce-notice').should('contain', "Obrigado. Seu pedido foi recebido.")


    }

}

export default new EnderecoPage()