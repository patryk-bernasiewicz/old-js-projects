var main = (() => {
	console.log("Ready!");

	class UIHandler {
		constructor() {
			this.buttons = {
				start: new Button('play', 'btn--green', 'Play!'),
				higher: new Button('higher', 'btn--green', 'Higher!'),
				lower: new Button('lower', 'btn--red', 'Lower!'),
				correct: new Button('correct', 'btn--blue', 'Correct!')
			};
			this.text = {
				intro: new Text('Let\'s play a number guessing game.'),
			};
			this.mainMenu = {
				game__content: [this.text.intro],
				game__buttons: [this.buttons.start, this.buttons.higher]
			};
		}
		render() {
			var buttonsContainer = document.getElementsByClassName('game__buttons')[0];
			for(let x in this.mainMenu) {
				this.mainMenu[x].forEach((element) => element.render(x));
			}
		}
	};

	class UIElement {
		constructor() {
			this.element;
		}
		render(target) {
			if(!target) {
				console.error("Target not defined!", target);
			}
			console.log(target);
			var targetElement = document.getElementsByClassName(target)[0];
			if(!targetElement) {
				console.error("Target element is undefined!", targetElement);
			}
			console.log("Rendering: ", this.element, " to target: ", targetElement);
			targetElement.appendChild(this.element);
		}
	}

	class Text extends UIElement {
		constructor(text) {
			super();
			this.element = document.createElement('p');
			this.element.innerText = text;
			this.element.classList.add('text');
		}
	};

	class Button extends UIElement {
		constructor(id, className, text) {
			super();
			this.element = document.createElement('button');
			this.element.innerText = text;
			this.element.setAttribute('id', id);
			this.element.classList.add('btn', className);

			this.element.addEventListener('click', (e) => console.log(e.target));
		}
		get() {
			return this.element;
		}
		hide() {
			this.element.setAttribute('disabled', 'disabled');
			this.element.style.display = 'none';
		}
		show() {
			this.element.removeAttribute('disabled');
			this.element.style.dsiplay = 'inline-block';
		}
	};

	class Game {
		constructor() {
			this.status = 'stopped';
			this.lastNumber = 0;
			this.currentNumber = 0;
			this.numbersGuessed = [];

			this.maxNumber = 100;
		}
		init() {
			var UI = new UIHandler;
			UI.render();
		}
		randomNumber() {
			return Math.floor(Math.random() * this.maxNumber) + 1;
		}
	};

	var game = new Game;
	game.init();
})();