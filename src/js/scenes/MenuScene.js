
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


		// part 1
		this.add.text(canvasW / 2, 400, 'PART 1: CARDS', DEFS.MENU_STYLE)
			.setOrigin(0.5)
			.setInteractive()
			.on('pointerdown', () => {
				this.scene.start('part1');;
			});

		// part 2
		this.add.text(canvasW / 2, 600, 'PART 2: TEXT', DEFS.MENU_STYLE)
			.setOrigin(0.5)
			.setInteractive()
			.on('pointerdown', () => {
				this.scene.start('part2');;
			});

		// part 3
		this.add.text(canvasW / 2, 800, 'PART 3: PARTICLES', DEFS.MENU_STYLE)
			.setOrigin(0.5)
			.setInteractive()
			.on('pointerdown', () => {
				this.scene.start('part3');;
			});


	}
	
}