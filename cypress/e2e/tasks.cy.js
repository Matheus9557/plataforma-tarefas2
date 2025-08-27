describe('Plataforma de Tarefas', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173');
  });

  it('Adiciona uma nova tarefa', () => {
    cy.get('input[placeholder="Título da tarefa"]').type('Nova Tarefa');
    cy.get('input[placeholder="Descrição"]').type('Descrição teste');
    cy.contains('Adicionar').click();
    cy.contains('Nova Tarefa').should('exist');
  });

  it('Filtra tarefas pendentes', () => {
    cy.contains('Pendentes').click();
    cy.get('li').each(($el) => {
      cy.wrap($el).find('input[type="checkbox"]').should('not.be.checked');
    });
  });
});
