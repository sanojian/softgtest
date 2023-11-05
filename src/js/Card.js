

class Card extends Phaser.GameObjects.Sprite {

	constructor(scene, x, y, index, value, suit) {
	

		const textureName = 'cardGraphic' + index;

		if (!scene.textures.exists(textureName)) {
			// create card texture
			const gfx = scene.make.graphics({ x: 0, y: 0, add: false });

			gfx.lineStyle(2, 0x333333, 1.0);
			gfx.fillStyle(0xeeeeee, 1.0);
			gfx.fillRect(0, 0, 140, 200);
			gfx.strokeRect(1, 1, 138, 198);

			let style = {
				font: "16px DINCondensed-Bold",
				align: "center",
				fill: "#333"
			};
			const cardText1 = scene.add.text(6, 6, value + '\n' + suit, style)
				.setOrigin(0);
			const cardText2 = scene.add.text(134, 194, value + '\n' + suit, style)
				.setOrigin(1)
				.setFlipX(true)
				.setFlipY(true);
			style.font = "64px DINCondensed-Bold";
			const cardText3 = scene.add.text(70, 100, suit, style)
				.setOrigin(0.5);
			let renderTexture = scene.add.renderTexture(0, 0, 140, 200);
			
			renderTexture.draw(gfx);
			renderTexture.draw(cardText1);
			renderTexture.draw(cardText2);
			renderTexture.draw(cardText3);
			renderTexture.saveTexture(textureName);

			gfx.destroy();
			cardText1.destroy();
			cardText2.destroy();
			cardText3.destroy();
			renderTexture.destroy();
		}
		
		super(scene, x, y, textureName);

		scene.add.existing(this);

	}

	createRenderTexture(index, value, suit) {

	}

}