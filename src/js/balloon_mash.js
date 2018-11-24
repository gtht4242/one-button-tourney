class BalloonMash extends Microgame {
    // 1 - Balloon Mash
    // Mash the button to pop the balloon
    create() {
        this.createBars();
        this.player1Key = this.game.input.keyboard.addKey(this.game.player1Key);
        this.player1Key.onDown.add(this.incrementBalloon1, this);
        this.player2Key = this.game.input.keyboard.addKey(this.game.player2Key);
        this.player2Key.onDown.add(this.incrementBalloon2, this);
        this.player1Balloon = this.game.add.sprite(this.game.world.width / 4, this.game.world.height / 2, 'spritesheet', '1_balloonb_1');
        this.player1Balloon.anchor.setTo(0.5, 0.5);
        this.player2Balloon = this.game.add.sprite(this.game.world.width / 4 * 3, this.game.world.height / 2, 'spritesheet', '1_balloonr_1');
        this.player2Balloon.anchor.setTo(0.5, 0.5);
        this.player1BalloonCount = 0;
        this.player2BalloonCount = 0;
        this.displayHintText('Pop the balloon!');
    }
    incrementBalloon1() {
        // Increment the player 1 balloon count and check for pop
        this.player1BalloonCount++;
        if (this.player1BalloonCount % 2 === 0) {
            this.player1Balloon.loadTexture('spritesheet', '1_balloonb_' + (this.player1BalloonCount / 2));
        }
        if (this.player1BalloonCount >= 30) {
            this.player1Key.reset();
            this.player2Key.reset();
            this.game.player1Score++;
            window.setTimeout(this.startLoadGame.bind(this), 2000);
        }
    }
    incrementBalloon2() {
        // Increment the player 2 balloon count and check for pop
        this.player2BalloonCount++;
        if (this.player2BalloonCount % 2 === 0) {
            this.player2Balloon.loadTexture('spritesheet', '1_balloonr_' + (this.player2BalloonCount / 2));
        }
        if (this.player2BalloonCount >= 30) {
            this.player1Key.reset();
            this.player2Key.reset();
            this.game.player2Score++;
            window.setTimeout(this.startLoadGame.bind(this), 2000);
        }
    }
}