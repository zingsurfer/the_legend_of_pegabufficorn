var config = {
    width: 800,
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
    },
    type: Phaser.AUTO
};

var game = new Phaser.Game(config);

function preload () {
  this.load.image('sky', 'assets/sky.png');
  this.load.image('pegabufficorn', 'assets/pegabufficorn.png');
}

function create () {
  this.add.image(400, 350, 'sky');
  var platforms = this.physics.add.staticGroup();

  var pegabufficorn = this.physics.add.sprite(400, 0, 'pegabufficorn');
  pegabufficorn.setBounce(0.2);
  pegabufficorn.setCollideWorldBounds(true);

  this.physics.add.collider(pegabufficorn, platforms);
}
