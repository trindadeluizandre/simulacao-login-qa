{
    const loginForm = document.getElementById('loginForm') as HTMLFormElement;
    const emailInput = document.getElementById('email') as HTMLInputElement;
    const passwordInput = document.getElementById('password') as HTMLInputElement;
    const feedback = document.getElementById('feedbackMessage') as HTMLElement;

    loginForm?.addEventListener('submit', (event) => {
        event.preventDefault();

        const emailValue = emailInput.value;
        const passwordValue = passwordInput.value;

        if (emailValue === "admin@teste.com" && passwordValue === "123456") {
            feedback.innerText = "Login realizado com sucesso!";
            feedback.style.color = "green";
        } else {
            feedback.innerText = "Usuário ou senha incorretos.";
            feedback.style.color = "red";
        }
    });
}