class Boot extends Phaser.State {
    preload() {
    }
    create() {
        // Set Phaser constants
        this.game.stage.backgroundColor = "#5bd3ff";
        this.game.scale.pageAlignHorizontally = true;
        this.game.scale.pageAlignVertically = true;
        // Start physics system
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        // Start load state
        this.game.state.start('Load');
    }
}