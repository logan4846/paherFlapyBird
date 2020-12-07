/**
 * Created by RongMine on 2017/11/6.
 */
let startState = function(game){
    this.init = function(){
        //创建游戏背景
        game.add.tileSprite(0,0,game.width,game.height,'bg').autoScroll(-100,0);

        //
        var title = game.add.text(game.world.centerX,200,'Phaser Demo logan',{
            fill:'#fff',
            fontSize:'48px'
        });
        title.anchor = {x:0.5,y:0.5};

        console.log(game.width);
        console.log(game.world.width);

        //游戏居中与缩放
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically = true;
        game.scale.scaleMode = window.Phaser.ScaleManager.EXACT_FIT;

        //地面的动画
        game.add.tileSprite(0,game.height-281,game.width,281,'ground').autoScroll(-100,0); //地板

        //鸟的动画
        var bird = game.add.sprite(game.world.centerX,game.world.centerY,'bird');
        bird.anchor  = {x:0.5,y:0.5};
        bird.scale = new window.Phaser.Point(0.3, 0.3);
        bird.animations.add('fly',[0,1,2]);
        bird.animations.play('fly',10,true,true);

        //添加开始按钮
        var btn = game.add.button(game.world.centerX,game.height/2+200,'start',function(){
           game.state.start('play');
        });
        btn.anchor.setTo(0.5,0.5);
        btn.width = 100;
        btn.height = 100;

        //粒子发射器
        //var emitter = game.add.emitter(game.world.centerX,10,50);
        //emitter.makeParticles('bird',0);
        //emitter.setYSpeed(500,1000);
        //emitter.start(false,3000,1000,50);
    };
    this.create = function(){

    }
};

export default startState;
