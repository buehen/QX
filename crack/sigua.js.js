/*
寰俊鍏紬鍙凤細ios榛戠鎶€
瀹樻柟缃戠珯锛歴7aa.cn

鍦圶:

[rewrite_local]

#涓濈摐瑙ｉ攣VIP瑙嗛鏃犻檺鐪�
^http:\/\/api-01\.sssggg666\.com:8089\/cxapi\/.+ url script-request-header https://6678888.xyz/quantumultX/sigua.js

[mitm]
hostname = api-01.sssggg666.com:8089

涓濈摐涓嬭浇鍦板潃
https://sigua001.com?_s=KKLADF

*/


var modifiedHeaders = $request.headers;

modifiedHeaders['uid'] = '6972841';
modifiedHeaders['token'] = 'fbee5bc861f17d7e1ef5530d3cfc458a';

$done({headers : modifiedHeaders});