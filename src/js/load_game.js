class LoadGame extends Phaser.State {
    init(player1Win, player2Win) {
        // Set win/loss variables passed from microgame
        this.player1Win = player1Win;
        this.player2Win = player2Win;
    }
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
        // Create player score text and tweens
        var player1ScoreText = this.game.add.text(this.game.world.width / 3 + 10, this.game.world.height / 6 + 240, this.game.player1Score);
        player1ScoreText.anchor.setTo(0.5, 0.5);
        player1ScoreText.fontSize = 60;
        var player2ScoreText = this.game.add.text(this.game.world.width / 3 * 2 + 10, this.game.world.height / 6 + 240, this.game.player2Score);
        player2ScoreText.anchor.setTo(0.5, 0.5);
        player2ScoreText.fontSize = 60;
        var player1ScoreTweenGrow = this.game.add.tween(player1ScoreText);
        player1ScoreTweenGrow.to({fontSize: 150}, 1000, Phaser.Easing.Circular.Out);
        var player1ScoreTweenShrink = this.game.add.tween(player1ScoreText);
        player1ScoreTweenShrink.to({fontSize: 60}, 1000, Phaser.Easing.Circular.Out);
        var player2ScoreTweenGrow = this.game.add.tween(player2ScoreText);
        player2ScoreTweenGrow.to({fontSize: 150}, 1000, Phaser.Easing.Circular.Out);
        var player2ScoreTweenShrink = this.game.add.tween(player2ScoreText);
        player2ScoreTweenShrink.to({fontSize: 60}, 1000, Phaser.Easing.Circular.Out);
        if (this.player1Win) {
            this.game.player1Score++;
            player1ScoreTweenGrow.start();
            setTimeout(function() {
                player1ScoreText.text = this.game.player1Score;
                setTimeout(function() {
                    player1ScoreTweenShrink.start();
                }, 500);
            }.bind(this), player1ScoreTweenGrow.totalDuration);
        }
        if (this.player2Win) {
            this.game.player2Score++;
            player2ScoreTweenGrow.start();
            setTimeout(function() {
                player2ScoreText.text = this.game.player2Score;
                setTimeout(function() {
                    player2ScoreTweenShrink.start();
                }, 500);
            }.bind(this), player2ScoreTweenGrow.totalDuration);
        }
        var scoreDash = this.game.add.text(this.game.world.width / 2 + 10, this.game.world.height / 2 + 75, '—');
        scoreDash.anchor.setTo(0.5, 0.5);
        scoreDash.fontSize = 60;
        var startGameTimer = this.game.time.create();
        startGameTimer.add(4000, this.startBalloonMash, this);
        startGameTimer.start();
    }
    startBalloonMash() {
        // Start balloon mash state
        this.game.state.start('BalloonMash');
    }
}