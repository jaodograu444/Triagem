const tips = {
    leve: `
        <p>A ansiedade leve é comum e pode ser gerenciada com estas técnicas:</p>
        <ul>
            <li><strong>Respiração consciente:</strong> Quando se sentir ansioso, pare e respire fundo. Inspire por 4 segundos, segure por 4 e expire por 6.</li>
            <li><strong>Meditação e mindfulness:</strong> Praticar a atenção plena ajuda a focar no presente e reduzir preocupações.</li>
            <li><strong>Reduza a cafeína:</strong> Bebidas com cafeína podem aumentar os sintomas de ansiedade.</li>
            <li><strong>Converse sobre o que sente:</strong> Falar com alguém de confiança pode aliviar a tensão.</li>
        </ul>
    `,
    grave: `
        <p>Crises de ansiedade e ataques de pânico precisam de atenção profissional. Não hesite em procurar ajuda.</p>
        <ul>
            <li><strong>Procure um psicólogo ou psiquiatra:</strong> Eles podem oferecer ferramentas e tratamentos para lidar com a ansiedade crônica.</li>
            <li><strong>Terapia:</strong> A Terapia Cognitivo-Comportamental (TCC) é muito eficaz para tratar transtornos de ansiedade.</li>
            <li><strong>Grupos de apoio:</strong> Conversar com pessoas que passam por situações semelhantes pode ser de grande ajuda.</li>
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
        feedbackMessage.innerHTML = '<p class="success">Que bom que ajudou! Lembre-se de respirar fundo quando precisar.</p>';
        feedbackMessage.classList.add('success');
    } else {
        feedbackMessage.innerHTML = '<p class="info">Entendido. Nesses casos, a melhor opção é procurar um profissional de saúde.</p>';
        feedbackMessage.classList.add('info');
    }
    document.getElementById('feedback-form').style.display = 'none';
});