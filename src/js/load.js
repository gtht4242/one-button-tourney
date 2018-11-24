class Load extends Phaser.State {
    preload() {
        // Load spritesheets
        this.game.load.path = 'src/';
        this.game.load.atlasJSONHash('spritesheet', 'images/spritesheet.png', 'json/sprites.json');
    }
    create() {
        // Start menu state
        this.game.state.start('Menu');
    }
}