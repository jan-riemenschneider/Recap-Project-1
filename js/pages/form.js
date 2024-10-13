const buttonSubmit = document.querySelector('[data-js="button"]');
const form = document.querySelector("form");
const questionTextarea = document.getElementById('yourQuestion');
const answerTextarea = document.getElementById('yourAnswer');
const questionCounter = document.getElementById('questionCounter');
const answerCounter = document.getElementById('answerCounter');

const maxChars = 150;

questionTextarea.addEventListener('input', () => {
  const remaining = maxChars - questionTextarea.value.length;
  questionCounter.textContent = `${remaining} characters left`;
});

answerTextarea.addEventListener('input', () => {
  const remaining = maxChars - answerTextarea.value.length;
  answerCounter.textContent = `${remaining} characters left`;
});

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const question = document.querySelector('[name="yourQuestion"]').value;
  const answer = document.querySelector('[name="yourAnswer"]').value;
  const tags = document.querySelector('[name="tag"]').value;

  const newCard = {
    question: question,
    answer: answer,
    tags: tags,
  };

  let savedCards = JSON.parse(localStorage.getItem("cards")) || [];

  savedCards.push(newCard);

  localStorage.setItem("cards", JSON.stringify(savedCards));

  form.reset();
  questionCounter.textContent = `${maxChars} characters left`;
  answerCounter.textContent = `${maxChars} characters left`;

  alert('Die neue Karte wurde hinzugefügt!');
});