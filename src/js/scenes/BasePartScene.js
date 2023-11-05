
/**
 * base class for part scenes
 */

class BasePartScene extends Phaser.Scene {

	constructor(keyObj) {
		super(keyObj);
	}

	preload() {


	}
	
	create() {

		// FPS counter
		this.fpsText = this.add.text(10, 10, '0', DEFS.FPS_STYLE);

		// return button
		this.add.text(this.sys.game.canvas.width / 2, this.sys.game.canvas.height - 100, 'BACK TO MENU', DEFS.MENU_STYLE)
			.setOrigin(0.5)
			.setInteractive()
			.on('pointerdown', () => {
				this.scene.start('menu');;
		});

	}
	

	update() {
		this.fpsText.setText('fps: ' + GLOBAL.phaserGame.loop.actualFps.toFixed(1));
	}

}