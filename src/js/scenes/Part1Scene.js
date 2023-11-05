/*
 * play screen part 1
 */

class Part1Scene extends Phaser.Scene {

	constructor() {
		super({
			key: 'part1'
		});
	}

	preload() {


	}
	
	create() {

		// origin stack
		this.cardStack1 = [];

		// destination stack
		this.cardStack2 = [];

		const ox = 80;
		const oy = 200;
		const spacing = 3;
		let dx = 0;
		let index = 0;

		const suits = ['🐶', '🐱', '🐹', '🐰', '🦊', '🐻', '🐼', '🦁', '🐮', '🐷', '🐸', '🐵'];
		const values = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];

		let deck = [];
		// create deck
		for (let s = 0; s < suits.length; s++) {
			for (let v = 0; v < values.length; v++) {
				deck.push({ suit: suits[s], value: values[v] });
			}
		}

		// shuffle deck
		deck = this.shuffle(deck);

		for (let i = 0; i < deck.length; i++) {

			this.cardStack1.push(new Card(this, ox + dx, oy, index++, deck[i].value, deck[i].suit).setDepth(index * 10));

			dx += spacing;
		}

		// FPS counter
		this.fpsText = this.add.text(10, 10, '0', DEFS.FPS_STYLE);

		// return button
		this.add.text(this.sys.game.canvas.width / 2, this.sys.game.canvas.height - 100, 'BACK TO MENU', DEFS.MENU_STYLE)
			.setOrigin(0.5)
			.setInteractive()
			.on('pointerdown', () => {
				this.scene.start('menu');;
		});

		// start moving cards
		this.time.delayedCall(1000, this.moveCard.bind(this));

	}

	moveCard() {

		if (this.cardStack1.length == 0) {
			// nothing left
			return;
		}

		const ox = 80;
		const oy = 600;
		const spacing = 3;

		const cardToMove = this.cardStack1.splice(this.cardStack1.length - 1, 1)[0];
		cardToMove.setDepth(144 * 10 + 10 * this.cardStack2.length);
		this.cardStack2.push(cardToMove);

		this.tweens.add({
			targets: cardToMove,
			x: ox + this.cardStack2.length * spacing,
			y: oy,
			rotation: -Math.PI * 2, 
			duration: 2000,
			onComplete: () => {
				cardToMove.setRotation(0);
			}
		});

		this.time.delayedCall(1000, this.moveCard.bind(this));
	}


	/*
		Fisher-Yates (aka Knuth) Shuffle
	*/
	shuffle(array) {
		let currentIndex = array.length,  randomIndex;

		// While there remain elements to shuffle.
		while (currentIndex > 0) {

		// Pick a remaining element.
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;

		// And swap it with the current element.
		[array[currentIndex], array[randomIndex]] = [
			array[randomIndex], array[currentIndex]];
		}

		return array;
	}

	update() {
		this.fpsText.setText('fps: ' + GLOBAL.phaserGame.loop.actualFps.toFixed(1));
	}
}