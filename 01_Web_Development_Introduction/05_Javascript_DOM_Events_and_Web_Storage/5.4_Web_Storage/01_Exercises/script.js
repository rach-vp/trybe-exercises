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
const article = document.querySelector('#article-container');

// Eventlisteners
darkModeBtn.addEventListener('click', () => switchMode(body));
bgColorSelector.addEventListener('change', () => changeBGColor(body, bgColorSelector.value));
fontColorSelector.addEventListener('change', () => changeFontColor(body, fontColorSelector.value));
biggerFontSizeBtn.addEventListener('click', () => increaseFontSize(article));
smallerFontSizeBtn.addEventListener('click', () =>  decreaseFontSize(article));
biggerSpacementBtn.addEventListener('click', () =>  increaseLineHeight(article));
smallerSpacementBtn.addEventListener('click', () => decreaseLineHeight(article));
fontTypeSelector.addEventListener('change', () => changeFontType(body, fontTypeSelector.value));

//Funções
function switchMode(body) {
  if (!body.classList.toggle('dark-mode')) {
    localStorage.removeItem('dark-mode');
  } else {
    body.style.backgroundColor = '';
    body.style.color = '';
    localStorage.setItem('dark-mode', body.classList);
    localStorage.removeItem('background-color');
    localStorage.removeItem('color');
  }
}

function changeBGColor(body, bgColorSelector) {
  body.style.backgroundColor = bgColorSelector;
  localStorage.setItem('background-color', bgColorSelector);
  localStorage.removeItem('dark-mode');
}

function changeFontColor(body, fontColorSelector) {
  body.style.color = fontColorSelector;
  localStorage.setItem('color', fontColorSelector);
  localStorage.removeItem('dark-mode');
}

function increaseFontSize() {
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
  if (article.style.fontSize === '') {
    fontSize = 16;
  } else {
    fontSize = Number(article.style.fontSize.match(/\d+/g).join(''));
  }
  fontSize -= 2;
  article.style.fontSize = `${fontSize}px`;
  localStorage.setItem('font-size', article.style.fontSize);
}

function increaseLineHeight() {
  if (article.style.lineHeight === '') {
    lineHeight = Math.round(16 * 1.2);
  } else {
    lineHeight = Number(article.style.lineHeight.match(/\d+/g).join(''));
  }
  lineHeight += 2;
  article.style.lineHeight = `${lineHeight}px`;
  localStorage.setItem('line-height', article.style.lineHeight);
}

function decreaseLineHeight() {
  if (article.style.lineHeight === '') {
    lineHeight = Math.round(16 * 1.2);
  } else {
    lineHeight = Number(article.style.lineHeight.match(/\d+/g).join(''));
  }
  lineHeight -= 2;
  article.style.lineHeight = `${lineHeight}px`;
  localStorage.setItem('line-height', article.style.lineHeight);
}

function changeFontType(body, fontType) {
  body.style.fontFamily = fontType.toLowerCase();
  localStorage.setItem('font-family', fontType);
}

window.onload = (() => {
  const bodyClassPropperties = {
    'dark-mode': 'dark-mode',
  }
  const bodyStyleProperties = {
    'background-color': 'backgroundColor',
    'color': 'color',
    'font-family': 'fontFamily',
  };
  const articleProperties = {
    'font-size': 'fontSize',
    'line-height': 'lineHeight',
  }
  for (let index = 0; index < localStorage.length; index += 1) {
    const key = localStorage.key(index);
    if (Object.keys(bodyStyleProperties).includes(key)) {
      body.style[bodyStyleProperties[key]] = localStorage.getItem(key);
    } else if (Object.keys(articleProperties).includes(key)) {
      article.style[articleProperties[key]] = localStorage.getItem(key);
    } else {
      body.classList.add(localStorage.getItem(key));
    }
  }
});
