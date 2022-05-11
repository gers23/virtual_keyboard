export class keyboardRow {
  constructor (data) {
    // this.nameKey = data.eng[key]
  }

  generateKeyboard() {
    let keyboardRow = document.createElement('div');
    keyboardRow.className = `keyboard__row`;

    return keyboardRow;
  }

  
}