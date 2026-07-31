# my-codeS.quiz-app

A simple quiz app built with **HTML**, **CSS**, and **JavaScript**.

## What Does This Project Do?

This app asks you 5 web development questions one by one. You pick an answer, and it tells you if you're right or wrong. At the end, you see your final score and can restart the quiz.

## How It Works

1. A question appears with 4 answer buttons
2. Click on an answer
3. Correct answer turns **green**, wrong answer turns **red**
4. Click **Next** to go to the next question
5. After all 5 questions, you see your final score
6. Click **Restart Quiz** to play again

## Quiz Questions

The quiz contains 5 beginner-level web development questions:

- What does HTML stand for?
- Which language is used to style a webpage?
- Which one is a JavaScript framework/library?
- Inside which HTML element do we put JavaScript?
- Which symbol is used for comments in JavaScript?

## Files in This Project

| File | What It Does |
|------|-------------|
| `index.html` | The page structure (quiz box, question text, answer area, next button) |
| `index.css` | Styling (centered card layout, green/red answer colors, button styles) |
| `index.js` | All the quiz logic (loading questions, checking answers, tracking score, restart) |

## Technologies Used

- **HTML5** — Page structure
- **CSS3** — Card styling, correct/wrong answer colors
- **JavaScript (Vanilla)** — DOM manipulation, event listeners, quiz logic

## How to Run

1. Download or clone this folder
2. Open `index.html` in any web browser
3. Start answering questions!

## What I Learned

- How to store quiz data in an **array of objects**
- How to use `document.createElement()` to create buttons dynamically
- How to use `classList.add()` to apply correct/wrong styling
- How to track state with variables (`currentQuestionIndex`, `score`)
- How to disable buttons after an answer is selected using `button.disabled = true`
- How to restart the quiz by resetting variables and re-calling `loadQuestion()`

## Future Improvements

- Add more questions
- Add a timer for each question
- Shuffle the answer order randomly
- Add difficulty levels (easy, medium, hard)
- Save high scores using `localStorage`

---

Made with ❤️ as a hand-made learning project.
