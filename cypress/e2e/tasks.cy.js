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

  it('Marca tarefa como concluída', () => {
    cy.contains('Nova Tarefa')
      .parent()
      .find('input[type="checkbox"]')
      .check()
      .should('be.checked');
  });

  it('Edita uma tarefa', () => {
    cy.contains('Nova Tarefa')
      .parent()
      .contains('Editar')
      .click();
    cy.get('input[placeholder="Título da tarefa"]').clear().type('Tarefa Editada');
    cy.contains('Atualizar').click();
    cy.contains('Tarefa Editada').should('exist');
  });

  it('Deleta uma tarefa', () => {
    cy.contains('Tarefa Editada')
      .parent()
      .contains('Deletar')
      .click();
    cy.contains('Tarefa Editada').should('not.exist');
  });
});
