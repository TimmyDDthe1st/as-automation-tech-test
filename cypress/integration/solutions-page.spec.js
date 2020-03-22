const solutionsPageData = require('../fixtures/solutions-page-data');

const solutionspageSelectors = {
    solutionsHeaderDetail: ".et_pb_text_1 > .et_pb_text_inner > h3",
    subsectionNavBar:{
        navBar: "#menu-solutions",
        earlyCareers: "#menu-solutions > #menu-item-3045 > a",
        volumeRecruitment: "#menu-solutions > #menu-item-3044 > a",
        experiencedHires: "#menu-solutions > #menu-item-3043 > a",
        employeeDevelopment: "#menu-solutions > #menu-item-3042 > a",
        customisationBranding: "#menu-solutions > #menu-item-3040 > a"
    }
};

before(() => {
    cy.visitPage('/solutions');
})

describe('Solutionspage', () => {
    it('should have "Early Careers" selected by default', () => {
        
    })
    it('should contain the subsection nav bar', () => {
        cy.get(solutionspageSelectors.subsectionNavBar.navBar).should('be.visible');
    })

    it('should contain "Early Careers"', () => {
        const expected = "Early Careers";
        cy.contains(solutionspageSelectors.subsectionNavBar.earlyCareers, expected);
    })

    it('should contain "Volume Recruitment"', () => {
        const expected = "Volume Recruitment";
        cy.contains(solutionspageSelectors.subsectionNavBar.volumeRecruitment, expected);
    })
    it('should contain "Experienced Hires"', () => {
        const expected = "Experienced Hires";
        cy.contains(solutionspageSelectors.subsectionNavBar.experiencedHires, expected);
    })
    it('should contain "Employee Development"', () => {
        const expected = "Employee Development";
        cy.contains(solutionspageSelectors.subsectionNavBar.employeeDevelopment, expected);
    })
    it('should contain "Customisation / Branding"', () => {
        const expected = "Customisation / Branding";
        cy.contains(solutionspageSelectors.subsectionNavBar.customisationBranding, expected);
    })
});