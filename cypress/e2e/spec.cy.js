describe('SecureBank ATM Simulator', () => {
  const BASE_URL = 'https://qaarena.online/arena/simulator/atm'
  const CORRECT_PIN = '1234'
  const WRONG_PIN = '0000'

  beforeEach(() => {
    cy.visit(BASE_URL)
  })

  it('should login with correct PIN', () => {
    cy.get('input').type(CORRECT_PIN)
    cy.contains('Enter').click()
    cy.contains('Select Transaction').should('be.visible')
  })

  it('should fail login with wrong PIN', () => {
    cy.get('input').type(WRONG_PIN)
    cy.contains('Enter').click()
    cy.contains('Select Transaction').should('not.exist')
  })

  it('should check balance', () => {
    cy.get('input').type(CORRECT_PIN)
    cy.contains('Enter').click()
    cy.contains('Check Balance').click()
    cy.contains('Available Balance').should('be.visible')
  })

  it('should withdraw cash', () => {
  cy.get('input').type(CORRECT_PIN)
  cy.contains('Enter').click()
  cy.contains('Withdraw Cash').click()
  cy.contains('$100').should('be.visible')
})

it('should deposit cash', () => {
  cy.get('input').type(CORRECT_PIN)
  cy.contains('Enter').click()
  cy.contains('Deposit Cash').click()
  cy.get('input').should('be.visible')
})

  it('should view mini statement', () => {
    cy.get('input').type(CORRECT_PIN)
    cy.contains('Enter').click()
    cy.contains('Mini Statement').click()
    cy.get('body').should('contain.text', 'Statement')
  })

  it('should change PIN', () => {
    cy.get('input').type(CORRECT_PIN)
    cy.contains('Enter').click()
    cy.contains('Change PIN').click()
    cy.get('body').should('contain.text', 'PIN')
  })

  it('should exit the ATM', () => {
    cy.get('input').type(CORRECT_PIN)
    cy.contains('Enter').click()
    cy.contains('Exit').click()
    cy.contains('Welcome').should('be.visible')
  })
})