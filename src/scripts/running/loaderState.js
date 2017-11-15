/**
 * Created by RongMine on 2017/11/2.
 */
//加载游戏资源
let loaderState = function (game) {
    var progressText;//加载进度
    this.init = function () {
        this.loading = game.add.sprite(game.world.centerX,game.world.centerY,'loading');
        this.loading.anchor  = {x:0.5,y:0.5};
        this.loading.animations.add('doLoad',[0,1,2,3,4,5,6,7,8,9]);
        this.loading.animations.play('doLoad',10,true,true);

        progressText = game.add.text(game.world.centerX, game.world.centerY + 30, '0%', {
            fill: '#fff',
            fontSize: '24px'
        });
        progressText.anchor = {x: 0.5, y: 0.5};
    };
    this.preload = function () {
        game.load.image('bg', process.env.PUBLIC_URL + '/running/bg.jpg');
        game.load.spritesheet('bird',process.env.PUBLIC_URL + '/bird_new.png',497,450);
        game.load.onFileComplete.add(function (progress) {
            progressText.text = progress + '%';
        })
    };
    this.update = function() {

    }
    this.create = function () {
        game.state.start('start');
    }
};

export default loaderState;