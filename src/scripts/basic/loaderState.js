
/**
 * Created by RongMine on 2017/11/2.
 */
    //加载游戏资源
let loaderState = function(game){
    var progressText;//加载进度
    this.init = function(){
        var sprite = game.add.sprite(game.world.centerX,game.world.centerY,'loading');
        sprite.anchor = {x:0.5,y:0.5};
        progressText = game.add.text(game.world.centerX,game.world.centerY +30,'0%',{fill:'#fff',fontSize:'24px'});
        progressText.anchor = {x:0.5,y:0.5};
    };
    this.preload = function(){
        game.load.spritesheet('pipe',process.env.PUBLIC_URL + 'holdback.png',128,802);
        game.load.spritesheet('bird',process.env.PUBLIC_URL + 'bird_new.png',497,450);
        game.load.image('start',process.env.PUBLIC_URL + 'start.png');
        game.load.image('scoreBg',process.env.PUBLIC_URL + 'scoreTemplate.png');
        game.load.image('restart',process.env.PUBLIC_URL + 'restart.png');
        game.load.image('bg',process.env.PUBLIC_URL + 'bg.png');
        game.load.image('over',process.env.PUBLIC_URL + 'over.png');
        game.load.image('ground',process.env.PUBLIC_URL + 'ground.png');
        game.load.image('holdback',process.env.PUBLIC_URL + 'holdback.png');
        game.load.onFileComplete.add(function(progress){
            progressText.text = progress + '%';
        })
    };
    this.create = function(){
        game.state.start('start');
    }
};

export default loaderState;