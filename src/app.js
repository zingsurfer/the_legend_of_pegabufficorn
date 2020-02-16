var config = {
    width: 800,
    type: Phaser.AUTO,
    height: 700,
    physics: {
      default: 'arcade',
      arcade: {
        gravity: { y: 300 },
        debug: false
      }
    },
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
