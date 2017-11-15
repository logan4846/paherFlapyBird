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
        base_path: ''
    },
    production: {
        base_path: ''
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
    }
}


window.Config = Object.assign({}, config[env]);
window.Data = Object.assign({}, data);
window.Tool = Object.assign({}, tool);
window.Storage = Storage;