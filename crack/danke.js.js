/*
寰俊鍏紬鍙凤細ios榛戠鎶€
瀹樻柟缃戠珯锛歴7aa.cn

鍦圶:

[rewrite_local]

#铔嬪３瑙ｉ攣VIP鏃犻檺鐪�
^https:\/\/ipa\.angtrend\.com\/.+ url script-request-header danke.js


[mitm]
hostname = api.fiftymvapi.com:8080,m3u8.91-tv.me

铔嬪３涓嬭浇鍦板潃
https://dks.shantianwuyu.com/1/3378149.html


*/


var modifiedHeaders = $request.headers;

modifiedHeaders['User-Agent'] = 'dan ke/1.0 (iPhone; iOS 14.4.2; Scale/2.00)';

modifiedHeaders['uid'] = '3378149';

modifiedHeaders['Cookie'] = 'sec_tc=AQAAAIsdUiDJAggAda8XPbYRm3OO1Oa4';

modifiedHeaders['token'] = '7706a2958b2238afa26c8c3f7a299ada';


$done({headers : modifiedHeaders});