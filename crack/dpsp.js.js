/*
寰俊鍏紬鍙凤細ios榛戠鎶€
瀹樻柟缃戠珯锛歴7aa.cn

鍦圶
[rewrite_local]
#鐙搧绀惧尯瑙ｉ攣浼氬憳
^http:\/\/lfwmkj\.com\/(api\/user\/personal|api\/community\/edit) url script-response-body https://6678888.xyz/quantumultX/dpsq.js

[mitm]
hostname= lfwmkj.com

鐙搧绀惧尯涓嬭浇鍦板潃锛氾紙浠绘剰鍙锋敞鍐屼笉闄愬埗锛屼笉鏀堕獙璇佺爜锛�
閭€璇风爜锛欿4GPHE
https://wws.lanzous.com/s/seyou01
https://wws.lanzous.com/s/seyou02

*/



var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);


const p1 = '/api/community/edit';
const p2 = '/api/user/personal';


if (url.indexOf(p1) != -1) {
    obj = {
  "code": 200,
},
    body = JSON.stringify(obj);
} 
if (url.indexOf(p2) != -1) {
    obj.data.vip = 1,
    obj.data.vip_time = "2099-09-09 09:09:09",
    body = JSON.stringify(obj);
} 
$done({body});