import { HTML } from "./js/HTML";
import { keyboardRow } from "./js/KeyboardRow";
import { Key } from "./js/Key";
import data from "./keys.json";

window.onload = function() {
  console.log('welcome to the world');

  renderHTMLToDOM();
  renderKeyboard(data, rowsKeys);
  changeLayout();

}

let lang = 'rus';
let activeKeys = "caseDown";
let position = 0;
let shiftKey = false;

const rowsKeys = [
  ["BackQuote", "Digit1", "Digit2", "Digit3", "Digit4", "Digit5", "Digit6", "Digit7", "Digit8", "Digit9", "Digit0", "Minus", "Equals", "Backspace"],
  ["Tab", "KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "BracketLeft", "BracketRight", "BackSlash", "Delete"],
  ["CapsLock", "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "Semicolon", "Quote", "Enter"],
  ["ShiftLeft", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Comma", "Period", "Slash", "ArrowUp", "ShiftRight"],
  ["ControlLeft", "AltLeft", "MetaLeft", "Space", "AltRight", "ArrowLeft", "ArrowDown", "ArrowRight", "ControlRight"]
];

function renderHTMLToDOM() {
  let page = new HTML();
  document.body.append(page.generateHTMLpage());
}

function renderKeyboard(data, rowsKeys) {
  rowsKeys.forEach(elem => {
    let row = (new keyboardRow(data)).generateKeyboard();
    document.querySelector('.keyboard').append(row);
    elem.forEach(item => {
      let key = new Key(data, item);
      row.append(key.generateKey());
    })
  })
}

function changeLayout() {
  let rus = document.querySelectorAll('.rus');
  let eng = document.querySelectorAll('.eng');

  eng.forEach(el => hideKeys(el));
  rus.forEach(el => hideKeys(el));

  if(lang === 'rus') {
    rus.forEach(el => el.classList.remove('hidden'));
    eng.forEach(el => el.classList.add('hidden'));
  } else {
    eng.forEach(el => el.classList.remove('hidden'));
    rus.forEach(el => el.classList.add('hidden'));
  }

  changeActiveKeys();
  
}

function hideKeys(el) {
  for (let i = 0; i < el.children.length; i++) {
    el.children[i].classList.add('hidden');
  }
}

function changeActiveKeys() {
  if (activeKeys === 'caseDown') {
    document.querySelectorAll('.caseDown').forEach(el => {
      el.classList.remove('hidden');
    })
  } else if (activeKeys === 'caseUp') {
    document.querySelectorAll('.caseUp').forEach(el => {
      el.classList.remove('hidden');
    })
  } else if (activeKeys === 'caps') {
    document.querySelectorAll('.caps').forEach(el => {
      el.classList.remove('hidden');
    })
  } else if (activeKeys === 'shiftCaps') {
    document.querySelectorAll('.shiftCaps').forEach(el => {
      el.classList.remove('hidden');
    })
  }
}


// controller function

function pressKey(event) {
  if (event.type === 'click') {
    let keyEvent = detectPressing(event);
    if(keyEvent && ((keyEvent !== 'ShiftLeft' && keyEvent !== 'ShiftRight') || 
    ((keyEvent === 'ShiftLeft' || keyEvent === 'ShiftRight') && (activeKeys === 'caseUp' || activeKeys === 'shiftCaps')))) {
      whichPressed(keyEvent);
    }
  } else if (event.type === 'keydown' || event.type === 'keyup') {
    let keyEvent = event.code;
    whichPressed(keyEvent);
  }
}

function detectPressing(event) {
  let key = event.target.className.split(' ');
  if(key[1] === 'key') {
    return key[2];
  } else if (key[0] === 'textarea') {
    position = document.querySelector('.textarea').selectionEnd;
  }
}

function whichPressed(key) {
  switch (key) {
      case 'Backspace':
        inputTextToTextarea(key);
        break;
      case 'Delete':
        inputTextToTextarea(key);
        break;
      case 'Tab':
        inputTextToTextarea('    ');
        break;
      case 'CapsLock':
        inputTextToTextarea(key);
        break;
      case 'Enter':
        inputTextToTextarea(key);
        break;
      case 'ShiftLeft':
        inputTextToTextarea(key);
        break;
      case 'ShiftRight':
        inputTextToTextarea(key);
        break;
      // case 'ControlLeft':
      //   break;
      // case 'ControlRight':
      //   break;
      // case 'AltLeft':
      //   break;
      // case 'AltRight':
      //   break;
      case 'Space':
        inputTextToTextarea(' ');
        break;
      case 'MetaLeft':
        break;
      default:
        let value = `${data[lang][key][activeKeys]}`;
        inputTextToTextarea(value);
        break;
    }
}


function inputTextToTextarea(value) {
  let textarea = document.querySelector('.textarea');
  if (position) textarea.selectionEnd = position;
  
  if (value === 'Backspace') {
    // let key = new KeyboardEvent('keydown', { key: value});
    // document.dispatchEvent(key)
    deleteSymbol(textarea, position - 1);
    // let arr = document.querySelector('.textarea').value.split('');
    // arr.pop();
    // document.querySelector('.textarea').value = arr.join('');

  } else if (value === 'Delete') {
    deleteSymbol(textarea, position);
    
  } else if (value === 'Enter') {
    addSymbol(textarea, position, '\n');

  } else if (value === 'CapsLock') {
    document.querySelector(`.${value}`).classList.toggle('active');
    document.querySelectorAll(`.${activeKeys}`).forEach(el => el.classList.toggle('hidden'));
    if (activeKeys === 'caseUp') activeKeys = 'shiftCaps';
    else if (activeKeys === 'caps') activeKeys = 'caseDown';
    else if (activeKeys === 'shiftCaps') activeKeys = 'caseUp';
    else activeKeys = 'caps';
    changeActiveKeys();

  } else if (value === 'ShiftLeft' || value === 'ShiftRight') {
    document.querySelector(`.${value}`).classList.toggle('active');
    document.querySelectorAll(`.${activeKeys}`).forEach(el => el.classList.toggle('hidden'));
    if (activeKeys === 'caseDown') activeKeys = 'caseUp';
    else if (activeKeys === 'caseUp') activeKeys = 'caseDown';
    else if (activeKeys === 'caps') activeKeys = 'shiftCaps';
    else if (activeKeys === 'shiftCaps') activeKeys = 'caps';
    
    changeActiveKeys();
  
  } else {
    addSymbol(textarea, position, value);
  }
}

function addSymbol(textarea, index, value) {
  let arr = textarea.value.split('');
  arr.splice(index, 0, value);

  if (index - 1 === textarea.value.length) position = textarea.value.length;
  else position = index + 1;
  
  textarea.value = arr.join('');
}

function deleteSymbol(textarea, index) {
  let arr = textarea.value.split('');
  arr.splice(index, 1);
  position = index;
  textarea.value = arr.join('');
}

// events

document.addEventListener('keydown', function(event) {
  if ((event.code === 'ShiftLeft' || event.code === 'ShiftRight') && shiftKey === false) {
    shiftKey = true;
    pressKey(event);
  } else if (event.repeat) {
  } else if (event.ctrlKey && event.code === 'AltLeft') {
    if (lang === 'rus') lang = 'eng';
    else lang = 'rus';
    changeLayout();
  } else pressKey(event);
  

})

document.addEventListener('keyup', function(event) {
  if ((event.code === 'ShiftLeft' || event.code === 'ShiftRight')) {
    shiftKey = false;
    pressKey(event);
  } else if (event.repeat) {

  }
})

document.addEventListener('click', function(event) {
  pressKey(event);
})

document.addEventListener('mousedown', function(event) {
  let keyEvent = detectPressing(event);
  if((keyEvent === 'ShiftLeft' || keyEvent === 'ShiftRight')) {
    whichPressed(keyEvent);
  }
})

document.addEventListener('mouseup', function(event) {
  let keyEvent = detectPressing(event);
  if(keyEvent === 'ShiftLeft' || keyEvent === 'ShiftRight') {
    whichPressed(keyEvent);
  }
})