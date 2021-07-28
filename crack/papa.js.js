/*
寰俊鍏紬鍙凤細ios榛戠鎶€
瀹樻柟缃戠珯锛歴7aa.cn

鍦圶
[rewrite_local]
#鍟暘瑙ｉ攣瑙嗛鏃犻檺鐪�
^https:\/\/api\.papa\w+\.com(\/video\/api\/movie\/v2\/(play|[0-9]+)|\/uc\/user\/info|\/video\/api\/movie\/v2\/cache) url script-response-body papa.js

^https:\/\/api\.papa\w+\.com\/live\/api\/home\/announcement\/v1\/list url reject-200

[mitm]
hostname= api.papa???.com

鍟暘鐩存挱涓嬭浇鍦板潃锛氾紙浠绘剰娉ㄥ唽涓嶉檺鍒讹紝涓嶆敹楠岃瘉鐮侊級
閭€璇风爜锛歅WTIHQ
http://uarnu.com/l1Uo0w4?icode=PWTIHQ

*/


var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

body=body.replace(/playRemainCnt":\d+/g,'playRemainCnt":99').replace(/cacheRemainCnt":\d+/g,'cacheRemainCnt":99').replace(/remainCnt":\d+/g,'remainCnt":99').replace(/isBanPost":\d+/g,'isBanPost":1').replace(/authorityFlag":\w+/g,'authorityFlag":true').replace(/superAdminFlag":\w+/g,'superAdminFlag":true').replace(/vipFlag":\w+/g,'vipFlag":true').replace(/level":\d+/g,'level":99').replace(/code":\d+/g,'code":200').replace(/remainCnt":\d+/g,'remainCnt":99').replace(/msg":".+?"/g,'msg":"鎿嶄綔鎴愬姛"').replace(/data":\w+/g,'data":{"remainCnt":77}');


$done({body});