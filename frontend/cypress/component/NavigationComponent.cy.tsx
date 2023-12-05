import Navigation from '../../src/Navigation';
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
