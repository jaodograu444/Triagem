const tips = {
    leve: `
        <p>Dificuldade de concentração pode estar ligada a cansaço ou sobrecarga. Experimente estas dicas:</p>
        <ul>
            <li><strong>Faça pausas:</strong> Use a técnica Pomodoro (25 minutos de foco, 5 de descanso) para manter a mente fresca.</li>
            <li><strong>Organize-se:</strong> Planeje suas tarefas. Ter um objetivo claro ajuda a manter o foco.</li>
            <li><strong>Ambiente calmo:</strong> Desligue notificações de celular e trabalhe em um local silencioso.</li>
            <li><strong>Durma bem:</strong> A falta de sono é uma das principais causas de problemas de concentração.</li>
        </ul>
    `,
    grave: `
        <p>Se a dificuldade de concentração é constante e afeta sua produtividade, pode ser necessário buscar ajuda especializada.</p>
        <ul>
            <li><strong>Avaliação médica:</strong> Procure um médico para investigar possíveis causas, como TDAH, ansiedade ou outras condições.</li>
            <li><strong>Não se cobre:</strong> Reconheça suas dificuldades e procure apoio em vez de se culpar.</li>
        </ul>
    `
};
function showContent(level) {
    document.getElementById('initial-question').style.display = 'none';
    document.getElementById('solution-content').style.display = 'block';
    document.getElementById('solution-tips').innerHTML = tips[level];
    document.getElementById('feedback-form').style.display = 'block';
}
document.getElementById('feedback-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const feedback = document.querySelector('input[name="feedback"]:checked').value;
    const feedbackMessage = document.getElementById('feedback-message');
    if (feedback === 'sim') {
        feedbackMessage.innerHTML = '<p class="success">Ótimo! Ficamos felizes em ajudar. Continue monitorando seu foco.</p>';
        feedbackMessage.classList.add('success');
    } else {
        feedbackMessage.innerHTML = '<p class="info">Entendido. Nesses casos, a melhor opção é procurar um profissional de saúde.</p>';
        feedbackMessage.classList.add('info');
    }
    document.getElementById('feedback-form').style.display = 'none';
});