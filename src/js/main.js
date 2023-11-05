function initGame() {

	
	var config = {
		type: Phaser.AUTO,
		scene: [BootScene, MenuScene, Part1Scene, Part2Scene, Part3Scene],
		scale: {
			mode: Phaser.Scale.ENVELOP,
			autoCenter: Phaser.Scale.CENTER_BOTH,
			width: 1366,
			height: 768,
		}		
	};
	
	GLOBAL.phaserGame = new Phaser.Game(config);

	console.log("Game initialized");
}




