import TaskList from '../../src/components/TaskComponents/TaskList';
import TaskManagement from '../../src/pages/TaskManagement';
import '../../dist/index.css';

describe('intercept with mock data to get tasks', () => {
  context('720p resolution', () => {
    beforeEach(() => {
      cy.viewport(390, 844);
    });

    it('Renders task list', () => {
      cy.intercept(
        {
          method: 'GET',
          url: 'http://localhost:8000/tasks/get-tasks',
        },
        {
          fixture: 'tasks.json',
        }
      ).as('task-list');

      cy.mount(<TaskList />);
      cy.wait('@task-list');
    });
  });
});

describe('Request task from backend with GET', () => {
  context('720p resolution', () => {
    beforeEach(() => {
      cy.viewport(390, 844);
      cy.mount(<TaskManagement />);
    });
    it('Request task from backend with GET method', () => {
      cy.request('GET', 'http://localhost:8000/tasks/get-tasks').then(
        response => {
          expect(response.status).to.eq(200);
        }
      );
    });

    it('Determine if task items toggle staten when pressed', () => {
      cy.request('GET', 'http://localhost:8000/tasks/get-tasks')
        .then(response => {
          expect(response.status).to.eq(200);
        })

        .get('#taskname14')
        .click()
        .get('#taskname23')
        .click()
        .get('#taskname14')
        .click()
        .get('#taskname23')
        .click();
    });
    it('Toggle between task list and task creation tab', () => {
      cy.get('#create-task').click().get('#get-tasks').click();
    });
  });
});

describe('POST request for creating a new tasks', () => {
  context('720p resolution', () => {
    beforeEach(() => {
      cy.viewport(390, 844);
      cy.mount(<TaskManagement />);
    });
    it('Request task from backend with GET method', () => {
      cy.get('#create-task').click();
      cy.get('#task-name').type('Test task');
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
      cy.get('#get-tasks').click();
      // cy.request('POST', 'http://localhost:8000/tasks/get-tasks', {})
    });
  });
});
