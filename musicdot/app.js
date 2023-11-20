document.addEventListener('DOMContentLoaded', function() {
    const form = document.forms['form-contato'];

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Validando nome
        const nomeInput = form.elements['nomeCliente'];
        if (nomeInput.value.trim().length < 10) {
            alert('O nome deve ter pelo menos 10 caracteres');
            return;
        }

        // Validando telefone
        const telefoneInput = form.elements['foneCliente'];
        if (telefoneInput.value.trim().length !== 10) {
            alert('O número de telefone deve ter exatamente 10 caracteres');
            return;
        }

        // Validando e-mail
        const emailInput = form.elements['emailCliente'];
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value.trim())) {
            alert('Por favor, insira um e-mail válido');
            return;
        }

        // Validando opiniao
        const opinionInput = form.elements['mensagemCliente'];
        const opinionLength = opinionInput.value.trim().length;
        if (opinionLength < 10 || opinionLength > 50) {
            alert('A opinião deve ter entre 10 e 50 caracteres');
            return;
        }

        // Se todas as validações passarem, envia o formulário
        alert('Formulário enviado com sucesso!');
        form.submit();
    });
});
