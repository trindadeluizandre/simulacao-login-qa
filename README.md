Projeto de Documentação e Testes: Módulo de Autenticação

Este repositório contém a implementação e o plano de testes para um módulo de login, desenvolvido como parte do treinamento em Quality Assurance (QA). O foco inicial é a validação de fluxos de entrada e a integridade da interface sob diferentes condições de dados.

Especificações do Ambiente de Desenvolvimento
- Equipamento: Dell Inspiron 
- Processador: 
- Memória RAM: 
- Armazenamento: HDD 1TB
- Sistema Operacional: 
- Navegador de Testes: Brave Browser / Electron v138
- IDE: VS Code
- Tecnologias: HTML5, CSS3, TypeScript, JavaScript, Cypress

Relatório de Execução de Testes (Fase 1)

O ciclo de testes inicial concentrou-se na verificação de comportamento dos campos de entrada e no feedback visual do sistema após a submissão.

1. Teste de Fluxo Principal
   - Procedimento: Inserção de credenciais válidas (admin@teste.com / 123456).
   - Resultado: O sistema processou a autenticação corretamente.
   - Status: Aprovado.

2. Teste de Fluxo Alternativo (Credenciais Inválidas)
   - Procedimento: Inserção de dados não cadastrados.
   - Resultado: O sistema apresentou a sinalização de erro em conformidade com o CSS.
   - Status: Aprovado.

3. Teste de Borda (Campos Ausentes)
   - Recomendação técnica: Implementação de verificações de obrigatoriedade (Required Fields) no script.ts.

---

Automação de Testes (Fase 2)


Implementação de suite de testes funcionais automatizados utilizando Cypress. Os casos de teste (CT-01 a CT-04) validam a renderização do DOM, a lógica de obrigatoriedade de campos e a limpeza dinâmica de mensagens de erro após a interação do usuário no front-end.

Implementation of an automated functional test suite using Cypress. Test cases (CT-01 to CT-04) validate DOM rendering, field requirement logic, and dynamic error message clearance following user interaction on the front-end.

Implementación de una suite de pruebas funcionales automatizadas utilizando Cypress. Los casos de prueba (CT-01 a CT-04) validan la renderización del DOM, la lógica de campos obligatorios y la limpieza dinámica de mensajes de error tras la interacción del usuario en el front-end.

Evidência de Execução / Execution Evidence / Evidencia de Ejecución
![Resultado Cypress](./evidencia-teste-login.png)

---
Documento oficial de registro de atividades Quality Assurance - Andre Luiz Trindade 27/03/2026