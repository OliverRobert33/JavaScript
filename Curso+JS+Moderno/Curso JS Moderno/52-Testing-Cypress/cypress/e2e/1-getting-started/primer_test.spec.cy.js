/// <reference types="cypress" />

describe('Carga la página principal', () => {
    it('Carga la página principal', () => {

        cy.visit('/index.html'); //Buena Practica
        // cy.visit('http://127.0.0.1:5500/Curso%20JS%20Moderno/52-Testing-Cypress/index.html'); MalaPractica


        // Verificar el elemento y su texto
        cy.contains('[data-cy="titulo-proyecto"]', 'Administrador de Pacientes de Veterinaria');
        // cy.contains('h1', 'Administrador de Pacientes de Veterinaria'); MalaPractica


        // // Verificar que exista
        cy.get('[data-cy="titulo-proyecto"]').should('exist');
        // cy.get('h1').should('exist'); MalaPractica


        // // Verificar que exista el elemento y contenta un texto
        cy.get('[data-cy="titulo-proyecto"]')
            .invoke('text')
            .should('equal', 'Administrador de Pacientes de Veterinaria');

        // // Verificar el texto de las citas
        cy.get('[data-cy=citas-heading]')
            .invoke('text')
            .should('equal', 'No hay Citas, comienza creando una');

        cy.get('[data-cy=citas-heading]')
            .invoke('text')
            .should('not.equal', 'OLiver Saraguro');

            
    });
});