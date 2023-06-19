describe('hello world', () =>{
  beforeEach('go to web site frontendmasters.com', () =>{
    cy.visit('http://127.0.0.1:5500/');
  } )

  it('should have two incompleted items in todo ', () =>{
    cy.get('#item').type('my first test');
    cy.get('#add').click();
    cy.get('#item').type('my second test');
    cy.get('#add').click();
    cy.get('#todo').find('li').should('have.length', 2)
  })

  it('should move to completed list when the check-mark button is clicked ', () =>{
    cy.get('#item').type('my first test');
    cy.get('#add').click();
    cy.get('#item').type('my second test');
    cy.get('#add').click();
    cy.get('#todo').find('li').first().find('.complete').click();
    cy.get('#completed').find('li').should('have.length', 1);
    //completed

  })



});
