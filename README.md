# cypress

Projet de démonstration Cypress (JS).

## Lancer localement
```bash
npm ci
npx cypress open      # UI
npm run test          # headless Chrome
```

## Structure
- `cypress/e2e/google.cy.js` : test de base
- `cypress.config.js` : configuration et reporter JUnit

## CI GitHub Actions
Workflow prêt dans `.github/workflows/cypress.yml`.
