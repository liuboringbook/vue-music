import jsonp from 'common/js/jsonp'
import {commonParams,options} from './config'
import axios from 'axios'


// export function getSinger() {
//   const url = '/api/getSinger';
//   const data = Object.assign({},commonParams,{
//     '-': 'getUCGI43805731006163184',
//     platform: 'yqq.json',
//     loginUin:15,
//     hostUin: 0,
//     needNewCode: 0,
//     format: 'json',
//     inCharset: 'utf8',
//     data: {"comm":{"ct":24,"cv":0},"singerList":{"module":"Music.SingerListServer","method":"get_singer_list","param":{"area":-100,"sex":-100,"genre":-100,"index":-100,"sin":0,"cur_page":1}}}
//   })
//   return axios.get(url,{
//     params:data
//   }).then((res)=>{
//     return Promise.resolve(res.data)
//   })
// }

export function getSingerList(){
  const url = 'https://c.y.qq.com/v8/fcg-bin/v8.fcg'
  const data =Object.assign({},commonParams, {
    channel: 'singer',
    page: 'list',
    key: 'all_all_all',
    pagesize: 100,
    pagenum: 1,
    hostUin: 0,
    needNewCode: 0,
    platform: 'yqq'
  })
  return jsonp(url,data,options)
}

