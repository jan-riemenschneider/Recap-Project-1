document.addEventListener('DOMContentLoaded', () => {
  const main = document.querySelector('main[data-js="append"]');

  const savedCards = JSON.parse(localStorage.getItem('cards')) || [];
  let savedBookmarks = JSON.parse(localStorage.getItem('bookmarkedCards')) || [];

  savedCards.forEach((card, index) => {
    const newCard = document.createElement('section');
    newCard.classList.add('section');

    newCard.innerHTML = `
      <i
        data-js="bookmarks"
        class="material-icons"
        id="booksmark${index}"
        style="font-size: 45px"
      >bookmark</i>
      <p id="question${index}">${card.question}</p>
      <button
        class="button-answer"
        data-js="buttonShowAnswer"
        aria-labelledby="question${index}"
      >
        Show Answer
      </button>
      <div class="answer-container" style="display: none;"></div>
      <div class="hashtags">
        <span>#${card.tags}</span>
      </div>
    `;

    main.appendChild(newCard);

    const answerButton = newCard.querySelector('[data-js="buttonShowAnswer"]');
    const answerContainer = newCard.querySelector('.answer-container');

    answerButton.addEventListener('click', () => {
      if (answerContainer.style.display === 'none') {
        answerContainer.style.display = 'block';
        answerContainer.innerHTML = `<p>${card.answer}</p>`;
        answerButton.textContent = 'Hide Answer';
      } else {
        answerContainer.style.display = 'none';
        answerButton.textContent = 'Show Answer';
      }
    });

    const bookmarkButton = newCard.querySelector('[data-js="bookmarks"]');
    bookmarkButton.addEventListener('click', () => {
      addBookmark(card); 
      newCard.remove();
    });
  });

  function addBookmark(card) {
    savedBookmarks.push(card);
    localStorage.setItem('bookmarkedCards', JSON.stringify(savedBookmarks));
    alert("Die Karte wurde zu den Bookmarks hinzugefügt!");
  }
});