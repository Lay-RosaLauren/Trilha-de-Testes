/// <reference types="cypress" />

import Login from "../support/Login";

describe("Login", () => {
    it("Realizar o Login COM sucesso.", () => {
       // Acessar a página
       // Ter usuário e senha válido
        Login.acessarLogin();
       // Preencher usuário
       // Preencher senha
       Login.preencherLogin("lay@qa.com", "teste");
       // validar o texto Serverest Store 
       cy.get('h1').should('have.text', "Serverest Store");
       //Adicionar o produto na Lista
       cy.get ("#root > div > div > div.container-fluid > div > section > div:nth-child(1) > div > div > a:nth-child(3) > button").click();
       //Validar o produto na Lista
       cy.contains('Produto:The Other Side of Silence').should('be.visible');   
    });
});