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
let activeKeys = 'caseDown';

const rowsKeys = [
  ["BackQuote", "Digit1", "Digit2", "Digit3", "Digit4", "Digit5", "Digit6", "Digit7", "Digit8", "Digit9", "Digit0", "Minus", "Equals", "BackSpace"],
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
  console.log(lang === 'rus');
  let rus = document.querySelectorAll('.rus');
  let eng = document.querySelectorAll('.eng');

  eng.forEach(el => hideKeys(el));
  rus.forEach(el => hideKeys(el));

  if(lang === 'rus') {
    eng.forEach(el => el.classList.add('hidden'));
  } else {
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

// events
document.addEventListener('keydown', function(event) {
  console.log(event);
})

document.addEventListener('click', function(event) {
  let key = event.target.className.split(' ');
  if(key[0] === 'keyboard__key') {
    console.log(key[1]);
    switch (key[1]) {
      case 'BackSpace':
        console.log('backspace');
        inputTextToTextarea(key[1]);
        break;
      case 'Tab':
        console.log('tab');
        inputTextToTextarea('    ');
        break;
      case 'CapsLock':
        console.log('caps');
        break;
      case 'Enter':
        console.log('enter');
        break;
      case 'ShiftLeft':
        console.log('shift');
        inputTextToTextarea(key[1]);
        break;
      case 'ShiftRight':
        console.log('shift');
        break;
      case 'ControlLeft':
        console.log('ctrl');
        break;
      case 'ControlRight':
        console.log('ctrl');
        break;
      case 'AltLeft':
        console.log('alt');
        break;
      case 'AltRight':
        console.log('alt');
        break;
      case 'Space':
        console.log('space');
        inputTextToTextarea(' ');
        break;
      case 'MetaLeft':
        console.log('win');
        break;
      default:
        console.log(`${data[lang][key[1]][activeKeys]}`);
        let value = `${data[lang][key[1]][activeKeys]}`;
        inputTextToTextarea(value);
        break;
    }
  } else console.log('sosi');
  
})

function inputTextToTextarea(value) {
  if (value === 'BackSpace') {
    // let key = new KeyboardEvent('keydown', { key: value});
    // document.dispatchEvent(key)
    let arr = document.querySelector('.textarea').value.split('');
    arr.pop();
    document.querySelector('.textarea').value = arr.join('');
  } else if (value === 'ShiftLeft') {
    activeKeys = 'caseUp';
    changeActiveKeys();
    console.log(activeKeys);
  
  } else {
    document.querySelector('.textarea').value += value;
  }
  
}