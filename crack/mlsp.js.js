/*
寰俊鍏紬鍙凤細ios榛戠鎶€
瀹樻柟缃戠珯锛歴7aa.cn

QX:
[rewrite_local]
#鍜摡瑙嗛
^https:\/\/awmattack\.(.+)\.com\/(api/member/info|api/video/video/video_play) url script-response-body https://6678888.xyz/quantumultX/mlsp.js

[mitm]
hostname = awmattack.*.com

涓嬭浇鍦板潃
鍜摡瑙嗛:
http://69n1.cn
http://neihan4871.com

*/
var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const a = '/api/member/info';
const b = '/api/video/video/video_play';

if (url.indexOf(a) != -1) {
    obj.data.item.vip = 1,
    obj.data.item.vip_expire = 4092647115,
    obj.data.item.coin = 999880,
    obj.data.item.nick = "鍏紬鍙凤細ios榛戠鎶€",
    body = JSON.stringify(obj);
}
if (url.indexOf(b) != -1) {
    obj.data.vip = 0,
    obj.data.price = 0,
    body = JSON.stringify(obj);
}


$done({body});