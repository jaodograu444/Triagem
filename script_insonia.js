// Dicas para cada nível de insônia
const tips = {
    leve: `
        <p>A insônia leve pode ser resolvida com mudanças na sua rotina. Tente estas dicas:</p>
        <ul>
            <li><strong>Crie uma rotina:</strong> Tente ir para a cama e acordar nos mesmos horários, mesmo nos fins de semana.</li>
            <li><strong>Relaxe antes de dormir:</strong> Evite telas (celular, tablet) uma hora antes de deitar. Em vez disso, leia um livro, ouça música calma ou medite.</li>
            <li><strong>Ambiente ideal:</strong> Garanta que seu quarto esteja escuro, silencioso e com uma temperatura agradável.</li>
            <li><strong>Evite cafeína:</strong> Não consuma café, chás ou refrigerantes com cafeína no período da tarde e noite.</li>
        </ul>
    `,
    grave: `
        <p>A insônia grave pode exigir orientação profissional. Enquanto você procura ajuda, experimente estas dicas:</p>
        <ul>
            <li><strong>Consulte um profissional:</strong> Um médico pode investigar a causa da sua insônia e indicar o tratamento adequado.</li>
            <li><strong>Higiene do sono rigorosa:</strong> Além das dicas para insônia leve, evite cochilos durante o dia, e não use a cama para outras atividades, como comer ou trabalhar.</li>
            <li><strong>Terapia:</strong> A Terapia Cognitivo-Comportamental para Insônia (TCC-I) é muito eficaz para tratar a insônia crônica.</li>
            <li><strong>Mantenha um diário do sono:</strong> Anote quando você dorme e acorda, o que comeu antes de deitar, e outras informações que podem ajudar a identificar o problema.</li>
        </ul>
    `
};

// Função para exibir o conteúdo com base na opção clicada
function showContent(level) {
    document.getElementById('initial-question').style.display = 'none';
    
    const solutionContent = document.getElementById('solution-content');
    const solutionTips = document.getElementById('solution-tips');
    const feedbackForm = document.getElementById('feedback-form');

    solutionTips.innerHTML = tips[level];
    solutionContent.style.display = 'block';
    feedbackForm.style.display = 'block';
}

// Lógica para o formulário de feedback
document.getElementById('feedback-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const feedback = document.querySelector('input[name="feedback"]:checked').value;
    const feedbackMessage = document.getElementById('feedback-message');
    
    if (feedback === 'sim') {
        feedbackMessage.innerHTML = '<p class="success">Ótimo! Ficamos felizes em ajudar. Continue monitorando seu sono.</p>';
        feedbackMessage.classList.add('success');
    } else {
        feedbackMessage.innerHTML = '<p class="info">Entendido. Nesses casos, a melhor opção é procurar um profissional de saúde.</p>';
        feedbackMessage.classList.add('info');
    }
    
    // Oculta o formulário após o envio
    document.getElementById('feedback-form').style.display = 'none';
});