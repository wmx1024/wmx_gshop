 // axios请求函数模块
 import axios from 'axios'

 // 创建axios实例，并配置其参数
 const request = axios.create({
   baseURL: 'http://localhost:3000/xxx',
   timeout: 1000
 })
 
 /*
 * 配置请求拦截器
 */
 axios.interceptors.request.use(function (config) {
   // Do something before request is sent
   return config;
 }, function (error) {
   // Do something with request error
   return Promise.reject(error);
 });

/*
* 配置响应拦截器
 */
 axios.interceptors.response.use(function (response) {
   // Do something with response data
   return response;
 }, function (error) {
   // Do something with response error
   return Promise.reject(error);
 });

// 默认导出axios实例
 export default request
