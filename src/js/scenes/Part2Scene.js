
/**
 * play screen part 2
 */

class Part2Scene extends BasePartScene {

	constructor() {
		super({
			key: 'part2'
		});
	}
	
	create() {

		this.charValues = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
		this.emojiValues = ['🍏','🍎','🍐','🍊','🍋','🍌','🍉','🍇','🍓','🫐','🍈','🍒','🍑','🥭','🍍','🥥','🥝','🍅','🍆','🥑','🥦','🥬','🥒','🌶','🫑','🌽','🥕','🫒','🧄','🧅','🥔','🍠','🥐','🥯','🍞','🥖','🥨','🧀','🥚','🍳','🧈','🥞','🧇','🥓','🥩','🍗','🍖','🦴','🌭v🍔','🍟','🍕'];

		const style = {
			font: "72px DINCondensed-Bold",
			align: "center",
			fill: "#9999ee"
		};
		this.theText = this.add.text(this.sys.game.canvas.width / 2, this.sys.game.canvas.height / 2, ' ', style)
			.setOrigin(0.5)
			.setFill("#eee");


		super.create();

		this.changeText();
	}
	
	/**
	 * Randomly change the displayed text
	 */
	changeText() {

		// get a random length and font size
		const length = 3 + Math.floor(Math.random() * 4);
		const fontSize = 24 + Math.floor(Math.random() * 96);

		// build our random string
		let newText = "";
		for (let i = 0; i < length; i++) {
			if (Math.random() < 0.3) {
				// use emoji
				let newChar = this.emojiValues[Math.floor(Math.random() * this.emojiValues.length)];
				newText += newChar;
			}
			else {
				// use character
				let newChar = this.charValues.charAt(Math.floor(Math.random() * this.charValues.length));
				newText += newChar;
			}
		}

		this.theText.setText(newText).setFontSize(fontSize + 'px');

		// change text after delay
		this.time.delayedCall(2000, this.changeText.bind(this));

	}

}