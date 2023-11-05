
/**
 * menu screen
 */

class MenuScene extends Phaser.Scene {

	constructor() {
		super({
			key: 'menu'
		});
	}
	
	create() {


		let canvasW = this.sys.game.canvas.width;
		let canvasH = this.sys.game.canvas.height;

		// menu label
		this.add.text(canvasW / 2, 100, 'MENU', DEFS.MENU_STYLE)
			.setOrigin(0.5)
			.setFill("#eee");


		// part 1 button
		this.buttonPart1 = this.add.text(canvasW / 2, 400, 'PART 1: CARDS', DEFS.MENU_STYLE)
			.setOrigin(0.5)
			.setInteractive()
			.on('pointerdown', () => {
				this.scene.start('part1');;
			});

		// part 2 button
		this.buttonPart2 = this.add.text(canvasW / 2, 600, 'PART 2: TEXT', DEFS.MENU_STYLE)
			.setOrigin(0.5)
			.setInteractive()
			.on('pointerdown', () => {
				this.scene.start('part2');;
			});

		// part 3 button
		this.buttonPart3 = this.add.text(canvasW / 2, 800, 'PART 3: PARTICLES', DEFS.MENU_STYLE)
			.setOrigin(0.5)
			.setInteractive()
			.on('pointerdown', () => {
				this.scene.start('part3');;
			});

		// toggle fullscreen buttom
		this.buttonToggleFullscreen = this.add.text(canvasW - 10, canvasH - 10, 'TOGGLE\nFULLSCREEN', DEFS.MENU_STYLE)
			.setFontSize('32px')
			.setOrigin(1, 1)
			.setInteractive()
			.on('pointerdown', () => {
				this.scale.toggleFullscreen();
			});

		
		this.layoutMenu();

		this.scale.on('resize', this.layoutMenu, this);
		
	}

	layoutMenu() {

		let canvasW = this.sys.game.canvas.width;
		let canvasH = this.sys.game.canvas.height;

		this.buttonPart1.y = Math.min(400, 2 * canvasH / 5);
		this.buttonPart2.y = Math.min(600, 3 * canvasH / 5);
		this.buttonPart3.y = Math.min(800, 4 * canvasH / 5);

		this.buttonToggleFullscreen.x = 4 * canvasW / 5;
		this.buttonToggleFullscreen.y = canvasH - 10;
	}
	
}