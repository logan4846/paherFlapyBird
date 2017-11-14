/**
 * Created by RongMine on 2017/11/13.
 */

import React, { Component } from 'react';
import $ from 'jquery';
import bootState from './bootState';
import loaderState from './loaderState';
import startState from './startState';
import playState from './playState';

class Running extends Component {

    init(){
        console.log("game初始化");
    }

    componentDidMount() {
        this.game = new window.Phaser.Game(750,1334, window.Phaser.AUTO, 'game');
        this.game.state.add('boot',bootState);
        this.game.state.add('loader',loaderState);
        this.game.state.add('start',startState);
        this.game.state.add('play',playState);
        this.game.state.start('boot');
    }


    render() {
        return (
            <div id="game">
            </div>
        );
    }
}

export default Running;