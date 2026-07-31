const questions = [
  {
    question: "What does HTML stand for?",
    answers: [
      "Hyper Trainer Marking Language",
      "Hyper Text Markup Language",
      "Hyper Text Marketing Language",
      "Hyper Text Markup Leveler",
    ],
    correct: "Hyper Text Markup Language",
  },
  {
    question: "Which language is used to style a webpage?",
    answers: ["HTML", "JQuery", "CSS", "XML"],
    correct: "CSS",
  },
  {
    question: "Which one is a JavaScript framework/library?",
    answers: ["Laravel", "React", "Django", "Flask"],
    correct: "React",
  },
  {
    question: "Inside which HTML element do we put JavaScript?",
    answers: ["<js>", "<javascript>", "<scripting>", "<script>"],
    correct: "<script>",
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    answers: ["<!-- -->", "//", "**", "##"],
    correct: "//",
  },
];

// ===== 2. GRAB THE HTML ELEMENTS WE NEED =====
const questionCountEl = document.getElementById("question-count");
const questionTextEl = document.getElementById("question-text");
const answerButtonsEl = document.getElementById("answer-buttons");
const scoreTextEl = document.getElementById("score-text");
const nextBtn = document.getElementById("next-btn");

// ===== 3. STATE VARIABLES =====
// These track where we are in the quiz right now.
let currentQuestionIndex = 0;
let score = 0;

// ===== 4. LOAD A QUESTION ONTO THE PAGE =====
function loadQuestion() {
  // Clear old answer buttons before adding new ones
  answerButtonsEl.innerHTML = "";

  const currentQuestion = questions[currentQuestionIndex];

  // Update the "Question X of Y" text
  questionCountEl.textContent =
    "Question " + (currentQuestionIndex + 1) + " of " + questions.length;

  // Show the question text
  questionTextEl.textContent = currentQuestion.question;

  // Create one button for each possible answer
  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.textContent = answer;
    button.classList.add("btn");

    
    button.addEventListener("click", () => selectAnswer(button, answer));

    answerButtonsEl.appendChild(button);
  });

  
  nextBtn.style.display = "none";
}


function selectAnswer(selectedButton, selectedAnswer) {
  const currentQuestion = questions[currentQuestionIndex];
  const allButtons = answerButtonsEl.querySelectorAll(".btn");

  
  allButtons.forEach((button) => {
    button.disabled = true;

    
    if (button.textContent === currentQuestion.correct) {
      button.classList.add("correct");
    }
  });

  if (selectedAnswer !== currentQuestion.correct) {
    selectedButton.classList.add("wrong");
  } else {
    score++; 
  }

  updateScoreText();

  
  nextBtn.style.display = "inline-block";
  nextBtn.textContent =
    currentQuestionIndex === questions.length - 1 ? "See Results" : "Next";
}

function updateScoreText() {
  scoreTextEl.textContent = "Score: " + score + " / " + questions.length;
}


nextBtn.addEventListener("click", () => {
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    showFinalResults();
  }
});


function showFinalResults() {
  questionCountEl.textContent = "Quiz Completed!";
  questionTextEl.textContent = "You scored " + score + " out of " + questions.length + ".";
  answerButtonsEl.innerHTML = "";
  nextBtn.style.display = "inline-block";
  nextBtn.textContent = "Restart Quiz";

  nextBtn.onclick = () => {
    currentQuestionIndex = 0;
    score = 0;
    updateScoreText();
    loadQuestion();
    nextBtn.onclick = null;
  };
}


updateScoreText();
loadQuestion();








// function abc() {
//   return{ // ye bracket boht zaruri h alg next line m likh doge to niche ka code dead code ho jayega
//     count: 1,
//     name: "abc"
//   }
// }
// console.log(abc().name);
// const obj = abc();
// console.log(obj.count);