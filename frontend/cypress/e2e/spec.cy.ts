// e2e test for login
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

// complete e2e test for tasks
describe('Check if task HTTP requests are working. (complete e2e test for tasks)', () => {
  context('720p resolution', () => {
    beforeEach(() => {
      cy.viewport(390, 844);
      cy.visit('http://localhost:5173/tasks');
    });

    it('fetch tasks', () => {
      cy.request('GET', 'http://localhost:8000/tasks/get-tasks', {
        method: 'GET',
      });
    });

    it('create task', () => {
      cy.get('#create-task').click();
      cy.get('#task-name').type('cypress, post');

      // Hittade detta på stackoverflow då jag använder
      // react-select för min dropdown
      cy.get('.react-select__control')
        .click()
        .get('.react-select__menu')
        .find('.react-select__option')
        .last()
        .click();

      cy.get('.react-select-category__control')
        .click()
        .get('.react-select-category__menu')
        .find('.react-select-category__option')
        .last()
        .click();

      cy.get('#task-description').type('cypress, post');
      cy.get('#submit-task').click(); // Uncomment this line to create a task
    });
  });
});

// integration test
describe('integration test', () => {
  context('720p resolution', () => {
    beforeEach(() => {
      cy.viewport(390, 844);
      cy.visit('http://localhost:5173/tasks');
    });
    it('Request Tasks', () => {
      cy.request('get', 'http://localhost:8000/tasks/get-tasks');
    });

    it('Post Tasks', () => {
      cy.request('post', 'http://localhost:8000/tasks/create-task', {
        taskName: 'integration test post',
        taskDescription: 'integration test post',
        taskPriority: '1',
        taskCategory: '1',
        createdBy: '1',
      });
    });
  });
});
