const helperSelectors = {
    "acceptCookiesButton": "#cookie_action_close_header"
}

Cypress.Commands.add('setViewport', (viewport) => {
    cy.viewport(viewport);
})

Cypress.Commands.add('visitPage', (url = '/') => {
    cy.visit(url);
})

Cypress.Commands.add('acceptCookies', () => {
    cy.get(helperSelectors.acceptCookiesButton).click();
})