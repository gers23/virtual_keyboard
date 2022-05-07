import { HTML } from "./js/HTML";

window.onload = function() {
  console.log('welcome to the world');

  renderHTMLToDOM();

}

function renderHTMLToDOM() {
  let page = new HTML();
  document.body.append(page.generateHTMLpage());
}