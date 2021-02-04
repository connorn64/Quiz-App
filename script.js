let counter = 0;
let results = 0;

const quizContent = document.getElementById('quiz-content');
const quizStartBtn = document.getElementById('start-quiz-btn');

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
        question: "Question two here?",
        answers: {
            a: "answer one",
            b: "answer two",
            c: "answer three",
            d: "answer four"
        },
        correctAnswer: "answer one"
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
        question: "Question four here?",
        answers: {
            a: "answer one",
            b: "answer two",
            c: "answer three",
            d: "answer four"
        },
        correctAnswer: "answer four"
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
        question: "QUESTION 78?",
        answers: {
            a: "charmander",
            b: "pikachu",
            c: "bulbasaur",
            d: "metapod"
        },
        correctAnswer: "bulbasaur"
    }
];

const totalQuestions = questions.length;

function startQuiz() {
    displayQuiz();
    reRunFillContents();
};

function displayQuiz() {
    quizStartBtn.remove();
    quizContent.style.display = 'block';
};

function fillContents() {
    let answerRowOne = document.querySelector('answer-row');

    function tempTemp() {
        let tempBtn = document.createElement('button');
        tempBtn.classList.add('answer');
        tempBtn.setAttribute('id', 'answer-one');
        answerRowOne.appendChild(tempBtn);
        return tempBtn;
    };
    tempTemp();

    const questionContainer = document.getElementById("question-input");
    const buttonOne = document.getElementById("answer-one");
    const buttonTwo = document.getElementById("answer-two");
    const buttonThree = document.getElementById("answer-three");
    const buttonFour = document.getElementById("answer-four");

    let currentQuestion = questions[counter].question;
    let correctAns = questions[counter].correctAnswer;
    let answerA = questions[counter].answers.a;
    let answerB = questions[counter].answers.b;
    let answerC = questions[counter].answers.c;
    let answerD = questions[counter].answers.d;

    questionContainer.innerText = currentQuestion;
    buttonOne.innerText = answerA;
    buttonTwo.innerText = answerB;
    buttonThree.innerText = answerC;
    buttonFour.innerText = answerD;
    
    buttonOne.addEventListener("click", function() {
        if (buttonOne.innerText.toLowerCase() === correctAns) {
            // console.log("correct!");
            buttonOne.remove();
            nextQuestion();
        } else {
            // console.log("incorrect!");
            buttonOne.remove();
            nextQuestion();
        }
    });
    
    buttonTwo.addEventListener("click", function() {
        if (buttonTwo.innerText.toLowerCase() === correctAns) {
            // console.log("correct!");
            nextQuestion();
        } else {
            // console.log("incorrect!");
            nextQuestion(); 
        }
    }); 
    
    buttonThree.addEventListener("click", function() {
        if (buttonThree.innerText.toLowerCase() === correctAns) {
            // console.log("correct!");
            nextQuestion();
        } else {
            // console.log("incorrect!");
            nextQuestion();
        }
    }); 
    
    buttonFour.addEventListener("click", function() {
        if (buttonFour.innerText.toLowerCase() === correctAns) {
            // console.log("correct!");
            nextQuestion();
        } else {
            // console.log("incorrect!");
            nextQuestion();
        }
    }); 
};

function nextQuestion() {
    counter = counter + 1;
    console.log(counter);
    reRunFillContents();
};

function reRunFillContents() {
    if (counter < totalQuestions) {
        fillContents();
    };
};

quizStartBtn.addEventListener("click", startQuiz);

// buttonOne.addEventListener("click", function() {
//     buttonOne.innerText.toLowerCase() === correctAns ? nextQuestion() : nextQuestion();
// });

// buttonTwo.addEventListener("click", function() {
//     buttonTwo.innerText.toLowerCase() === correctAns ? nextQuestion() : nextQuestion();
// });

// buttonThree.addEventListener("click", function() {
//     buttonThree.innerText.toLowerCase() === correctAns ? nextQuestion() : nextQuestion();
// });

// buttonFour.addEventListener("click", function() {
//     buttonFour.innerText.toLowerCase() === correctAns ? nextQuestion() : nextQuestion();
// });