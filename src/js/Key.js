export class Key {
  constructor(data, key) {
    this.keysRus = data.rus[key];
    this.keysEng = data.eng[key];

  }

  generateKey() {
    let template = '';
    let keyboardKey = document.createElement('div');
    keyboardKey.className = `keyboard__key key ${this.keysEng["name"]}`;

    template += `<span class = "rus">`;
    template += `<span class = "caseDown">${this.keysRus["caseDown"]}</span>`;
    template += `<span class = "caseUp">${this.keysRus["caseUp"]}</span>`;
    template += `<span class = "caps">${this.keysRus["caps"]}</span>`;
    template += `<span class = "shiftCaps">${this.keysRus["shiftCaps"]}</span>`;
    template += `</span>`

    template += `<span class = "eng">`;
    template += `<span class = "caseDown">${this.keysEng["caseDown"]}</span>`;
    template += `<span class = "caseUp">${this.keysEng["caseUp"]}</span>`;
    template += `<span class = "caps">${this.keysEng["caps"]}</span>`;
    template += `<span class = "shiftCaps">${this.keysEng["shiftCaps"]}</span>`;
    template += `</span>`

    keyboardKey.innerHTML = template;
    
    return keyboardKey;
  }
}