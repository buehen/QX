/*
寰俊鍏紬鍙凤細ios榛戠鎶€
瀹樻柟缃戠珯锛歴7aa.cn


[rewrite_local]
#杈ｆ瑙ｉ攣浼氬憳鍘诲箍鍛�
^http:\/\/jk\.5apk\.cn\/api\/(base|modulesData|reg|play) url script-response-body https://6678888.xyz/quantumultX/lajiao.js

[mitm]
hostname= jk.5apk.cn

杈ｆ涓嬭浇鍦板潃锛�
http://v.sj6.live/?code=S48DGK

*/



var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const p1 = '/base';
const p2 = '/modulesData';
const p3 = '/reg';
const p4 = '/play';

if (url.indexOf(p1) != -1) {
    obj.data.advertising = [{}],
    body = JSON.stringify(obj);
} 
if (url.indexOf(p2) != -1) {
    obj.data.ad = [],
    body = JSON.stringify(obj);
} 
if (url.indexOf(p3) != -1) {
    obj.data.member.is_vip = 1,
    obj.data.member.vip_date = "2099-09-09",
    obj.data.member.nick_name = "ios榛戠鎶€",
    obj.data.member.level_id = 6,
    body = JSON.stringify(obj);
} 
if (url.indexOf(p4) != -1) {
    obj.data.notMore = 0,
    obj.data.isread = 0,
    body = JSON.stringify(obj);
} 
$done({body});