/*
寰俊鍏紬鍙凤細 ios榛戠鎶€
瀹樻柟缃戠珯锛歴7aa.cn

QX:
[rewrite_local]
#闈㈠寘FM瑙ｉ攣浼氬憳
^http:\/\/wx\.voxpie\.com\/(api/fmapp_user|api/fmapp_bookinfo) url script-response-body mbfm.js

[mitm]
hostname = wx.voxpie.com

涓嬭浇鍦板潃
https://apps.apple.com/cn/app/id1406687423

*/
var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

body=body.replace(/is_vip":\d/g,'is_vip":1').replace(/vip_start_date":.+?,/g,'vip_start_date":"鑷冲皧浼氬憳",').replace(/vip_end_date":.+?,/g,'vip_end_date":"姘镐箙鐣呭惉",').replace(/nickname":.+?,/g,'nickname":"ios榛戠鎶€",').replace(/profile":.+?,/g,'profile":"鍏虫敞寰俊鍏紬鍙�:ios榛戠鎶€",').replace(/pay_status":"\w+/g,'pay_status":"free');


$done({body});