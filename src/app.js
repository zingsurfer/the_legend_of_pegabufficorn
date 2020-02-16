var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 700,
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload () {
  this.load.image('pegabufficorn', 'assets/pegabufficorn.png');
}

function create () {
  this.add.image(350, 350, 'pegabufficorn')
}
