describe('Actions', () => {
   it('Should focus new candidate if pushing while focusing', () => {
      cy.mountKeyboard()
         .pushCandidate()
         .pushCandidate()
         .pushCandidate()

         .realPress('Tab')
         .realPress('Tab')
         .realPress('Tab') // Go to last container

         .pushCandidateSilently()

         .focused()
         .should('have.data', 'notivueContainer', 3)
   })

   it('Should focus next container if clicking an action', () => {
      cy.mountKeyboard()
         .pushCandidate()
         .pushCandidate()
         .pushCandidate()

         .realPress('Tab')
         .realPress('Tab')
         .realPress('Tab')

         .realPress('Tab')
         .realPress('Tab') // Go to button of 2nd container

         .realPress(Math.random() > 0.5 ? 'Space' : 'Enter')

         .focused()
         .should('have.data', 'notivueContainer', 0)
   })

   it('Should leave stream if pressing Space or Enter on action in last container', () => {
      cy.mountKeyboard()

         .pushCandidate()
         .pushCandidate()
         .as('relatedTarget')

         .realPress('Tab')
         .realPress('Tab')
         .realPress('Tab')

         .realPress('Tab')
         .realPress('Tab') // Go to button of last container

         .realPress(Math.random() > 0.5 ? 'Space' : 'Enter')

      cy.get('@relatedTarget').should('be.focused').checkLeaveAnnouncement()
   })

   it('Should leave stream if clicking with mouse an action in any container', () => {
      cy.mountKeyboard()

         .pushCandidate()
         .pushCandidate()
         .pushCandidate()
         .as('relatedTarget')

         .realPress('Tab')
         .realPress('Tab')
         .realPress('Tab')

         .realPress('Tab')
         .realPress('Tab') // Go to button of 2nd container

         .focused()
         .realClick()

      cy.get('@relatedTarget').should('be.focused').checkLeaveAnnouncement()
   })
})
