const questions = [
    {
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "High Text Machine Language", "Hyperlinks Text Mark Language", "None"],
        answer: 0
    },
    {
        question: "Which language is used for styling web pages?",
        options: ["HTML", "Python", "CSS", "Java"],
        answer: 2
    },
    {
        question: "Which is a JavaScript framework?",
        options: ["React", "Django", "Flask", "MySQL"],
        answer: 0
    },
    {
        question: "What does API stand for?",
        options: ["Application Programming Interface", "Advanced Program Interface", "App Programming Info", "None"],
        answer: 0
    }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionButtons = document.querySelectorAll(".option");
const scoreEl = document.getElementById("score");

function loadQuestion() {
    let q = questions[currentQuestion];
    questionEl.innerText = q.question;
    optionButtons.forEach((btn, index) => {
        btn.innerText = q.options[index];
        btn.disabled = false;
        btn.style.background = "#667eea";
    });
}

function selectAnswer(index) {
    if (index === questions[currentQuestion].answer) {
        score++;
        optionButtons[index].style.background = "green";
    } else {
        optionButtons[index].style.background = "red";
    }

    optionButtons.forEach(btn => btn.disabled = true);
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        questionEl.innerText = "Quiz Completed!";
        document.querySelector(".options").style.display = "none";
        document.getElementById("nextBtn").style.display = "none";
        scoreEl.innerText = `Your Score: ${score} / ${questions.length}`;
    }
}

loadQuestion();