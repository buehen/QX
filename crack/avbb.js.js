/*
寰俊鍏紬鍙凤細ios榛戠鎶€
瀹樻柟缃戠珯锛歴7aa.cn

鍦圶:

[rewrite_local]

#AV娉㈡尝瑙ｉ攣VIP鏃犻檺鐪�
^https:\/\/s\.(.+)\.com\/s2\/.+ url script-request-header https://6678888.xyz/quantumultX/avbb.js

[mitm]
hostname = s.*.com,

娉㈡尝涓嬭浇鍦板潃锛�
https://see-mybb-6.com/webApp/root/static/AppTabView/screen/static/OfficialShareView?code=6BILKPMKOYW

https://caoni-99.com/webApp/root/static/AppTabView/screen/static/OfficialShareView?code=6BILKPMKOYW

*/


var modifiedHeaders = $request.headers;

modifiedHeaders['login_token'] = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyZWdfdXNlcl9pZCI6IjYwNmU3YjRmNDk5NDMyMDAwMTYyMzM5NCIsInVzZXJfY29kZSI6IjZCSUxLUE1LT1lXIiwidW5pcXVlIjoic21hbGwtMDFiZTVmNTk2MmQ0NDA3NTkzMWNkMTMyNWJiMjc5NTgiLCJ0eXBlIjoiYmFuZyIsImV4cCI6MTYyNTMzNzI5NiwicmVnVHlwZSI6Im1vYmlsZSIsInJlZ2lzdGVyRGF0ZSI6IjIwMjEtMDQtMDgifQ.1v3WwgMjNIQbqwEsLoG_1SCwxH5vPBDAHwBtIMLRFYY';

$done({headers : modifiedHeaders});