{
    const loginForm = document.getElementById('loginForm') as HTMLFormElement;
    const emailInput = document.getElementById('email') as HTMLInputElement;
    const passwordInput = document.getElementById('password') as HTMLInputElement;
    const feedback = document.getElementById('feedbackMessage') as HTMLElement;

    loginForm?.addEventListener('submit', (event) => {
        event.preventDefault();

        const emailValue = emailInput.value.trim();
        const passwordValue = passwordInput.value.trim();

        // Validação de campos vazios
        if (emailValue === "" || passwordValue === "") {
            feedback.innerText = "Erro: Todos os campos são obrigatórios.";
            feedback.style.color = "red";
        } 
        // Validação de credenciais
        else if (emailValue === "admin@teste.com" && passwordValue === "123456") {
            feedback.innerText = "Login realizado com sucesso!";
            feedback.style.color = "green";
        } 
        else {
            feedback.innerText = "Usuário ou senha incorretos.";
            feedback.style.color = "red";
        }
    });
}