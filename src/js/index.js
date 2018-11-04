class Game extends Phaser.Game {
    constructor() {
        super(640, 480, Phaser.AUTO, "game");
        this.state.add('Boot', Boot);
        this.state.start('Boot');
    }
}
new Game();