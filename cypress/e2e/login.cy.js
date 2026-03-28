describe('Suite de Testes de Login - Modulo Login', () => {
  
  beforeEach(() => {
    // Usamos o caminho relativo para o Cypress encontrar o arquivo na raiz do projeto
    cy.visit('./index.html');
  });

  it('CT-01: Deve abrir a página e exibir o título correto', () => {
    // Verifica o título que está na aba do navegador
    cy.title().should('eq', 'QA Study - Login Simulation');
    // Verifica se o cabeçalho principal está visível
    cy.get('h2').should('be.visible').and('contain', 'Área de Acesso');
  });

  it('CT-02: Validar erro ao tentar entrar com campos vazios', () => {
    // Clica no botão de login usando o ID que você definiu no HTML
    cy.get('#btnLogin').click();
    
    // Verifica se a mensagem de erro de campos obrigatórios aparece
    // Nota: O texto abaixo deve ser exatamente o que o seu script.js escreve no #feedbackMessage
    cy.get('#feedbackMessage').should('be.visible');
  });

  it('CT-03: Validar preenchimento dos campos de entrada', () => {
    // Testa a digitação nos campos de e-mail e senha
    cy.get('#email').type('andre@exemplo.com').should('have.value', 'andre@exemplo.com');
    cy.get('#password').type('123456').should('have.value', '123456');
    
    // Clica para entrar
    cy.get('#btnLogin').click();
  });

  it('CT-04: Verificar se as mensagens de erro individuais sumiram após preencher', () => {
    // Garante que as mensagens de erro específicas (span) não estão bloqueando a tela
    cy.get('#emailError').should('not.be.visible');
    cy.get('#passError').should('not.be.visible');
  });
});