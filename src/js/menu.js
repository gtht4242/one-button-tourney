class Menu extends Phaser.State {
    create() {
        // Create title text
        var titleText = this.game.add.text(this.game.world.width / 2, this.game.world.height / 4, 'One Button Tourney');
        titleText.anchor.setTo(0.5, 0.5);
        titleText.fontSize = 60;
        // Create player key text
        this.player1Text = this.game.add.text(this.game.world.width / 3, this.game.world.height / 3 * 2, '');
        this.player1Text.anchor.setTo(0.5, 0.5);
        this.player1Text.fontSize = 60;
        this.player2Text = this.game.add.text(this.game.world.width / 3 * 2, this.game.world.height / 3 * 2, '');
        this.player2Text.anchor.setTo(0.5, 0.5);
        this.player2Text.fontSize = 60;
        // Create player number text
        var player1Number = this.game.add.text(this.game.world.width / 3 - 35, this.game.world.height / 3 * 2 - 120, 'P1');
        player1Number.fontSize = 60;
        player1Number.fill = '#0400ff'
        var player2Number = this.game.add.text(this.game.world.width / 3 * 2 - 35, this.game.world.height / 3 * 2 - 120, 'P2');
        player2Number.fontSize = 60;
        player2Number.fill = '#ff0000'
        // Create player box graphics
        var graphics = this.game.add.graphics(0, 0);
        graphics.lineStyle(5, 0x0400ff, 1);    
        graphics.drawRect(this.game.world.width / 3 - 50, this.game.world.height / 3 * 2 - 50, 100, 100);
        graphics.lineStyle(5, 0xff0000, 1);    
        graphics.drawRect(this.game.world.width / 3 * 2 - 50, this.game.world.height / 3 * 2 - 50, 100, 100);
        // Set key press callback
        this.game.input.keyboard.callbackContext = this;
        this.game.input.keyboard.onPressCallback = this.setPlayerText;
        var escKey = this.game.input.keyboard.addKey(Phaser.Keyboard.ESC);
        escKey.onDown.add(this.clearPlayerText, this);
    }
    setPlayerText(string, event) {
        // Set player 1 and 2 keys
        // Exclude space and enter keys
        if (event.charCode !== 32 && event.charCode !== 13) {
            string = string.toUpperCase();
            if (this.player1Text.text === '') {
                this.player1Text.text = string;
            } else if (this.player2Text.text === '' && this.player1Text.text !== string) {
                this.player2Text.text = string;
            }
        }
    }
    clearPlayerText() {
        // Clear all player characters
        this.player1Text.text = '';
        this.player2Text.text = '';
    }
}