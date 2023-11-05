
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


	}
	
	create() {

		console.log('SoftGames Test v ' + DEFS.VERSION);

		this.scene.start('part3');

	}
	
}