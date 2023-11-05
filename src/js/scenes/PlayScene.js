/*
 * play screen
 */

class PlayScene extends Phaser.Scene {

	constructor() {
		super({
			key: 'play'
		});
	}

	preload() {


	}
	
	create() {

		console.log('Game started');

		// origin stack
		this.cardStack1 = [];

		// destination stack
		this.cardStack2 = [];

		const ox = 0;
		const oy = 200;
		const spacing = 4;
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

		this.time.delayedCall(1000, this.moveCard.bind(this));
	}

	moveCard() {

		if (this.cardStack1.length == 0) {
			// nothing left
			return;
		}

		const cardToMove = this.cardStack1.splice(this.cardStack1.length - 1, 1)[0];

		cardToMove.destroy();

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
	
}