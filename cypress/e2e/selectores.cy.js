/// <reference types="cypress" />


// copiar selectores manualmente

describe("The-internet  Login", ()=>{
    beforeEach('Ingresar a la página', ()=>{
        cy.visit('https://the-internet.herokuapp.com/login')
    })

    it('Copiando selectores',()=>{
        cy.get("#username").type('tomsmith')
        cy.get('#password').type('SuperSecretPassword!')
        cy.get('#login > button').click()
        cy.get('.button').click()
    })

    //copia de selectores con la herramienta Cypress Studio.

    it.only('Login con Cypress Studio', ()=>{
        /* ==== Generated with Cypress Studio ==== */
        cy.get('#username').clear().type('tomsmith');
        cy.get('#password').clear().type('SuperSecretPassword!');
        cy.get('.fa').click();
        cy.get('#flash').should('be.visible');
        cy.wait(2000)
        cy.get('.icon-2x').click();
        /* ==== End Cypress Studio ==== */
    })

})

