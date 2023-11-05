function initGame() {

	
	var config = {
		type: Phaser.AUTO,
		scene: [BootScene, MenuScene, Part1Scene, Part2Scene, Part3Scene],
		scale: {
			mode: Phaser.Scale.FIT,
			autoCenter: Phaser.Scale.CENTER_BOTH,
			width: 768,
			height: 1366
		}		
	};
	
	GLOBAL.phaserGame = new Phaser.Game(config);

	console.log("Game initialized");
}




