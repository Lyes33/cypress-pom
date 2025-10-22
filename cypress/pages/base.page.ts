export class BasePage {
    /**
     * Visits url
     * @param url 
     */
  visit(url: string) {
    cy.visit(url);
  }
}