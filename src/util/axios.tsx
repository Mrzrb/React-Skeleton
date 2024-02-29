import axios from "axios";
import { Config } from "./config";

const client = axios.create({
    baseURL: Config.baseUrl,
    timeout: 5000,
});


client.interceptors.request.use(config => {
    return config;
}, err => {

});

client.interceptors.response.use(res => {
    return res.data;
}, err => {
    if (err && err.response) {
        switch (err.response.status) {
            case 400:
                console.log("请求错误");
                break;
            case 401:
                console.log("未授权访问");
                break;
            default:
                console.log("其他错误信息");
        }
    }
    return err;
});

export { client }
