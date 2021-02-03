describe("My First Test", () => {
  it("Gets, types and asserts", () => {
    cy.visit("http://localhost:3000/");

    //cy.contains("016").click();
    //cy.contains("FaleMais 120").click();
    //cy.contains("Tempo").type(10);

    // // Should be on a new URL which includes '/commands/actions'
    // cy.url().should("include", "/commands/actions");

    // // Get an input, type into it and verify that the value has been updated
    //cy.get("#tempo").type(12);
    //   .should("have.value", "fake@email.com");
  });
});
