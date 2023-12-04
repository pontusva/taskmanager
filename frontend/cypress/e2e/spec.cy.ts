describe('Nav Menus', () => {
  context('720p resolution', () => {
    beforeEach(() => {
      cy.viewport(390, 844);
    });

    it('Visit localhost', () => {
      cy.visit('http://localhost:5173');
    });
  });
});
