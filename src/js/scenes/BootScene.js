
/**
 * loading screen
 */

class BootScene extends Phaser.Scene {

	constructor() {
		super({
			key: 'boot'
		});
	}
	
	preload() {

		this.load.image('playButton', 'gfx/playButton.png');
	}

	create() {

		console.log('SoftGames Test v ' + DEFS.VERSION);

		this.add.image(this.sys.game.canvas.width / 2, this.sys.game.canvas.height / 2, 'playButton')
			.setInteractive()
			.on('pointerdown', () => {
				this.scale.toggleFullscreen();
				this.scene.start('menu');
			});

		
	}
	
}