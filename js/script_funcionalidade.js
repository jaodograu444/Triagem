const tips = {
    leve: `
        <p>É normal sentir-se sobrecarregado(a) às vezes. Para manter sua rotina, experimente:</p>
        <ul>
            <li><strong>Organize-se:</strong> Use um planner ou agenda para listar suas tarefas e priorizá-las.</li>
            <li><strong>Divida tarefas grandes:</strong> Quebre grandes projetos em pequenas etapas mais fáceis de gerenciar.</li>
            <li><strong>Defina limites:</strong> Aprenda a dizer "não" para tarefas que você não pode assumir.</li>
            <li><strong>Pausas:</strong> Inclua pausas regulares para descansar a mente e o corpo.</li>
        </ul>
    `,
    grave: `
        <p>Se a dificuldade em cumprir tarefas básicas é constante, pode ser um sinal de que algo mais sério está acontecendo. Procure ajuda.</p>
        <ul>
            <li><strong>Fale com um terapeuta:</strong> Um profissional pode te ajudar a identificar as causas e a criar estratégias para recuperar o controle da sua rotina.</li>
            <li><strong>Não se compare:</strong> Cada um tem seu ritmo. Foque no seu progresso, não no que os outros estão fazendo.</li>
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
        feedbackMessage.innerHTML = '<p class="success">Ótimo! Fico feliz que as dicas ajudaram. Lembre-se de cuidar da sua mente.</p>';
        feedbackMessage.classList.add('success');
    } else {
        feedbackMessage.innerHTML = '<p class="info">Entendido. Nesses casos, a melhor opção é procurar um profissional de saúde.</p>';
        feedbackMessage.classList.add('info');
    }
    document.getElementById('feedback-form').style.display = 'none';
});