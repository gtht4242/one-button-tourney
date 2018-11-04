class Boot extends Phaser.State {
    preload() {
    }
    create() {
        // Set Phaser constants
        this.game.scale.pageAlignHorizontally = true;
        this.game.scale.pageAlignVertically = true;
        // Start physics system
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
    }
}