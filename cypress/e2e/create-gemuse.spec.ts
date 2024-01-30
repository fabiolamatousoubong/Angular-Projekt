it('Bearbeiten eines vorhandenen Elements', () => {
    // Besuchen Sie die Seite des zu bearbeitenden Elements
    cy.visit('/element/1'); // Angenommen, das zu bearbeitende Element hat die ID 1
  
    // Relevante Felder bearbeiten
    cy.get('input[name="name"]').clear().type('Geändertes Element');
    cy.get('input[name="beschreibung"]').clear().type('Dies ist eine geänderte Beschreibung.');
  
    // Auf die Speichern-Schaltfläche klicken
    cy.get('button[type="submit"]').click();
  
    // Überprüfen, ob die Änderungen korrekt reflektiert werden
    cy.get('.element-list').should('contain', 'Geändertes Element');
  });
  