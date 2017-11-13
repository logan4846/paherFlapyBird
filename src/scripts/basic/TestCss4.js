/**
 * Created by RongMine on 2017/8/4.
 */
import React, { Component } from 'react';
import {Flex, NavBar, Icon } from 'antd-mobile';
import bg1 from '../../images/1.jpg';
import bg2 from '../../images/2.jpg';
import bg3 from '../../images/3.jpg';
import bg4 from '../../images/4.jpg';
import $ from 'jquery';

class TestCss4 extends Component {

    componentDidMount(){
       setTimeout(() => {
           $(".part2").addClass("ani");
           $(".imgContainer").addClass("ani");
       },1000)
    }

    render() {
        return (
            <div className="testCss4">
                <Flex className="content" direction="column" justify="center" align="center">
                    <div className="flipArea">
                        <img className="part1" src={bg1} alt=""/>
                        <div className="imgContainer">
                            <img className="part2" src={bg3} alt=""/>
                            <img className="part3" src={bg2} alt=""/>
                        </div>
                        <div className="shadowDiv"></div>
                    </div>
                </Flex>
            </div>
        );
    }
}

export default TestCss4;