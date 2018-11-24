class Microgame extends Phaser.State {
    // Includes common functions used by all microgame states
    startLoadGame() {
        // Start load game state
        this.game.state.start('LoadGame');
    }
    addOnDown(player1Key, player2Key, callback, context) {
        // Add onDown callback to all player keys
        var player1Key = this.game.input.keyboard.addKey(player1Key);
        player1Key.onDown.add(callback, context);
        var player2Key = this.game.input.keyboard.addKey(player2Key);
        player2Key.onDown.add(callback, context);
    }
    startTimeLimit(seconds, callback, context) {
        // Start timer event for callback
        var timeLimit = this.game.time.create();
        timeLimit.add(seconds * 1000, callback, context);
        timeLimit.start();
    }
    createBars() {
        // Create bar graphic to divide screen areas
        var graphics = this.game.add.graphics(0, 0);
        graphics.lineStyle(3, 0x000000, 1);
        graphics.moveTo(this.game.world.width / 2, 40);
        graphics.lineTo(this.game.world.width / 2, this.game.world.height)
        graphics.moveTo(0, 40);
        graphics.lineTo(this.game.world.width, 40);
    }
    displayHintText(text) {
        // Display hint text for a set amount of time
        var hintText = this.game.add.text(this.game.world.width / 2, this.game.world.height / 2, text);
        hintText.anchor.setTo(0.5, 0.5);
        hintText.fontSize = 60;
        hintText.fill = 'white';
        hintText.stroke = 'black';
        hintText.strokeThickness = 7;
        var hintTween = this.game.add.tween(hintText);
        hintTween.to({x: this.game.world.width / 2, y: 20, fontSize: 30, strokeThickness: 5}, 250, Phaser.Easing.Linear.Out);
        window.setTimeout(function() {hintTween.start();}, 2000);
    }
}