export class HTML {
	constructor () {

	}

	generateHTMLpage() {
		let preTemplate = '';
		let afterTemplate = '';
		let div = document.createElement('div');
		div.className = 'wrapper';
		let divKeyboard = document.createElement('div');
		divKeyboard.className = 'keyboard';

		preTemplate += `<h1>RSS Virtual Keyboard</h1>`;
		preTemplate += `<textarea class = 'textarea' cols = '85' rows = '10'></textarea>`;
		afterTemplate += `<p>The keyboard is created in the operating system Windows.</p>`;
		afterTemplate += `<p>Language switching is carried out by a key combination: Ctrl + Alt</p>`;

		div.innerHTML = preTemplate;
		div.append(divKeyboard);
		div.insertAdjacentHTML('beforeend', afterTemplate);

		return div;
	}
}