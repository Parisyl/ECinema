import axios from "axios";
import {ElMessage} from "element-plus";

const defaultError = () => ElMessage.error('发生了一些错误，请联系管理员')
const defaultFailure = (message: string) => ElMessage.error(message)
const phoneReg: RegExp = /^1[34578][0-9]{9}$/;
const emailReg = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/
const passwordReg: RegExp = /^(?=.*[a-zA-Z])(?=.*[1-9])(?=.*W).{6,}$/;
const nameReg: RegExp = /^[\u4e00-\u9fa5a-zA-Z0-9_-]{4,16}$/
function post(url: string, requestData: object, successCallback: Function, failureCallback: Function = defaultFailure, errorCallback: Function = defaultError) {
    axios.post(url, requestData, {
        withCredentials: true
    })
        .then(({data}) => {
            if (data.success) {
                successCallback(data.message, data.status);
            } else {
                failureCallback(data.message, data.status);
            }
        })
        .catch(error => {
            errorCallback('请求失败', error.status); // 处理请求失败的情况
        });
}

function loginPost(url: string, requestData: object, successCallback: Function, failureCallback: Function = defaultFailure, errorCallback: Function = defaultError) {
    axios.post(url, requestData, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        withCredentials: true
    }).then(({data}) => {
        if (data.success) {
            successCallback(data.message, data.status)
        } else {
            failureCallback(data.message, data.status)
        }
    })
        .catch(error => {
            errorCallback('请求失败', error.status); // 处理请求失败的情况
        });
}

function get(url: string, successCallback: Function, failureCallback: Function = defaultFailure, errorCallback: Function = defaultError) {
    axios.get(url, {
        withCredentials: true
    }).then(({data}) => {
        if (data.success) {
            successCallback(data.message, data.status)
        } else {
            failureCallback(data.message, data.status)
        }

    }).catch(error => {
        errorCallback('请求失败', error.status); // 处理请求失败的情况
    })
}

export {get, post, loginPost, nameReg, phoneReg, emailReg, passwordReg}