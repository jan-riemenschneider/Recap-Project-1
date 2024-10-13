document.addEventListener('DOMContentLoaded', () => {
    const bookmarkList = document.getElementById("bookmarkList");
  
    const savedBookmarks = JSON.parse(localStorage.getItem('bookmarkedCards')) || [];
  
    savedBookmarks.forEach((bookmark, index) => {
      const newCard = document.createElement('section');
      newCard.classList.add('section');
  
      newCard.innerHTML = `
        <i
          data-js="bookmarks"
          class="material-icons"
          id="booksmark${index}"
          style="font-size: 45px"
        >bookmark</i>
        <p id="question${index}">${bookmark.question}</p>
        <button
          class="button-answer"
          data-js="buttonShowAnswer"
          aria-labelledby="question${index}"
        >
          Show Answer
        </button>
        <div class="answer-container" style="display: none;"></div>
        <div class="hashtags">
          <span>#${bookmark.tags}</span>
        </div>
      `;
  
      bookmarkList.appendChild(newCard);
  
      const answerButton = newCard.querySelector('[data-js="buttonShowAnswer"]');
      const answerContainer = newCard.querySelector('.answer-container');
  
      answerButton.addEventListener('click', () => {
        if (answerContainer.style.display === 'none') {
          answerContainer.style.display = 'block';
          answerContainer.innerHTML = `<p>${bookmark.answer}</p>`;
          answerButton.textContent = 'Hide Answer';
        } else {
          answerContainer.style.display = 'none';
          answerButton.textContent = 'Show Answer';
        }
      });
    });
  });