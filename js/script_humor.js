const tips = {
    leve: `
        <p>A irritabilidade e tristeza ocasionais podem ser gerenciadas com algumas práticas simples:</p>
        <ul>
            <li><strong>Exercite-se:</strong> A atividade física libera endorfinas, que melhoram o humor.</li>
            <li><strong>Conecte-se:</strong> Passe tempo com amigos e familiares que te fazem bem.</li>
            <li><strong>Tenha hobbies:</strong> Dedique tempo a atividades que você goste, como ouvir música, pintar ou caminhar.</li>
            <li><strong>Pratique a gratidão:</strong> Tente listar 3 coisas pelas quais você é grato(a) todos os dias.</li>
        </ul>
    `,
    grave: `
        <p>Mudanças extremas de humor podem ser sinais de condições que precisam de atenção médica. Recomenda-se procurar um profissional de saúde mental.</p>
        <ul>
            <li><strong>Consulte um especialista:</strong> Um psicólogo ou psiquiatra pode fazer um diagnóstico e indicar o melhor tratamento.</li>
            <li><strong>Não se isole:</strong> Converse com pessoas de confiança sobre o que você está sentindo.</li>
            <li><strong>Evite vícios:</strong> Álcool e outras substâncias podem agravar as oscilações de humor.</li>
        </ul>
    `
};
function showContent(level) {
    document.getElementById('initial-question').style.display = 'none';
    document.getElementById('solution-content').style.display = 'block';
    document.getElementById('solution-tips').innerHTML = tips[level];
    document.getElementById('feedback-form').style.display = 'block';
}
document.getElementById('feedback-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const feedback = document.querySelector('input[name="feedback"]:checked').value;
    const feedbackMessage = document.getElementById('feedback-message');
    if (feedback === 'sim') {
        feedbackMessage.innerHTML = '<p class="success">Ótimo! Ficamos felizes em ajudar. Cuide-se!</p>';
        feedbackMessage.classList.add('success');
    } else {
        feedbackMessage.innerHTML = '<p class="info">Entendido. Nesses casos, a melhor opção é procurar um profissional de saúde.</p>';
        feedbackMessage.classList.add('info');
    }
    document.getElementById('feedback-form').style.display = 'none';
});