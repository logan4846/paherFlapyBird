/**
 * Created by RongMine on 2017/4/26.
 */
//封装异步请求
import './global';
import axios from  'axios';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import qs from 'qs';
import {Toast} from 'antd-mobile'

export default class Http {
    static get instance() {
        let instance =  axios.create({
            baseURL: `${window.Config.base_path}`,
            timeout: 12000
        });
        instance.interceptors.request.use(function (config) {
            NProgress.configure({showSpinner:false});
            NProgress.start();
            return config;
        }, function (error) {
            NProgress.done();
            Toast.fail('网络连接异常');
            return Promise.reject(error);
        });
        instance.interceptors.response.use(function (response) {
            NProgress.done();
            //统一显示错误消息
            if(response.data.status === 6001){
                Toast.fail(response.data.message);
            }
            else if(response.data.status === 6002){
                Toast.fail(response.data.message);
            }
            return response.data;
        }, function (error) {
            NProgress.done();
            Toast.fail('网络连接异常');
            return Promise.reject(error);
        });
        return instance;
    }

    static get() {
        return Http.instance.get(...arguments);
    }

    static post(url,data,...rest){
        return Http.instance.post(url,qs.stringify(data),rest);
    }

    static put(url,data,...rest){
        return Http.instance.put(url,qs.stringify(data),rest);
    }

    static delete(url,data,...rest){
        return Http.instance.put(url,qs.stringify(data),rest);
    }
}
