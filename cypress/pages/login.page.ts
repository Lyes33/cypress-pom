import { BasePage } from './base.page';

export class LoginPage extends BasePage {

  /**
   * Gets email
   */
  get email() {
    return cy.get('[data-cy="email-login-light"]');
  }

  /**
   * Gets password
   */
  get password() {
    return cy.get('[data-cy="pwd-login-ligth"]');
  }

  /**
   * Gets submit button
   */
  get submitButton() {
    return cy.get('[data-cy="submit-login-light"]');
  }

  /**
   * Fills login and submit
   * @param email 
   * @param password 
   */
  login(email: string, password: string) {
    this.email.type(email);
    this.password.type(password);
    this.submitButton.click();
  }

  /**
   * Gets connected class
   */
  get classIsConnected(){
    return cy.get('#dropdown-account').should('have.class', 'is-connected')
  }

  /**
   * True if user is connected
   */
  isUserConnected(){
   this.classIsConnected
  }
}
