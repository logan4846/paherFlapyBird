/**
 * Created by RongMine on 2017/8/3.
 */
import React, { Component } from 'react';
import {Flex, NavBar, Icon } from 'antd-mobile';
import bg1 from '../../images/1.jpg';
import bg2 from '../../images/2.jpg';
import bg3 from '../../images/3.jpg';
import bg4 from '../../images/4.jpg';
import $ from 'jquery';

class TestCss3 extends Component {

    componentDidMount() {
        $(".part1").addClass("doAnimated");
        setTimeout(()=> {
            $(".part2").addClass("doAnimated");
        }, 2000);
        setTimeout(()=> {
            $(".part3").addClass("doAnimated");
        }, 4000);
    }

    render() {
        return (
            <div className="testCss3">
                <Flex className="content" direction="column" justify="center" align="center">
                    <img className="part1" src={bg1} alt=""/>
                    <img className="part2" src={bg2} alt=""/>
                    <img className="part3" src={bg3} alt=""/>
                    <img className="part4" src={bg4} alt=""/>
                </Flex>
                <button onClick={() => window.Tool.sendNode({type: 'random'})}>活动抽取</button>
                <br/>
                <button onClick={() => window.Tool.sendNode({type: 'task'})}>我的任务</button>
                <br/>
                <button onClick={() => window.Tool.sendNode({
                type: 'news',
                newsType:'onePhoto',
                title:'摇滚老炮长江聚首 伍佰郑钧动力火车磅礴来袭',
                coverArray:'',
                newsId:23,
                videoUrl:''
                })}>测试资讯一张图
                </button>
                <br/>
                <button onClick={() => window.Tool.sendNode({
                type: 'news',
                newsType:'threePhoto',
                title:'容祖儿签名会讲述迪拜之旅',
                coverArray:'',
                newsId:22,
                videoUrl:''
                })}>测试资讯三张图
                </button>
                <br/>
                <button onClick={() => window.Tool.sendNode({
                type: 'news',
                newsType:'video',
                title:'2017张杰巡回演唱会长沙站《你在哪里》勾起回忆！',
                coverArray:'https://maketicketsimagebucket.oss-cn-shenzhen.aliyuncs.com/venueSeating1505208626048zhangjie.jpg',
                newsId:48,
                videoUrl:'https://maketicketsimagebucket.oss-cn-shenzhen.aliyuncs.com/venueSeating1505208655492y05464h1g6q.p712.1.mp4'
                })}>测试资讯视频
                </button>
            </div>
        );
    }
}

export default TestCss3;