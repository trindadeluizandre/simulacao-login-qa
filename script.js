// Capturando os elementos para o teste (Versão JS Puro)
const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const feedback = document.getElementById('feedbackMessage');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault(); // IMPORTANTE: Impede o refresh da página

    const emailValue = emailInput.value;
    const passwordValue = passwordInput.value;

    // Teste de Fluxo Principal
    if (emailValue === "admin@teste.com" && passwordValue === "123456") {
        feedback.innerText = "Login realizado com sucesso!";
        feedback.style.color = "green";
    } else {
        // Teste de Fluxo Alternativo
        feedback.innerText = "Usuário ou senha incorretos.";
        feedback.style.color = "red";
    }
});