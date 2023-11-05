
/**
 * menu screen
 */

class MenuScene extends Phaser.Scene {

	constructor() {
		super({
			key: 'menu'
		});
	}

	preload() {


	}
	
	create() {


		let canvasW = this.sys.game.canvas.width;
		let canvasH = this.sys.game.canvas.height;

		this.add.text(canvasW / 2, 100, 'MENU', DEFS.MENU_STYLE)
			.setOrigin(0.5)
			.setFill("#eee");


		this.add.text(canvasW / 2, 400, 'PART 1: CARDS', DEFS.MENU_STYLE)
			.setOrigin(0.5)
			.setInteractive()
			.on('pointerdown', () => {
				this.scene.start('play');;
			});


		//this.scene.start('play');

	}
	
}