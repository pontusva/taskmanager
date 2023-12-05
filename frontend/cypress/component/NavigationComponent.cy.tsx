import Navigation from '../../src/Navigation';
import Login from '../../src/pages/LoginPage';
import { BrowserRouter as Router } from 'react-router-dom';

describe('NavigationComponent.cy.tsx', () => {
  it('playground', () => {
    cy.mount(
      <Router>
        <Navigation />
      </Router>
    )
      .get('#nav-sign-in')
      .contains('Sign In');
  });
});
