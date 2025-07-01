const questions = [
  "🧠 Q1: Print 'Hello World' using ChatGPT.",
  "🐛 Q2: Fix the bug in this code:\nlife(); // not working",
  "💔 Q3: Reverse a relationship using recursion.",
  "🧙 Q4: Create a love calculator using C++ and heartbreak.",
  "🚀 Q5: Write a function that clears arrears without studying."
];

const results = [
  "You're hired… as a chaiwala ☕",
  "Your code gave the compiler depression 💀",
  "You wrote Python in a C program. Brave, but wrong.",
  "Error 404: Brain not found.",
  "Your logic is strong… in another multiverse 🌌",
  "Elon Musk blocked you from GitHub 🚫",
  "You qualify as a Stack Overflow copy-paster 📝"
];

let current = 0;

const questionEl = document.getElementById("question");
const progressEl = document.getElementById("progress");
const resultScreen = document.getElementById("resultScreen");
const finalResult = document.getElementById("finalResult");

function showQuestion() {
  questionEl.innerText = questions[current];
  progressEl.innerText = `Question ${current + 1} of ${questions.length}`;
}

function nextQuestion() {
  const userAnswer = document.getElementById("answer").value.trim();

   
  const isCodeLike = /[{}();=]|function|print|console|def|let|var|int|return/.test(userAnswer);

  if (!isCodeLike || userAnswer.length < 5) {
    alert("🚫 That doesn't look like code. Try again!");
    return;
  }

  document.getElementById("answer").value = "";

  if (current < questions.length - 1) {
    current++;
    showQuestion();
  } else {
    document.querySelector(".container").classList.add("hidden");
    resultScreen.classList.remove("hidden");

    const randomResult = results[Math.floor(Math.random() * results.length)];
    setTimeout(() => {
      finalResult.innerText = randomResult;
    }, 2000);
  }
}



window.onload = showQuestion;
