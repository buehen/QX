/*
寰俊鍏紬鍙凤細ios榛戠鎶€
瀹樻柟缃戠珯锛歴7aa.cn

鍦圶:

[rewrite_local]

#娑╅噷鐣猇IP瑙嗛鏃犻檺鐪�
^http:\/\/api-01\.apiselifan11\.com\/cxapi\/.+ url script-request-header https://6678888.xyz/quantumultX/slfan.js

[mitm]
hostname = api-01.apiselifan11.com

娑╅噷鐣笅杞藉湴鍧€
https://slf506.com?_s=SCPGEF 

*/


var modifiedHeaders = $request.headers;

modifiedHeaders['uid'] = '3092806';
modifiedHeaders['token'] = '90d44e34f308d1cb9a538fd4c3d0ca0e';

$done({headers : modifiedHeaders});