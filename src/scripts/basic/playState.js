/**
 * Created by RongMine on 2017/11/7.
 */
let playState = function (game) {
    this.gameSpeed = 400;
    this.score = 0;

    this.init = function () {
        this.score = 0;
        //创建游戏背景
        this.bg = game.add.tileSprite(0, 0, game.width, game.height, 'bg');

        //管道
        this.pipeGroup = game.add.group();
        this.pipeGroup.enableBody = true;
        this.createPipe = function (gap) {
            gap = gap || 100;
            var topPipeY = 100 + (game.height - 281) / 2 * Math.random() - 820; //上方管道的位置
            var bottomPipeY = game.height - 281 - Math.abs(topPipeY) + gap; //下方管道的位置

            var topPipe = game.add.sprite(game.width, topPipeY, 'pipe', 1, this.pipeGroup); //上方的管道
            var bottomPipe = game.add.sprite(game.width, bottomPipeY, 'pipe', 0, this.pipeGroup); //下方的管道
            this.pipeGroup.setAll('checkWorldBounds', true); //边界检测
            this.pipeGroup.setAll('outOfBoundsKill', true); //出边界后自动kill
            this.pipeGroup.setAll('body.velocity.x', -this.gameSpeed); //设置管道运动的速度
        };

        //鸟初始化
        this.bird = game.add.sprite(game.world.centerX, game.world.centerY, 'bird');
        this.bird.anchor = {x: 0.5, y: 0.5};
        this.bird.animations.add('fly', [1, 0, 2]);
        this.bird.scale = new window.Phaser.Point(0.3, 0.3);
        game.physics.enable(this.bird, window.Phaser.Physics.ARCADE);
        this.bird.startFly = () => {
            this.bird.animations.play('fly', 10, true, true);
            this.bird.body.gravity.y = 1150;
        };
        this.bird.endFly = () => {
            this.bird.alive = false;
            this.bird.animations.stop('fly');
        };

        //地面初始化
        this.ground = game.add.tileSprite(0, game.height - 281, game.width, 281, 'ground'); //地板
        game.physics.enable(this.ground, window.Phaser.Physics.ARCADE);
        this.ground.body.immovable = true;

        //
        this.scoreText = game.add.text(game.world.centerX,100,this.score,{
            fill:'#fff',
            fontSize:'48px'
        });
        this.scoreText.anchor = {x:0.5,y:0.5};

        this.checkScore = function(pipe){//负责分数的检测和更新,pipe表示待检测的管道
            //pipe.hasScored 属性用来标识该管道是否已经得过分
            //pipe.y<0是指一组管道中的上面那个管道，一组管道中我们只需要检测一个就行了
            //当管道的x坐标 加上管道的宽度小于鸟的x坐标的时候，就表示已经飞过了管道，可以得分了
            if(!pipe.hasScored && pipe.y<=0 && pipe.x<=this.bird.x-17-54){
                this.score++;
                pipe.hasScored = true;
                this.scoreText.text = this.score; //更新分数的显示
                //this.soundScore.play(); //得分的音效
                return true;
            }
            return false;
        };

        //事件绑定
        var input = game.input; //当前游戏的input对象
        var signal = input.onDown; //鼠标按下时的 Signal对象
        signal.add(() => {
            if(!this.bird.alive) return;
            this.game.add.tween(this.bird).to({angle: -20}, 100).start();
            this.bird.body.velocity.y = -350;
        }); //给Signal 绑定事件处理函数

        this.showEnd = () => {
            var scoreBg = game.add.image(game.world.centerX, game.world.centerY, 'scoreBg');
            scoreBg.anchor = {x:0.5,y:0.5};
            scoreBg.width = 400;
            scoreBg.height = 400;
            var btn = game.add.button(game.world.centerX,game.world.centerY+100,'restart',() => {
                game.state.restart('play');
            });
            btn.anchor.setTo(0.5,0.5);
            btn.width = 100;
            btn.height = 100;

            var text = game.add.text(game.world.centerX,game.world.centerY-108,this.score,{
                fill:'#ffcc00',
                fontSize:'48px'
            });
            text.anchor = {x:0,y:0.5};
        };

        this.beginGame = () => {
            this.bg.autoScroll(-this.gameSpeed, 0);//背景动画
            this.ground.autoScroll(-this.gameSpeed, 0);//地面动画
            this.bird.startFly();//开始飞行
            this.timer = game.time.events.loop(3600, this.createPipe, this);//时间事件创建管道
        };
        this.endGame = () => {
            this.bg.stopScroll();
            this.ground.stopScroll();
            this.bird.endFly();
            this.pipeGroup.setAll('body.velocity.x', 0);
            this.game.time.events.remove(this.timer);
            this.showEnd();
        };
        this.beginGame();
    };
    this.update = function () { //每一帧中都要执行的代码可以写在update方法中
        if (this.bird.angle < 20)
            this.bird.angle += 1;
        game.physics.arcade.collide(this.bird, this.ground, () => 1, null, this); //检测与地面的碰撞
        game.physics.arcade.overlap(this.bird, this.pipeGroup, this.endGame, null, this);
        this.pipeGroup.forEachExists(this.checkScore,this);
    };
    this.create = function () {

    }
};

export default playState;