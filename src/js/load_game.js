class LoadGame extends Phaser.State {
    create() {
        // Create player number text
        var player1Number = this.game.add.text(this.game.world.width / 3 - 35, this.game.world.height / 6, 'P1');
        player1Number.fontSize = 60;
        player1Number.fill = '#0400ff'
        var player2Number = this.game.add.text(this.game.world.width / 3 * 2 - 35, this.game.world.height / 6, 'P2');
        player2Number.fontSize = 60;
        player2Number.fill = '#ff0000'
        // Create player character text
        var player1Character = this.game.add.text(this.game.world.width / 3 - 15, this.game.world.height / 6 + 75, String.fromCharCode(this.game.player1Key).toUpperCase());
        player1Character.fontSize = 60;
        player1Character.fill = '#0400ff'
        var player2Character = this.game.add.text(this.game.world.width / 3 * 2 - 15, this.game.world.height / 6 + 75, String.fromCharCode(this.game.player2Key).toUpperCase());
        player2Character.fontSize = 60;
        player2Character.fill = '#ff0000'
        // Create player score text
        var player1Score = this.game.add.text(this.game.world.width / 3 - 10, this.game.world.height / 6 + 200, this.game.player1Score);
        player1Score.fontSize = 60;
        var player2Score = this.game.add.text(this.game.world.width / 3 * 2 - 10, this.game.world.height / 6 + 200, this.game.player2Score);
        player2Score.fontSize = 60;
        var scoreDash = this.game.add.text(this.game.world.width / 2 + 10, this.game.world.height / 2 + 75, '—');
        scoreDash.anchor.setTo(0.5, 0.5);
        scoreDash.fontSize = 60;
        setTimeout(this.startBalloonMash.bind(this), 4000);
    }
    startBalloonMash() {
        // Start balloon mash state
        this.game.state.start('BalloonMash');
    }
}