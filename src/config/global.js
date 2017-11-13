/**
 * Created by RongMine on 2017/4/26.
 */
//存放全局数据及配置
import Storage from './storage';
import $ from 'jquery';
import moment from 'moment';

// development/production
//配置
let env = 'production';
let config = {
    development: {
        //http://app.izaopiao.com/
        base_path: 'https://test.izaopiao.com/'
        //base_path:'https://app.izaopiao.com/'
    },
    production: {
        base_path: 'https://app.izaopiao.com/'
    }
};
//数据
let data = {};

//工具
let tool = {
    sendNode: (params) => {
        var u = navigator.userAgent;
        if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {
            window.makeTicketsCallBack.setValue(JSON.stringify(params))
        } else if (u.indexOf('iPhone') > -1) {
            window.webkit.messageHandlers.makeTicketsCallBack.postMessage({body: params});
        }
    },
    //验证不是空字符串
    validString: (string) => {
        string = string || "";
        return $.trim(string).length > 0;
    },
    dateFormat: {
        getDate: (str) => {
            return moment(str).format("YYYY-MM-DD");
        },
        getTime: (str) => {
            return moment(str).format("HH:mm");
        },
        getDateTime: (str) => {
            return moment(str).format("YYYY-MM-DD HH:mm");
        }
    },
    /*
     * value 搜索的值
     * attr 搜索的属性名称
     * list 搜索对象的数组*/
    getItemByAttr: (value, list, attr) => {
        let temp = list.filter((item) => {
            return item[attr || 'id'] && item[attr || 'id'] == value;
        });
        if (temp.length > 0) return temp[0];
        return -1;
    },
    //微信验证配置
    validWX: (config, callback) => {
        window.wx.config({
            debug: false,
            appId: 'wxd2ee142b232b5701', // 必填，公众号的唯一标识
            timestamp: config.timestamp, // 必填，生成签名的时间戳
            nonceStr: config.nonceStr, // 必填，生成签名的随机串
            signature: config.signature,// 必填，签名，见附录1
            jsApiList: [
                'onMenuShareTimeline',
                'onMenuShareAppMessage',
                'onMenuShareQQ',
                'onMenuShareWeibo',
                'onMenuShareQZone',
                'showAllNonBaseMenuItem'
            ]
        });
        window.wx.error(function (res) {
            //console.log('配置失败');
        });
        window.wx.ready(function () {
            //console.log('ready');
            if (callback) callback();
        });
    },
    //微信分享
    //朋友圈
    wxListenShareCircle: (title, link, imgUrl) => {
        window.wx.onMenuShareTimeline({
            title: title || '造票,你造吗？', // 分享标题
            link: link || 'https://h5.izaopiao.com/game/newspaperBefore', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            imgUrl: imgUrl,// 分享图标
            success: function () {},
            cancel: function () {}
        });
    },
    //好友
    wxListenSharePerson: (title, desc, link, imgUrl) => {
        window.wx.onMenuShareAppMessage({
            title: title, // 分享标题
            desc: desc, // 分享描述
            link: link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            imgUrl: imgUrl, // 分享图标
            //type: '', // 分享类型,music、video或link，不填默认为link
            //dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
            success: function () {},
            cancel: function () {}
        });
    },
    //QQ
    wxListenShareQQ: (title, desc, link, imgUrl) => {
        window.wx.onMenuShareQQ({
            title: title, // 分享标题
            desc: desc, // 分享描述
            link: link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            imgUrl: imgUrl, // 分享图标
            success: function () {},
            cancel: function () {}
        });
    },
    //QQ空间
    wxListenShareQZone: (title, desc, link, imgUrl) => {
        window.wx.onMenuShareQZone({
            title: title, // 分享标题
            desc: desc, // 分享描述
            link: link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            imgUrl: imgUrl, // 分享图标
            success: function () {},
            cancel: function () {}
        });
    },
    //腾讯微博
    wxListenShareWeibo: (title, desc, link, imgUrl) => {
        window.wx.onMenuShareWeibo({
            title: title, // 分享标题
            desc: desc, // 分享描述
            link: link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            imgUrl: imgUrl, // 分享图标
            success: function () {},
            cancel: function () {}
        });
    }

}


window.Config = Object.assign({}, config[env]);
window.Data = Object.assign({}, data);
window.Tool = Object.assign({}, tool);
window.Storage = Storage;