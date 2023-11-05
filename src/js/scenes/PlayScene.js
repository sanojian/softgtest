/*
 * play screen
 */

class PlayScene extends Phaser.Scene {

	constructor() {
		super({
			key: 'play'
		});
	}

	preload() {


	}
	
	create() {

		console.log('Game started');

		const gfx = this.make.graphics({x: 0, y: 0, add: false});

		gfx.lineStyle(6, 0xffffff, 1.0);
		gfx.strokeRect(0, 0, 140, 200);

		//gfx.generateTexture('cardGraphic', 100, 200);
		let style = {
			font: "24px DINCondensed-Bold",
			align: "center",
			fill: "#fff"
		};
		const cardText1 = this.add.text(10, 10, '9\n♥️', style)
			.setOrigin(0);
		const cardText2 = this.add.text(130, 190, '9\n♥️', style)
			.setOrigin(1)
			.setFlipX(true)
			.setFlipY(true);
		style.font = "32px DINCondensed-Bold";
		const cardText3 = this.add.text(70, 100, '♥️', style)
			.setOrigin(0.5);
		let renderTexture = this.add.renderTexture(0, 0, 140, 200);
		
		renderTexture.draw(gfx);
		renderTexture.draw(cardText1);
		renderTexture.draw(cardText2);
		renderTexture.draw(cardText3);
		renderTexture.saveTexture('cardGraphic');

		gfx.destroy();
		cardText1.destroy();
		cardText2.destroy();
		cardText3.destroy();
		renderTexture.destroy();

		const image = this.add.image(200, 200, 'cardGraphic');
	}
	
}