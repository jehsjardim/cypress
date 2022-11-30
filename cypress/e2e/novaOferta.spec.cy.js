/// <reference types="cypress" />

describe('Login', () => {
    before(() => {

        cy.visit('https://www.preprod.backoffice.merx.tech/')
    })

    beforeEach(() => {
        cy.reload()
        cy.get('[name="username"]')
            .type('83579337009');
        cy.get('.sc-pjIrY > button')
            .click();
        cy.get('.MuiInputBase-adornedEnd > input')
            .type('qa@Mudar1');
        cy.get('.MuiInputAdornment-root')
            .click({force: true})
        cy.get('.MuiButton-disableElevation')
            .click();
        cy.contains('.fTyjzF', 'Commone User')
            .should('be.visible')
    })

    it('Formulário Nova Oferta', () => {
        cy.wait(2000);
        cy.get('.MuiButton-label')
            .click({force: true});
        cy.get("[id='mui-component-select-product_id']")
            .click();
        cy.get('[data-value="73f6551a-c399-405e-a2c0-8797132b8100"]')
            .click();
        cy.get("[id='mui-component-select-modality_id']")
            .click();
        cy.get('[data-value="59df2602-b0f8-4044-b4ac-2951f0549bd9"]')
            .click();
        cy.get("#root > div > main > div > div > div > form > div > div:nth-child(3) > div:nth-child(1) > div > div > div > input")
            .type('10000');
        cy.get("[id='mui-component-select-unit_of_measurement_id']")
            .click();
        cy.get('[data-value="667e60a8-8495-4412-bb26-427946cee289"]')
            .click();
        cy.get("#root > div > main > div > div > div > form > div > div:nth-child(4) > div:nth-child(1) > div > div > div")
            .type('10');
        cy.get("#root > div > main > div > div > div > form > div > div:nth-child(4) > div:nth-child(2) > div > div > div")
            .type('10');
        cy.get("[id='mui-component-select-harvest_id']")
            .click();
        cy.get('[data-value="fc04585c-f23c-451c-8a22-c7b36aab886f"]')
            .click();
        cy.get('[name="payday"]')
            .click();
        cy.get('body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div.MuiDialogActions-root.MuiDialogActions-spacing > button:nth-child(2)')
            .click({force: true});
        cy.get('[id="mui-component-select-payment_type"]')
            .click();
        cy.get('[id="2"]')
            .click();
        cy.get('[id="mui-component-select-delivery_place"]')
            .click();
        cy.get('[data-value="f3022d64-7c46-49ad-8628-ea453767ebcd"]')
            .click();
        cy.get('[name="expiration_date"]')
            .click();
        cy.get('.MuiPickersCalendar-transitionContainer > div > div:nth-child(5) > div:nth-child(4) > button')
            .click({force: true});
        cy.get('body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div.MuiDialogActions-root.MuiDialogActions-spacing > button:nth-child(2) > span.MuiButton-label')
            .click();
        cy.get('[name="expiration_time"]')
            .click();
        cy.get('body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div.MuiDialogActions-root.MuiDialogActions-spacing > button:nth-child(2) > span.MuiButton-label')
            .click({force: true});
        cy.get('.MuiGrid-justify-xs-flex-end > button')
            .click();
        cy.contains('[id="notistack-snackbar"]', 'Oferta criada com sucesso!')
            .should('be.visible')
    })
})