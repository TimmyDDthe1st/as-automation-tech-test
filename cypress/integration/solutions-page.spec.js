const solutionsPageData = require('../fixtures/solutions-page-data');

const solutionspageSelectors = {
    solutionsHeaderDetail: ".et_pb_text_1 > .et_pb_text_inner > h3",
    headerText: ".et_pb_row_1 > .et_pb_column > .et_pb_module > .et_pb_text_inner > h2",
    subsectionNavBar:{
        navBar: "#menu-solutions",
        earlyCareers: {
            link: "#menu-solutions > #menu-item-3045 > a",
            firstParagraph: ".et_pb_column_2 > .et_pb_module > .et_pb_text_inner > :nth-child(2)"
        },
        volumeRecruitment: {
            link: "#menu-solutions > #menu-item-3044 > a",
            firstParagraph: ".et_pb_column_2 > .et_pb_module > .et_pb_text_inner > p",
            seeOurOptionsHereLink: ".et_pb_text_inner > :nth-child(3) > a"
        },
        experiencedHires: {
            link: "#menu-solutions > #menu-item-3043 > a",
            firstParagraph: ".et_pb_column_2 > .et_pb_module > .et_pb_text_inner > p"
        },
        employeeDevelopment: {
            link: "#menu-solutions > #menu-item-3042 > a",
            firstParagraph: ".et_pb_column_2 > .et_pb_module > .et_pb_text_inner > :nth-child(1)"
        },
        customisationBranding: {
            link: "#menu-solutions > #menu-item-3040 > a",
            firstParagraph: ".et_pb_column_2 > .et_pb_module > .et_pb_text_inner"
        } 
    }
};

before(() => {
    cy.visitPage('/solutions');
})

describe('Solutionspage', () => {
    it('should have "Early Careers" selected by default', () => {
        cy.get(solutionspageSelectors.headerText).contains('Early Careers');
    })

    it('should contain the subsection nav bar', () => {
        cy.get(solutionspageSelectors.subsectionNavBar.navBar).should('be.visible');
    })

    it('should contain "Early Careers" and link through to the correct page', () => {
        const expected = solutionsPageData.earlyCareers;
        const firstParagraph = solutionsPageData.earlyCareersFirstParagraph;

        cy.contains(solutionspageSelectors.subsectionNavBar.earlyCareers.link, expected).click();
        cy.contains(solutionspageSelectors.headerText, expected);
        cy.contains(solutionspageSelectors.firstParagraph, firstParagraph);
    })

    it('should contain "Volume Recruitment" and link through to the correct page', () => {
        const expected = solutionsPageData.volumeRecruitment;
        const firstParagraph = solutionsPageData.volumeRecruitementFirstParagraph;

        cy.contains(solutionspageSelectors.subsectionNavBar.volumeRecruitment.link, expected).click();
        cy.contains(solutionspageSelectors.headerText, expected);
        cy.contains(solutionspageSelectors.subsectionNavBar.volumeRecruitment.firstParagraph, firstParagraph);
    })

    it('should take the user to the "Customisation / Branding" section when clicking "See our options here"', () => {
        const expected = solutionsPageData.volumeRecruitment;
        const expectedHeader = solutionsPageData.customisationBrandingHeader;

        cy.contains(solutionspageSelectors.subsectionNavBar.volumeRecruitment.link, expected).click();
        cy.contains(solutionspageSelectors.headerText, expected);
        cy.get(solutionspageSelectors.subsectionNavBar.volumeRecruitment.seeOurOptionsHereLink).click();
        cy.contains(solutionspageSelectors.headerText, expectedHeader);
    })
    it('should contain "Experienced Hires" and link through to the correct page', () => {
        const expected = solutionsPageData.experiencedHires;
        const firstParagraph = solutionsPageData.experiencedHiresFirstParagraph;

        cy.contains(solutionspageSelectors.subsectionNavBar.experiencedHires.link, expected).click();
        cy.contains(solutionspageSelectors.headerText, expected);
        cy.contains(solutionspageSelectors.subsectionNavBar.experiencedHires.firstParagraph, firstParagraph);
    })
    it('should contain "Employee Development" and link through to the correct page', () => {
        const expected = solutionsPageData.employeeDevelopment;
        const firstParagraph = solutionsPageData.employeeDevelopmentFirstParagraph;
        
        cy.contains(solutionspageSelectors.subsectionNavBar.employeeDevelopment.link, expected).click();
        cy.contains(solutionspageSelectors.headerText, expected);
        cy.contains(solutionspageSelectors.subsectionNavBar.employeeDevelopment.firstParagraph, firstParagraph);
    })
    it('should contain "Customisation / Branding" and link through to the correct page', () => {
        const expected = solutionsPageData.customisationBrandingLink;
        const expectedHeader = solutionsPageData.customisationBrandingHeader
        const firstParagraph = solutionsPageData.customisationBrandingFirstParagraph;

        cy.contains(solutionspageSelectors.subsectionNavBar.customisationBranding.link, expected).click();
        cy.contains(solutionspageSelectors.headerText, expectedHeader);
        cy.contains(solutionspageSelectors.subsectionNavBar.customisationBranding.firstParagraph, firstParagraph);
    })
});