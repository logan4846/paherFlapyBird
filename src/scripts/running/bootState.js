/**
 * Created by RongMine on 2017/11/2.
 */

    //加载最开始的资源
let bootState = function(game){
    this.preload = function(){
        game.load.image('loading',process.env.PUBLIC_URL + '/loading.gif');
    }
    this.create = function(){
        game.state.start('loader');
    }
};

export default bootState;