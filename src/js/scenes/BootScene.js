
/**
 * loading screen
 */

class BootScene extends Phaser.Scene {

	constructor() {
		super({
			key: 'boot'
		});
	}
	
	create() {

		console.log('SoftGames Test v ' + DEFS.VERSION);

		this.scene.start('menu');
		
	}
	
}