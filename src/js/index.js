class Game extends Phaser.Game {
    constructor() {
        super(640, 480, Phaser.AUTO, "game");
        this.state.add('Boot', Boot);
        this.state.add('Load', Load);
        this.state.add('Menu', Menu);
        this.state.add('LoadGame', LoadGame);
        this.state.add('BalloonMash', BalloonMash);
        this.state.start('Boot');
    }
}
new Game();