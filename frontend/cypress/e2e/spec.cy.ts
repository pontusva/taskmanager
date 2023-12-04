describe('Successful & Unsuccessul login', () => {
  context('720p resolution', () => {
    beforeEach(() => {
      cy.viewport(390, 844);
      cy.visit('http://localhost:5173');
    });

    it('Sucessful login', () => {
      cy.get('#username').type('pa');
      cy.get('#password').type('12345678');
      cy.get('#login').click();
      cy.url().should('eq', 'http://localhost:5173/dashboard');
    });

    it('Unsuccessful login', () => {
      cy.get('#username').type('admin');
      cy.get('#password').type('admin');
      cy.get('#login').click();
      cy.url().should('eq', 'http://localhost:5173/dashboard');
    });
  });
});

describe('Get & Post tasks', () => {
  context('720p resolution', () => {
    beforeEach(() => {
      cy.viewport(390, 844);
      cy.visit('http://localhost:5173/tasks');
    });

    it('fetch tasks', () => {
      cy.intercept({
        method: 'GET',
        url: '/tasks/get-tasks',
        hostname: 'localhost',
        port: 8000,
      });
    });
  });
});
