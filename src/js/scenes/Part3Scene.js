
/**
 * play screen part 3
 */

class Part3Scene extends BasePartScene {

	constructor() {
		super({
			key: 'part3'
		});
	}

	preload() {

		// load fire particle graphics from Phaser examples
		this.load.atlas('flares', 'gfx/flares.png', 'gfx/flares.json');
	}
	
	create() {

		// draggable text
		const style = {
			font: "48px DINCondensed-Bold",
			align: "center",
			fill: "#eee"
		};
		const text = this.add.text(this.sys.game.canvas.width / 2, this.sys.game.canvas.height / 2 + 100, 'DRAG ME', style)
			.setOrigin(0.5)
			.setInteractive({ draggable: true })
			.on('drag', (pointer, dragX, dragY) => {
				text.setPosition(dragX, dragY);
				fire.setPosition(dragX, dragY - 40);
			});

		// fire particles, max 10 particles
		const fire = this.add.particles(text.x, text.y - 40, 'flares', {
			frame: 'white',
			color: [0xfacc22, 0xf89800, 0xf83600, 0x9f0404],
			colorEase: 'quad.out',
			lifespan: 160,
			angle: { min: -100, max: -80 },
			scale: { start: 1.70, end: 0.5, ease: 'sine.out' },
			speed: 1200,
			advance: 2000,
			maxAliveParticles: 10,
			blendMode: 'ADD'
		});



		super.create();
	}
	


}