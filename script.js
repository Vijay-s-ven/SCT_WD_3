const quizData = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyperlinks Text Mark Language",
            "Home Tool Markup Language"
        ],
        answer: 0
    },
    {
        question: "Which language is used for styling web pages?",
        options: ["HTML", "JQuery", "CSS", "XML"],
        answer: 2
    },
    {
        question: "Which is not a JavaScript framework?",
        options: ["React", "Angular", "Vue", "Django"],
        answer: 3
    },
    {
        question: "Inside which HTML element do we put JavaScript?",
        options: ["<js>", "<script>", "<javascript>", "<code>"],
        answer: 1
    }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const resultEl = document.getElementById("result");
const scoreEl = document.getElementById("score");

function loadQuestion() {
    questionEl.innerText = quizData[currentQuestion].question;
    optionsEl.innerHTML = "";

    quizData[currentQuestion].options.forEach((option, index) => {
        const btn = document.createElement("button");
        btn.innerText = option;
        btn.onclick = () => checkAnswer(index);
        optionsEl.appendChild(btn);
    });
}

function checkAnswer(selected) {
    if (selected === quizData[currentQuestion].answer) {
        score++;
    }
    nextQuestion();
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById("question-container").classList.add("hidden");
    document.getElementById("nextBtn").classList.add("hidden");
    resultEl.classList.remove("hidden");
    scoreEl.innerText = `${score} / ${quizData.length}`;
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    resultEl.classList.add("hidden");
    document.getElementById("question-container").classList.remove("hidden");
    document.getElementById("nextBtn").classList.remove("hidden");
    loadQuestion();
}

loadQuestion();
