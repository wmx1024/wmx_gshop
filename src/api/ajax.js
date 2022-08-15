/*
ajax请求函数模块
返回值: promise对象(异步返回的数据是: response.data)
 */
import axios from 'axios'

// 封装ajax请求函数
export default function ajax (url, data= {}, type= 'GET') {
  /*
  * url：请求地址
  * data：参数，默认为空对象
  * type：请求类型，默认为get
  *  */

  // 请求成功之后要返回一个promise对象
  return new Promise(function (resolve, reject) {
    // 存储请求后的promise结果
    let promise
    //当请求类型为get请求时
    if (type === 'GET') {
      /*
      * 准备url query参数数据
      *  */
      let dataStr = '' // 存储拼接好的query参数字符串

      // 遍历对象的键，返回数组后继续遍历
      Object.keys(data).forEach(key => {
        // 以key=value&的形式存储到query字符串中
        dataStr += key + '=' + data[key] + '&'
      })

      // 如果请求参数不为空
      if (dataStr !== '') {
        // 截取最后一个&之前的所有数据
        dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
        // 整理url：拼接? + 参数
        url = url + '?' + dataStr
      }
      // 发送get请求
      promise = axios.get(url)
    } else {
      // 发送post请求
      promise = axios.post(url, data)
    }

    // 当返回的promise状态是成功的
    promise.then(function (response) {
      // 成功了调用resolve()，返回一个promise对象
      resolve(response.data)
    }).catch(function (error) {
      // 失败了调用reject()，也返回一个promise对象
      reject(error)
    })
  })
}

/*
const response = await ajax()
const result = response.data

const resule = await ajax()
 */
