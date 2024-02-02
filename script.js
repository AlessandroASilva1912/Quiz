const quizContainer = document.getElementById('quiz-container');
const submitButton = document.getElementById('submit-btn');
const scoreContainer = document.getElementById('score-container');

const questions = [
    {
        question: 'Qual é a capital do Brasil?',
        options: ['Rio de Janeiro', 'Brasília', 'São Paulo', 'Salvador'],
        correctAnswer: 'Brasília'
    },
    {
        question: 'Qual é o maior planeta do sistema solar?',
        options: ['Vênus', 'Júpiter', 'Marte', 'Saturno'],
        correctAnswer: 'Júpiter'
    },
    {
        question: 'Qual time revelou os meninos da vila?',
        options: ['Corinthians', 'Santos', 'Palmeiras', 'Vila Nova'],
        correctAnswer: 'Santos'
    }
];

function initQuiz() {
    for (let i = 0; i < questions.length; i++) {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');

        const questionText = document.createElement('p');
        questionText.textContent = `${i + 1}. ${questions[i].question}`;
        questionDiv.appendChild(questionText);

        for (let j = 0; j < questions[i].options.length; j++) {
            const optionInput = document.createElement('input');
            optionInput.type = 'radio';
            optionInput.name = `question-${i}`;
            optionInput.value = questions[i].options[j];

            const optionLabel = document.createElement('label');
            optionLabel.textContent = questions[i].options[j];
            optionLabel.appendChild(optionInput);

            questionDiv.appendChild(optionLabel);
        }

        quizContainer.appendChild(questionDiv);
    }
}

function checkAnswers() {
    const userAnswers = [];
    let score = 0;

    const questionDivs = document.querySelectorAll('.question');
    questionDivs.forEach((questionDiv, i) => {
        const selectedOption = questionDiv.querySelector('input:checked');
        if (selectedOption) {
            userAnswers.push(selectedOption.value);
            if (selectedOption.value === questions[i].correctAnswer) {
                score++;
                questionDiv.style.color = 'green';
            } else {
                questionDiv.style.color = 'red';
            }
        }
    });

    const totalQuestions = questions.length;
    const userScore = `Você acertou ${score} de ${totalQuestions} perguntas.`;

    scoreContainer.textContent = userScore;
}

document.addEventListener('DOMContentLoaded', initQuiz);

submitButton.addEventListener('click', checkAnswers);
