// ACESSAR SITE YOUTUBE
Cypress.Commands.add('Acesso_YouTube', () => {
  cy.visit('https://www.youtube.com');
  
  // Verificar se a página contém o título esperado
  cy.title({ timeout: 10000 }).should('include', 'YouTube'); // Timeout de 10 segundos
});

// Mapeação dos botões da parte esquerda da página do YouTube
Cypress.Commands.add('Mapeacoes_Buttons', () => {
  describe('Acessar o YouTube', () => {
    it('Deve abrir o site do YouTube e interagir com vários botões', () => {
      cy.visit('https://www.youtube.com');
      cy.title().should('include', 'YouTube');
      
    // Clicar no botão Shorts
    cy.title({ timeout: 10000 }).should('include', 'YouTube'); // Timeout de 10 segundos 
    cy.get('a[title="Shorts"]').should('be.visible').click();
    cy.url().should('include', 'https://www.youtube.com/shorts/EiFLjTtVujc');
    });
  });
});

Cypress.Commands.add('Pesquisa_Youtube', () => {
  cy.visit('https://www.youtube.com');
    cy.get('#search-input > #search' , { timeout: 5000 }).type(`Ronaldo`); 
    cy.get('#search-icon-legacy', { timeout: 5000 }).click();
});