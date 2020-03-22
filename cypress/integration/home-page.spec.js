const solutionsPageData = require('../fixtures/solutions-page-data');

const homepageSelectors = {
    solutionsNavLink: "#top-menu > #menu-item-83 > a",
    solutionsHeaderDetail: ".et_pb_text_1 > .et_pb_text_inner > h3"
};

before(() => {
    cy.visitPage();
    cy.acceptCookies();
})

describe('Homepage', () => {
    it('should have Solutions visible in the navigation menu', () => {
        cy.get(homepageSelectors.solutionsNavLink).should('be.visible');
    })

    it('should load Solutions page and contain expected header text', () => {
        const expected = solutionsPageData.headerDetail;
        
        cy.get(homepageSelectors.solutionsNavLink).click();
        cy.contains(homepageSelectors.solutionsHeaderDetail, expected);
    })
});