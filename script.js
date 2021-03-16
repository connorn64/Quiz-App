const quizContent = document.getElementById('quiz-content');
const quizStartBtn = document.getElementById('start-quiz-btn');

let counter = 0;
let results = 0;

const questions = [
    {
        question: "Who is #01 in the Pokedex?",
        answers: {
            a: "charmander",
            b: "pikachu",
            c: "bulbasaur",
            d: "metapod"
        },
        correctAnswer: "bulbasaur"
    },
    {
        question: "Who is the tallest final evolution of a starter Pokemon?",
        answers: {
            a: "venusaur",
            b: "blastoise",
            c: "charizard",
            d: "pikachu"
        },
        correctAnswer: "venusaur"
    },
    {
        question: "Which Pokemon resides in the Distortion world?",
        answers: {
            a: "giratina",
            b: "mewtwo",
            c: "zekrom",
            d: "groudon"
        },
        correctAnswer: "giratina"
    }, 
    {
        question: "Who is \#100 on the Pokedex?",
        answers: {
            a: "kangaskhan",
            b: "haunter",
            c: "voltorb",
            d: "mewtwo"
        },
        correctAnswer: "voltorb"
    },
    {
        question: "Who is Kanto's champion?",
        answers: {
            a: "red",
            b: "gary",
            c: "ash",
            d: "giovanni"
        },
        correctAnswer: "gary"
    },
    {
        question: "Who is the tallest Pokemon?",
        answers: {
            a: "onix",
            b: "gyarados",
            c: "dragonite",
            d: "snorlax"
        },
        correctAnswer: "onix"
    },
    {
        question: "Which Pokemon can live \"in molten lava of 3,600 degrees\"?",
        answers: {
            a: "rhydon",
            b: "magmar",
            c: "golem",
            d: "moltres"
        },
        correctAnswer: "rhydon"
    },
    {
        question: "Grabbing on of Ninetales' tails is said to bring a curse of how many years?",
        answers: {
            a: "9",
            b: "9000",
            c: "100",
            d: "1000"
        },
        correctAnswer: "1000"
    }
];

function displayQuiz() {
    quizStartBtn.style.display = 'none';
    quizContent.classList.remove('zero-height');
    quizContent.style.display = 'block';
    addContents();
};

function checkQuestions() {
    counter < questions.length ? addContents() : tryAgain();
};

function nextQuestionCorrect (quizContent) {
    alert('CORRECT! Next question...');
    results++;
    counter++;
    quizContent.innerHTML = '';
    checkQuestions();
};

function nextQuestionWrong (quizContent) {
    alert('INCORRECT! Try the next question...');
    counter++;
    quizContent.innerHTML = '';
    checkQuestions();
};

function tryAgain() {
    alert(`RESULTS: ${results}/${questions.length}`);

    quizContent.style.display = 'none';
    quizStartBtn.style.display = 'block';
    quizStartBtn.innerText = 'Try again?';
    results = 0;
    counter = 0;
    quizContent.innerHTML = '';
}

function addContents() {
    quizContent.innerHTML = `
                            <div class="question-container">
                                <p id="question-input">${questions[counter].question}</p>
                            </div>
                            <div class="answer-container">
                                <div class="answer-wrapper-container">
                                    <div class="answer-row">
                                        <button class="answer" id="answer-one">${questions[counter].answers.a}</button>
                                        <button class="answer" id="answer-two">${questions[counter].answers.b}</button>
                                    </div>
                                    <div class="answer-row">
                                        <button class="answer" id="answer-three">${questions[counter].answers.c}</button>
                                        <button class="answer" id="answer-four">${questions[counter].answers.d}</button>
                                    </div>
                                </div>
                            </div> `;

    const buttons = document.querySelectorAll('.answer');
    const correctAns = questions[counter].correctAnswer;

    buttons.forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            if (e.target.innerText.toLowerCase() === questions[counter].answers.a) {
                e.target.innerText.toLowerCase() === correctAns ? nextQuestionCorrect(quizContent) : nextQuestionWrong(quizContent);
                console.log('Button 1');
            } else if (e.target.innerText.toLowerCase() === questions[counter].answers.b) {
                e.target.innerText.toLowerCase() === correctAns ? nextQuestionCorrect(quizContent) : nextQuestionWrong(quizContent);
                console.log('Button 2');
            } else if (e.target.innerText.toLowerCase() === questions[counter].answers.c) {
                e.target.innerText.toLowerCase() === correctAns ? nextQuestionCorrect(quizContent) : nextQuestionWrong(quizContent);
                console.log('Button 3');
            } else if (e.target.innerText.toLowerCase() === questions[counter].answers.d) {
                e.target.innerText.toLowerCase() === correctAns ? nextQuestionCorrect(quizContent) : nextQuestionWrong(quizContent);
                console.log('Button 4');
            }
        });
    });
};

quizStartBtn.addEventListener('click', displayQuiz);