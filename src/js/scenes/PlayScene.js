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

	
		//const card = new Card(this, 200, 200, 0, '9', '♥️');

		const cards = [];
		const ox = 100;
		const oy = 200;
		const spacing = 20;
		let dx = 0;
		let index = 0;

		const suits = ['♠️', '♣️', '♥️', '♦️'];
		const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

		for (let s = 0; s < suits.length; s++) {
			for (let v = 0; v < values.length; v++) {

				cards.push(new Card(this, ox + dx, oy, index++, values[v], suits[s]));

				dx += spacing;
			}
		}
	}
	
}