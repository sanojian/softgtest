function initGame() {

	
	var config = {
		type: Phaser.AUTO,
		scene: [BootScene, MenuScene, PlayScene],
		scale: {
			mode: Phaser.Scale.FIT,
			autoCenter: Phaser.Scale.CENTER_BOTH,
			width: 640,
			//height: Math.min(1390, Math.max(1146, window.innerHeight)),
			height: Math.max(1146, (640 / window.innerWidth) * window.innerHeight),
			/*min: {
				width: 640,
				height: 1146
			},*/
			/*max: {
				width: 854,
				height: 1390
			},*/
			//maxHeight: 1390,
			//zoom: 0.9
		},
		fps: {
			forceSetTimeOut: false,
			target: 60
		}
		
	};
	
	GLOBAL.phaserGame = new Phaser.Game(config);

	console.log("Game initialized");
}




