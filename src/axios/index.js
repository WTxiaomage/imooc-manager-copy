import JsonP from 'jsonp'
import axios from 'axios';
import { Promise } from 'q';

export default class Axios {
    static jsonp(options) {
        return new Promise((resolve, reject) => {
            JsonP(options.url, {
                param: 'callback'
            }, function (err, response) {
                if (response.status === 'success') {
                    resolve(response);
                } else {
                    reject(response.messsage);
                }
            })
        })
    }

    static ajax(options){
        let loading;
        if (options.data && options.data.isShowLoading !== false) {
            loading = document.getElementById('ajaxLoading');
            loading.style.display = 'block';
        }
        const baseURL = " https://www.easy-mock.com/mock/5cda217deaec62215193d21a/mockapi"
        return new Promise((resolve,reject)=>{
            axios({
                url:options.url,
                method:"get",
                baseURL:baseURL,
                timeout:5000,
                params:(options.data && options.data.params) || ""
            }).then((response)=>{
                if (options.data && options.data.isShowLoading !== false) {
                    loading = document.getElementById('ajaxLoading');
                    loading.style.display = 'none';
                }
                if (response.status===200) {
                    let res = response.data
                    if (res.code===0) {
                        resolve(res)
                    }else{
                        reject(res)
                    }
                }
            }).catch((err)=>{
                console.log("请求出错了");
            })
        })
    }
}