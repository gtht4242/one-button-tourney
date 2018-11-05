class Load extends Phaser.State {
    preload() {
    }
    create() {
        // Start menu state
        this.game.state.start('Menu');
    }
}