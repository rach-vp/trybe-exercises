// Botões e tags
const darkModeBtn = document.querySelector('#dark-mode-btn');
const bgColorSelector = document.querySelector('#bg-color-selector');
const fontColorSelector = document.querySelector('#font-color-selector');
const biggerFontSizeBtn = document.querySelector('#bigger-font-btn');
const smallerFontSizeBtn = document.querySelector('#smaller-font-btn');
const biggerSpacementBtn = document.querySelector('#bigger-spacement-btn');
const smallerSpacementBtn = document.querySelector('#smaller-spacement-btn');
const fontTypeSelector = document.querySelector('#font-type-selector');
const body = document.querySelector('body');

// Eventlisteners
darkModeBtn.addEventListener('click', () => switchMode(body));
bgColorSelector.addEventListener('change', () => changeBGColor(body, bgColorSelector.value));
fontColorSelector.addEventListener('change',() => changeFontColor(body, fontColorSelector.value));
biggerFontSizeBtn.addEventListener('click',increaseFontSize);
smallerFontSizeBtn.addEventListener('click', decreaseFontSize);
biggerSpacementBtn.addEventListener('click', increaseLineHeight);
smallerSpacementBtn.addEventListener('click',decreaseLineHeight);
fontTypeSelector.addEventListener('change', changeFontType);

//Funções
function switchMode(body) {
  body.style.backgroundColor = '';
  body.style.color = '';
  body.classList.toggle('dark-mode');
  localStorage.setItem('dark-mode', body.classList);
  localStorage.removeItem('bg-color');
  localStorage.removeItem('font-color');

}

function changeBGColor(body, bgColorSelector) {
  body.style.backgroundColor = bgColorSelector;
  localStorage.setItem('bg-color', bgColorSelector);
}

function changeFontColor(body, fontColorSelector) {
  body.style.color = fontColorSelector;
  localStorage.setItem('font-color', fontColorSelector);
}

function increaseFontSize() {
  const article = document.querySelector('#article-container');
  if (article.style.fontSize === '') {
    fontSize = 16;
  } else {
    fontSize = Number(article.style.fontSize.match(/\d+/g).join(''));
  }
  fontSize += 2;
  article.style.fontSize = `${fontSize}px`;
  localStorage.setItem('font-size', article.style.fontSize);
}

function decreaseFontSize() {
  const article = document.querySelector('#article-container');
  if (article.style.fontSize === '') {
    fontSize = 16;
  } else {
    fontSize = Number(article.style.fontSize.match(/\d+/g).join(''));
  }
  fontSize -= 2;
  article.style.fontSize = `${fontSize}px`;
  localStorage.setItem('font-size', article.style.fontSize);
}
