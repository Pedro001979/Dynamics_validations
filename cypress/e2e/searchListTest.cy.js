/// <reference types="cypress" />
const { categories } = require('../fixtures/categories.json')
const { email, senha } = require('../fixtures/data.json')
const { homePage } = require("../support/pages/home.page.js");

describe('Environment Variables', () => {

  beforeEach(() => {
    cy.login(email, senha)

  })

    it(`Deve Pesquisar os produtos e ter um valor listado`, () => {
      homePage.openSearchProduct()
      homePage.seachProduct('in')
      homePage.products().should('have.length.greaterThan', 0) 
      homePage.products().each(product => {
        let price = product.find('[data-testid="price"]').text()
        expect(price).to.contain('R$')
      })
    })

  })