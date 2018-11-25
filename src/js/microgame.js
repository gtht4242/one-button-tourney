class Microgame extends Phaser.State {
    // Includes common functions used by all microgame states
    startLoadGame(player1Win, player2Win) {
        // Start load game state and pass win/loss data
        this.game.state.start('LoadGame', true, false, player1Win, player2Win);
    }
    addOnDown(player1Key, player2Key, callback, context) {
        // Add onDown callback to all player keys
        var player1Key = this.game.input.keyboard.addKey(player1Key);
        player1Key.onDown.add(callback, context);
        var player2Key = this.game.input.keyboard.addKey(player2Key);
        player2Key.onDown.add(callback, context);
    }
    startTimeLimit(seconds) {
        // Start microgame time limit
        var graphics = this.game.add.graphics(0, 0);
        graphics.lineStyle(1, 0xffff8c, 1);
        graphics.beginFill(0xffff8c, 1);
        graphics.drawRect(0, 0, this.game.world.width, 40);
        var graphicsTexture = graphics.generateTexture();
        graphics.destroy();
        this.timeBar = this.game.add.sprite(0, 0, graphicsTexture);
        this.timeTween = this.game.add.tween(this.timeBar);
        this.timeTween.to({width: 0}, seconds * 1000);
        this.timerCallback = this.game.time.create();
        this.timerCallback.add(seconds * 1000, this.startLoadGame, this);
        this.timerCallback.start();
        this.timeTween.start();
    }
    stopTimeLimit() {
        // Stop the microgame time limit
        this.timerCallback.destroy();
        this.timeTween.stop();
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
        setTimeout(function() {hintTween.start();}, 2000);
    }
}