/**
 * Created by RongMine on 2017/11/6.
 */
let startState = function (game) {
    this.init = function () {
        //创建游戏背景
        game.world.setBounds(0,0,5500, 3100);
        this.bg = game.add.image(0, 0, 'bg');
        this.bird = game.add.sprite(game.world.centerX, game.world.centerY, 'bird');
        this.bird.anchor = {x: 0.5, y: 0.5};
        this.bird.animations.add('fly', [1, 0, 2]);
        this.bird.scale = new window.Phaser.Point(0.3, 0.3);
        this.bird.animations.play('fly', 10, true, true);

    };
    this.update = function () {
        this.bird.x += 10;
    }
    this.create = function () {
        game.camera.x = 100;
        game.camera.y = 100;
        game.camera.focusOn(this.bird);
        game.camera.follow(this.bird);
    }
};

export default startState;