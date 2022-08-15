// 导入axios请求对象
import request from './request'

/*
* dev：根据经纬度获取位置详情
* url：http://localhost:3000/position/:geohash
* method：GET
* data：geohash<String> 经纬度
*/
export const reqGetAddress = (geohash) => request.get(`/position/:${geohash}`)

/*
* dev：获取食品分类列表
* url：http://localhost:3000/index_category
* method：GET
* data：None
*/
export const reqGetFoodCategoryList = () => request.get('/index_category')

/*
* dev：根据经纬度获取商铺列表
* url：http://localhost:3000/shops
* method：GET
* data：query （latitude<String> 纬度， longitude<String> 经度）
*/
export const reqGetShopList = (longitude, latitude) => request.get(`/shops?longitude?longitude=${longitude}&latitude=${latitude}`)

/*
* dev：根据经纬度和关键字搜索商铺列表
* url：http://localhost:3000/search_shops
* method：GET
* data：query （geohash<String> 经纬度, keyword 关键字）
*/
export const reqGetShopListByGeohashAndKeyword = (geohash, keyword) => request.get(`/search_shops?geohash=${geohash}&keyword=${keyword}`)

/*
* dev：获取一次性验证码
* url：http://localhost:3000/captcha
* method：GET
* data：None
*/
export const reqGetCaptcha = () => request.get('/captcha')

/*
* dev：用户名密码登录
* url：http://localhost:3000/login_pwd
* method：POST
* data：body （name<String> 用户名, pwd<String> 密码, captcha<String> 验证码）
*/
export const reqLoginByPwd = (data) => request.post('/login_pwd', {data: data})

/*
* dev：发送短信验证码
* url：http://localhost:3000/sendcode
* method：GET
* data：query （phone<String> 手机号）
*/
export const reqGetSendCode = (phone) => request.get(`/sendcode?phone=${phone}`)

/*
* dev：手机号验证码登陆
* url：http://localhost:3000/login_sms
* method：POST
* data：body （phone<手机号> 用户名, code<String> 验证码）
*/
export const reqLoginBySms = (data) => request.post('/login_sms', {data: data})

/*
* dev：根据会话获取用户信息
* url：http://localhost:3000/userinfo
* method：GET
* data：None
*/
export const reqGetUserInfo = () => request.get('/userinfo')

/*
* dev：用户退出
* url：http://localhost:3000/logout
* method：GET
* data：None
*/
export const reqLogout = () => request.get('logout')
