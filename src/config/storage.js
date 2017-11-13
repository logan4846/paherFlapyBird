/**
 * Created by RongMine on 2017/4/26.
 */
//缓存封装
export default class Storage {
    static set(name,value){
        sessionStorage.setItem(name,value);
    }

    static get(name){
        return sessionStorage.getItem(name);
    }

    static getParse(name){
      return JSON.parse(sessionStorage.getItem(name));
    }

    static remove(name){
        sessionStorage.removeItem(name);
    }

    static clear(name){
        sessionStorage.clear();
    }
}

