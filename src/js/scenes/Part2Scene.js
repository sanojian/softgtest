
/**
 * play screen part 2
 */

class Part2Scene extends Phaser.Scene {

	constructor() {
		super({
			key: 'part2'
		});
	}

	preload() {


	}
	
	create() {

		const style = {
			font: "72px DINCondensed-Bold",
			align: "center",
			fill: "#9999ee"
		};
		this.theText = this.add.text(this.sys.game.canvas.width / 2, this.sys.game.canvas.height / 2, 'THE TEXT', style)
			.setOrigin(0.5)
			.setFill("#eee");


		// FPS counter
		this.fpsText = this.add.text(10, 10, '0', DEFS.FPS_STYLE);

		// return button
		this.add.text(this.sys.game.canvas.width / 2, this.sys.game.canvas.height - 100, 'BACK TO MENU', DEFS.MENU_STYLE)
			.setOrigin(0.5)
			.setInteractive()
			.on('pointerdown', () => {
				this.scene.start('menu');;
		});

		this.changeText();
	}
	
	changeText() {

		const length = 3 + Math.floor(Math.random() * 4);
		const fontSize = 24 + Math.floor(Math.random() * 96);

		const charValues = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
		const emojiValues = ['🍏','🍎','🍐','🍊','🍋','🍌','🍉','🍇','🍓','🫐','🍈','🍒','🍑','🥭','🍍','🥥','🥝','🍅','🍆','🥑','🥦','🥬','🥒','🌶','🫑','🌽','🥕','🫒','🧄','🧅','🥔','🍠','🥐','🥯','🍞','🥖','🥨','🧀','🥚','🍳','🧈','🥞','🧇','🥓','🥩','🍗','🍖','🦴','🌭v🍔','🍟','🍕'];

		let newText = "";
		for (let i = 0; i < length; i++) {
			if (Math.random() < 0.3) {
				// use emoji
				let newChar = emojiValues[Math.floor(Math.random() * emojiValues.length)];
				newText += newChar;
			}
			else {
				let newChar = charValues.charAt(Math.floor(Math.random() * charValues.length));
				newText += newChar;
			}
		}

		this.theText.setText(newText).setFontSize(fontSize + 'px');

		// change text
		this.time.delayedCall(2000, this.changeText.bind(this));

	}

	update() {
		this.fpsText.setText('fps: ' + GLOBAL.phaserGame.loop.actualFps.toFixed(1));
	}

}