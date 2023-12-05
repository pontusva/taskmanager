import Navigation from '../../src/Navigation';
import Register from '../../src/pages/Register';
import { BrowserRouter as Router } from 'react-router-dom';
import '../../dist/index.css'; //https://stackoverflow.com/questions/70306004/running-cypress-tests-with-tailwindcss-3

describe('NavigationComponent.cy.tsx', () => {
  it('Check if Sign In text is showing when entering first page', () => {
    cy.mount(
      <Router>
        <Navigation />
      </Router>
    )
      .get('#nav-sign-in')
      .contains('Sign In');
  });
});

describe('NavigationComponent.cy.tsx', () => {
  it('Register a new user from Register page', () => {
    cy.mount(
      <Router>
        <Register />
      </Router>
    );

    cy.get('#register-button').click();
    cy.get('.required-field').contains('This field is required');
  });
});

describe('NavigationComponent.cy.tsx', () => {
  it('Unsuccessful login', () => {
    cy.mount(
      <Router>
        <Register />
      </Router>
    )
      .get('#first-name')
      .click()
      .type('Test')
      .get('#last-name')
      .click()
      .type('Testsson')
      .get('#username')
      .click()
      .type('TestTestsson')
      .get('#email')
      .click()
      .type('test@test')
      .get('#password')
      .click()
      .type('test1234')
      .get('#confirm-password')
      .click()
      .type('test12345')
      .get('#register-button')
      .click()
      .get('#unsuccesful-register')
      .contains('Password not matching');
  });
});
