const beginning = [
  'Кто рано встает, ',
  'Не бойся ошибаться, ',
  'Когда меня рожали, ',
  'Каждый может кинуть камень в волка, ',
  'Нельзя стоять, когда другие работают, ',
  'Иногда, жизнь — это жизнь, '
];

const ending = [
  'тот потом пожалеет о своем решении.',
  'собственно, тогда я и родился.',
  'но не каждый может кинуть волка в камень.',
  'надо лежать.',
  'а ты в ней — иногда.',
  'бойся не ошибаться.'
];

const images = [
  'images/1.png',
  'images/2.png',
  'images/3.png',
  'images/4.png',
  'images/5.png',
  'images/6.png'
];

const quoteText = document.querySelector('.quote');
const button = document.querySelector('.generate-btn');
const imageElement = document.querySelector('.quote-image');

function generateQuote() {
  const randomBeginningIndex = Math.floor(Math.random() * beginning.length);
  const randomEndingIndex = Math.floor(Math.random() * ending.length);
  const randomImageIndex = Math.floor(Math.random() * images.length);

  const finalQuote = beginning[randomBeginningIndex] + ending[randomEndingIndex];

  // убираем анимацию
  quoteText.classList.remove('show');
  imageElement.classList.remove('show');

  setTimeout(() => {
    quoteText.textContent = finalQuote;
    imageElement.src = images[randomImageIndex];

    quoteText.classList.add('show');
    imageElement.classList.add('show');
  }, 200);
}

button.addEventListener('click', generateQuote);

// первая генерация при загрузке
generateQuote();