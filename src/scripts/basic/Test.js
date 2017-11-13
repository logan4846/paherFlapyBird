/**
 * Created by RongMine on 2017/7/28.
 */
import React, { Component } from 'react';
import { List } from 'antd-mobile';
import html2canvas from 'html2canvas';
import smartcrop from 'smartcrop';
import $ from 'jquery';

import test from '../../images/test.jpg';
import photo from '../../images/1.jpg';
import person from '../../images/111111.jpg';

class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            disabled: false
        }
    }

    convertCanvasToImage(canvas) {
        var image = new Image();
        image.src = canvas.toDataURL("image/png");
        document.getElementById('Root').appendChild(image);
        let triggerDownload = $("#tttt").attr("href", image.src).attr("download", "order-1111111111.png");
    }

    handleLongPress = (e) => {
        html2canvas(document.getElementById('Root')).then((canvas) => {
            this.convertCanvasToImage(canvas);
        })
    };

    //智能裁剪
    smartCrop(){
        smartcrop.crop($("img")[0], {width: 200, height: 200}).then(function(result){
            console.log(result);
            var crop = result.topCrop;
            var canvas = $('#myCanvas')[0];
            var ctx = canvas.getContext('2d');
            canvas.width = 400;
            canvas.height = 400;
            ctx.drawImage($("img")[0], crop.x, crop.y, crop.width, crop.height, 0, 0, canvas.width, canvas.height);
        });
    }

    render() {
        return (<div id="Root">
            <img src={person} style={{width:'100%'}} alt=""/>
            <canvas id="myCanvas" width="200" height="100"></canvas>
            <a id="tttt">下载</a>
            <button onClick={() => this.handleLongPress()}>生成图片</button>
            <button onClick={() => this.smartCrop()}>智能裁剪</button>
            <div style={{position:'relative'}}>
                <img src={test} style={{width:'100%'}} alt=""/>
                <img src={photo} style={{position: 'absolute',zIndex: 2,left: '272px', top: '350px', height:'99px', width:'72px'}} alt=""/>
            </div>
        </div>);
    }
}

export default Test;