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
      cy.request('GET', 'localhost:8000/tasks/get-tasks', {
        method: 'GET',
      });
    });
    it('create task', () => {
      cy.request('POST', 'localhost:8000/tasks/create-task', {
        method: 'POST',
        body: {
          taskName: "cypress, it's working",
          taskPriority: 'taskPriority.value',
          taskCategory: 'category.value',
          taskDescription: 'description.value',
          createdBy: '60f0b0b3e6b3c2a8c8f1b3b5',
        },
      });
    });
  });
});
